from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from ..conex import connect_to_db, disconnect_from_db


app = FastAPI(
    title="UBP - Back Fastapi",
    description="Alumno: Grupo de los 4",
    version="1.0.0",
)

# Permite solicitudes desde todos los orígenes (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Conectar a la base de datos en el inicio de la aplicación
@app.on_event("startup")
async def startup():
    await connect_to_db()

# Desconectar de la base de datos en el cierre de la aplicación
@app.on_event("shutdown")
async def shutdown():
    await disconnect_from_db()

# Ruta de inicio
@app.get("/")
def home():
    return {"message": "Hola mundo"}

# Ruta de ejemplo con parámetros
@app.get("/items/{item_id}")
def read_item(item_id: int, rubro: str = None):
    return {"item_id": item_id, "rubro": rubro}
