# Definir y Validar Objetos de Petición y Respuesta
from pydantic import BaseModel
from datetime import datetime
# Pydantic Request Schema
class ItemCreate(BaseModel):
    name: str
    description: str
# Pydantic Response Schema
class ItemResponse(ItemCreate):
    id: int
    created_at: datetime