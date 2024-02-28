# Conexión con la BBDD
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# Define SQLAlchemy model
Base = declarative_base()

# Create SQLite database in memory
SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db" # "postgresql://postgres:postgres@localhost:5432/BMS"

# Create Database Engine
engine = create_engine(SQLALCHEMY_DATABASE_URL) #, connect_args={"check_same_thread": False}

# Create Database if not exists
Base.metadata.create_all(bind=engine)

# Dependency to get the database session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
def get_db():
    db = SessionLocal
    return db()