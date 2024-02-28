from fastapi import FastAPI, Depends
from sqlalchemy import create_engine, Column, Integer, String, DateTime, Sequence
from sqlalchemy.orm import sessionmaker, declarative_base
from pydantic import BaseModel
from datetime import datetime

# Define SQLAlchemy model
Base = declarative_base()

class Item(Base):
    __tablename__ = 'items'

    id = Column(Integer, Sequence('item_id_seq'), primary_key=True)
    name = Column(String(50))
    description = Column(String(100))
    created_at = Column(DateTime, default=datetime.utcnow)

# Create SQLite database in memory
DATABASE_URL = "sqlite:///./test.db" #"postgresql://postgres:postgres@postgres:2004/python_db"
engine = create_engine(DATABASE_URL)
Base.metadata.create_all(bind=engine)

# Create FastAPI app
app = FastAPI()

# Pydantic model for request and response
class ItemCreate(BaseModel):
    name: str
    description: str

class ItemResponse(ItemCreate):
    id: int
    created_at: datetime

# Dependency to get the database session
def get_db():
    db = sessionmaker(autocommit=False, autoflush=False, bind=engine)
    return db()

# Create item
@app.post("/items/", response_model=ItemResponse)
def create_item(item: ItemCreate, db: sessionmaker = Depends(get_db)):
    db_item = Item(**item.dict())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item