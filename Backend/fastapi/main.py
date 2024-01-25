from fastapi import FastAPI

app = FastAPI(
    title="UBP - Curso de FastAPI",
    description="Alumno: Juan Vrech - 2023",
    version="1.0.0",
)

@app.get("/")
def home():
    return {"message": "Hola mundo"}