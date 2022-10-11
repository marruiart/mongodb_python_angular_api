from typing import Optional
from pydantic import BaseModel

class Client(BaseModel):
  _id: Optional[str]
  user: str
  name: str
  lastname: str
  dni: str
  email: str
  telephone: str

class Dog(BaseModel):
  _id: Optional[str]
  dog_name: str
  age: str
  breed_id: Optional[str]
  client_id: Optional[str]

class Breed(BaseModel):
  _id: Optional[str]
  breed_name: str