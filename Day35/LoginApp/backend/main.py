from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from sqlmodel import Session
from datetime import timedelta
from typing import Optional
from fastapi.middleware.cors import CORSMiddleware

from . import models, schemas, crud, auth, database

database.create_db_and_tables()

app = FastAPI(title="Login Demo", version="1.0")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"], # Erlaubt alle Methoden (POST, GET, OPTIONS, etc.)
    allow_headers=["*"],
)

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/token")  

def get_db():
    yield from database.get_session()

# Registration
@app.post("/register", response_model=schemas.UserRead, status_code=status.HTTP_201_CREATED)
def register(user_in: schemas.UserCreate, session: Session = Depends(get_db)):
    if crud.get_user_by_username(session, user_in.username):
        raise HTTPException(status_code=400, detail="Username already registered")
    if crud.get_user_by_email(session, user_in.email):
        raise HTTPException(status_code=400, detail="Email already registered")
    hashed = auth.get_password_hash(user_in.password)
    user = crud.create_user(session, user_in, hashed)
    return user

# Login and token generation
@app.post("/token", response_model=schemas.Token)
def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), session: Session = Depends(get_db)):
    identifier = form_data.username
    password = form_data.password

    user = crud.get_user_by_username(session, identifier) or crud.get_user_by_email(session, identifier)
    if not user:
        raise HTTPException(status_code=400, detail="Incorrect username or email")
    if not auth.verify_password(password, user.password_hash):
        raise HTTPException(status_code=400, detail="Incorrect password")

    access_token_expires = timedelta(minutes=auth.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = auth.create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}


from jose import JWTError, jwt

def get_current_user(token: str = Depends(oauth2_scheme), session: Session = Depends(get_db)) -> models.User:
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, auth.SECRET_KEY, algorithms=[auth.ALGORITHM])
        username: Optional[str] = payload.get("sub")
        if username is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception

    user = crud.get_user_by_username(session, username)
    if user is None:
        raise credentials_exception
    return user

# Protected endpoint
@app.get("/users/me", response_model=schemas.UserRead)
def read_users_me(current_user: models.User = Depends(get_current_user)):
    return current_user
