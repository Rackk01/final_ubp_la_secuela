import logging
from databases import Database

# Configuración de la base de datos MySQL
DATABASE_USER = "root"
DATABASE_HOST = "localhost"
DATABASE_PORT = "3306"
DATABASE_NAME = "final_ubp"

# Construir la URL de la base de datos
DATABASE_URL = f"mysql://{DATABASE_USER}@{DATABASE_HOST}:{DATABASE_PORT}/{DATABASE_NAME}"

# Inicializar la conexión a la base de datos
database = Database(DATABASE_URL)

# Configurar el logging
logging.basicConfig(level=logging.INFO)

# Función para conectar a la base de datos
async def connect_to_db():
    try:
        await database.connect()
        logging.info("Conexión a la base de datos exitosa")
    except Exception as e:
        logging.error(f"Error al conectar a la base de datos: {e}")

# Función para desconectar de la base de datos
async def disconnect_from_db():
    try:
        await database.disconnect()
        logging.info("Desconexión de la base de datos exitosa")
    except Exception as e:
        logging.error(f"Error al desconectar de la base de datos: {e}")
