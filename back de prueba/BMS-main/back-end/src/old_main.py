"""
from fastapi import FastAPI
# from .routers.routers import items_router
from .routers.book_router import books_router
from .routers.user_router import users_router

# Create FastAPI app
app = FastAPI(
        title="BMS - Book Managment System",
        description="Alumno: Rafael Alesso - 2024",
        version="1.0.0"
)

# Routes
# app.include_router(items_router)
app.include_router(books_router)
app.include_router(users_router)
"""