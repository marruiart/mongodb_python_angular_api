import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Breed } from './breed';
import { lastValueFrom } from 'rxjs';

const API_URL = 'http://localhost:8000/breed';

@Injectable({
  providedIn: 'root'
})
export class BreedService {

  constructor(private http: HttpClient) { }

  getBreeds(): Promise<Breed[]> {
    return lastValueFrom(this.http.get<Breed[]>(API_URL));
  }

  getBreedById(id: string): Promise<Breed> {
    return lastValueFrom(this.http.get<Breed>(`${API_URL}/${id}`));
  }

  postBreed(breed: Breed): Promise<string> {
    return lastValueFrom(this.http.post<string>(API_URL, breed));
  }

  putBreed(id: string, breed: Breed): Promise<void> {
    return lastValueFrom(this.http.put<void>(`${API_URL}/${id}`, breed));
  }

  deleteBreed(id: string): Promise<void> {
    return lastValueFrom(this.http.delete<void>(`${API_URL}/${id}`));
  }
}
