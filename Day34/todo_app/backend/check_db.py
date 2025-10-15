# backend/check_db.py
# Prüf-Skript, um direkt die Daten in der SQLite-Datenbank auszulesen.

from sqlalchemy import create_engine, select
from sqlalchemy.orm import sessionmaker
from .models import Base, Task  


DATABASE_URL = "sqlite:///./todo.db"  

engine = create_engine(
    DATABASE_URL, connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    """Hilfsfunktion, um eine DB-Session zu erhalten."""
    db = SessionLocal()
    try:
        return db
    finally:
        db.close()

def print_all_tasks():
    """Liests alle Tasks aus der Datenbank und gibt sie im Terminal aus."""
    db = get_db()
    
    
    statement = select(Task)
    
    tasks = db.scalars(statement).all()
    
    if not tasks:
        print("Keine Tasks in der Datenbank gefunden.")
        return

    print("--- Gefundene Tasks in todo.db ---")
    for task in tasks:
        
        created_at_str = task.created_at.strftime('%Y-%m-%d %H:%M') if task.created_at else 'N/A'
        
        status = "✅ Erledigt" if task.completed else "❌ Offen"
        
        
        title_display = task.title[:40] + '...' if len(task.title) > 40 else task.title
        
        print(f"ID: {task.id} | Titel: {title_display} | Status: {status} | Erstellt: {created_at_str}")
        
    print("-----------------------------------")

if __name__ == "__main__":
    print_all_tasks()