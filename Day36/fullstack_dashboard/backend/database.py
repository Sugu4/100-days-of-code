# backend/database.py
from sqlmodel import create_engine, SQLModel, Session
import os

# WICHTIG: Verwenden Sie den Dateinamen auth.db für JWT-Projekte
DATABASE_URL = "sqlite:///./auth.db" 

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})

def create_db_and_tables():
    # Initialisierung der DB-Tabellen aus SQLModel.metadata
    SQLModel.metadata.create_all(engine)

def get_session():
    with Session(engine) as session:
        yield session