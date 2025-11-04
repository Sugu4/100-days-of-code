# backend/auth.py (FINALER, KOMPLETTER CODE)

import os
from datetime import datetime, timedelta
from typing import Optional
from passlib.context import CryptContext
from jose import jwt, JWTError
from dotenv import load_dotenv

load_dotenv()

# Umgebungsvariablen (für JWT-Erstellung/Prüfung)
SECRET_KEY = os.getenv("SECRET_KEY", "SECURE_FALLBACK_KEY")
ALGORITHM = os.getenv("ALGORITHM", "HS256")
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "60"))

# HASHING CONTEXT (PBKDF2 ist stabil)
pwd_context = CryptContext(schemes=["pbkdf2_sha256"], deprecated="auto")

# 1. PASWORT HASHING FUNKTION (Wird von main.py aufgerufen!)
def get_password_hash(password: str) -> str:
    # Verwendet das stabile PBKDF2
    return pwd_context.hash(password)

# 2. PASSWORT VERIFIZIERUNG
def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

# 3. JWT TOKEN ERSTELLUNG
def create_access_token(data: dict, expires_delta: Optional[timedelta] = None) -> str:
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire, "sub": data.get("sub")})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

# 4. TOKEN DEKODIERUNG
def decode_token(token: str) -> dict:
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except JWTError:
        raise