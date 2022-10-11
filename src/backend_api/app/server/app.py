from fastapi import FastAPI
from server.routes import client_router
from server.routes import dog_router
from server.routes import breed_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

""" Aquí hacemos la lista blanca de admitidos para que no falle el CORS """
origins = [
    "http://localhost",
    "http://localhost:4200",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)

app.include_router(client_router)
app.include_router(dog_router)
app.include_router(breed_router)


# @app.get("/", tags=['root'])
# async def read_root():
#   return {"message": "Hola mundo"}



