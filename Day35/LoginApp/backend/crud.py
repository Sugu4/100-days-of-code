from sqlmodel import select
from sqlmodel import Session
from . import models, schemas
from typing import Optional

def get_user_by_username(session: Session, username: str) -> Optional[models.User]:
    statement = select(models.User).where(models.User.username == username)
    return session.exec(statement).first()

def get_user_by_email(session: Session, email: str) -> Optional[models.User]:
    statement = select(models.User).where(models.User.email == email)
    return session.exec(statement).first()

def create_user(session: Session, user_create: schemas.UserCreate, password_hash: str) -> models.User:
    user = models.User(
        username=user_create.username,
        email=user_create.email,
        password_hash=password_hash
    )
    session.add(user)
    session.commit()
    session.refresh(user)
    return user

def get_user(session: Session, user_id: int) -> Optional[models.User]:
    statement = select(models.User).where(models.User.id == user_id)
    return session.exec(statement).first()
