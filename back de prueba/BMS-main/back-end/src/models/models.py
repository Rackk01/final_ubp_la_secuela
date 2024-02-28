# Define la cómo se guardará la Información dentro de las Tablas en la BBDD
from ..config.db import Base
from sqlalchemy import Column, Integer, String, DateTime, Sequence
from datetime import datetime

class Item(Base):
    __tablename__ = 'items'

    id = Column(Integer, Sequence('item_id_seq'), primary_key=True)
    name = Column(String(50))
    description = Column(String(100))
    created_at = Column(DateTime, default=datetime.utcnow)