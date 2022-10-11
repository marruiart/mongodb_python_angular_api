from server.models import Client
from server.models import Dog
from server.models import Breed
from fastapi import APIRouter
from server.dbconfig import db

# Arregla la compatibilidad entre el ObjectId de MongoDB y el tipo str
from pydantic import json
from bson.objectid import ObjectId

json.ENCODERS_BY_TYPE[ObjectId] = str

client_router = APIRouter()
dog_router = APIRouter()
breed_router = APIRouter()


# CLIENTS ROUTES

@client_router.get("/client")
async def get_clients():
  return list(db.myclient.find())

@client_router.get("/client/{id}")
async def get_client(id: str):
  return str(db.myclient.find_one({"_id": ObjectId(id)}))

@client_router.post("/client")
async def post_client(client: Client):
    nuevo_client = dict(client) # convertimos a diccionario 
    # Aquí voy a grabar el client de la BBDD
    id = db.myclient.insert_one(nuevo_client).inserted_id
    return str(id)

@client_router.put("/client/{id}")
async def put_client(id: str, client: Client):
  db.myclient.find_one_and_update({"_id": ObjectId(id)}, {"$set": dict(client)})

@client_router.delete("/client/{id}")
async def delete_client(id: str):
  db.myclient.find_one_and_delete({"_id": ObjectId(id)})


# DOGS ROUTES

@dog_router.get("/dog")
async def get_dogs():
  return list(db.dog.find())

@dog_router.get("/dog/{id}")
async def get_dog(id: str):
  return str(db.dog.find_one({"_id": ObjectId(id)}))

@dog_router.post("/dog")
async def post_dog(dog: Dog):
    nuevo_dog = dict(dog) # convertimos a diccionario 
    # Aquí voy a grabar el dog de la BBDD
    id = db.dog.insert_one(nuevo_dog).inserted_id
    return str(id)

@dog_router.put("/dog/{id}")
async def put_dog(id: str, dog: Dog):
  db.dog.find_one_and_update({"_id": ObjectId(id)}, {"$set": dict(dog)})

@dog_router.delete("/dog/{id}")
async def delete_dog(id: str):
  db.dog.find_one_and_delete({"_id": ObjectId(id)})


# BREEDS ROUTES

@breed_router.get("/breed")
async def get_breeds():
  return list(db.breed.find())

@breed_router.get("/breed/{id}")
async def get_breed(id: str):
  return str(db.breed.find_one({"_id": ObjectId(id)}))

@breed_router.post("/breed")
async def post_breed(breed: Breed):
    nuevo_breed = dict(breed) # convertimos a diccionario 
    # Aquí voy a grabar el breed de la BBDD
    id = db.breed.insert_one(nuevo_breed).inserted_id
    return str(id)

@breed_router.put("/breed/{id}")
async def put_breed(id: str, breed: Breed):
  db.breed.find_one_and_update({"_id": ObjectId(id)}, {"$set": dict(breed)})

@breed_router.delete("/breed/{id}")
async def delete_breed(id: str):
  db.breed.find_one_and_delete({"_id": ObjectId(id)})
