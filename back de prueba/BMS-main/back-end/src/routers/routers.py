from fastapi import APIRouter, Depends
from ..config.db import get_db
from ..models.models import Item
from ..schemas.schemas import ItemCreate, ItemResponse
from sqlalchemy.orm import sessionmaker
# Items Router
items_router = APIRouter()
# Get All Items
@items_router.get("/items/")
async def get_items(db=Depends(get_db)):
    db_items = db.query(Item).all()
    return db_items
# Create item
@items_router.post("/items/", response_model=ItemResponse)
def create_item(item: ItemCreate, db: sessionmaker = Depends(get_db)):
    db_item = Item(**item.dict())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item