from fastapi import FastAPI
import uvicorn
from config.db import Base, engine
from routers.book_router import books_router
from routers.user_router import users_router
# Create Tables if dont exists
def create_tables():
    Base.metadata.create_all(bind=engine)
create_tables()
# Create App
app = FastAPI(
        title="BMS - Book Managment System",
        description="Alumno: Rafael Alesso - 2024",
        version="1.0.0"
)
# App Routes
# app.include_router(items_router)
app.include_router(books_router)
app.include_router(users_router)
if __name__=="__main__":
    uvicorn.run("main:app", port=8000, reload=True)