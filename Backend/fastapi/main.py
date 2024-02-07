from fastapi import FastAPI

app = FastAPI(
    title="UBP - Back Fastapi",
    description="Alumno: Grupo de los 4",
    version="1.0.0",
)

@app.get("/")
def home():
    return {"message": "Hola mundo"}

@app.get("/items/{item_id}")
def read_item(item_id: int, rubro: str = None):
    return {"item_id": item_id, "rubro": rubro}