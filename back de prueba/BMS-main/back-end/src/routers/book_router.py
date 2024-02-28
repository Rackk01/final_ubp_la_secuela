from fastapi import APIRouter, Depends, HTTPException
from config.db import get_db
from models.book_model import BookModel
from schemas.book_schemas import BookCreate, BookResponse
from sqlalchemy.orm import Session

# Books Router
books_router = APIRouter(
    prefix="/books",
    tags=["Books"]
)

# Get All Books
@books_router.get("/")
async def get_books(db=Depends(get_db)):
    db_books = db.query(BookModel).all()
    return db_books

# Create Book
@books_router.post("/{book_id}", status_code=201, response_model=BookResponse)
async def create_book(new_book: BookCreate, db: Session = Depends(get_db)):
    db_book = BookModel(**new_book.dict())
    db.add(db_book)
    db.commit()
    db.refresh(db_book)
    return db_book

# Get User
@books_router.get("/{book_id}", status_code=201, response_model=BookResponse)
async def get_book(book_id: int, db: Session = Depends(get_db)):
    db_book = db.query(BookModel).filter(BookModel.id == book_id).first()
    if not db_book:
        raise HTTPException(status_code=404, detail="User not found")
    return db_book

# Update Book
@books_router.put("/{book_id}", response_model=BookResponse)
async def update_book(book_id: int, updated_book: BookCreate, db=Depends(get_db)):
    db_book = db.query(BookModel).filter(BookModel.id == book_id).first()
    if not db_book:
        raise HTTPException(status_code=404, detail="Book not found")
    db_book.name = updated_book.name
    db_book.desc = updated_book.description
    db_book.ownner_id = updated_book.owner_id
    db.commit()
    db.refresh(db_book)
    return db_book

# Delete Book
@books_router.delete("/{book_id}")
async def delete_book(book_id: int, db=Depends(get_db)):
    db_book = db.query(BookModel).filter(BookModel.id == book_id).first()
    if not db_book:
        raise HTTPException(status_code=404, detail="Book not found")
    db.delete(db_book)
    db.commit()
    return {"message": "Book deleted successfully"}