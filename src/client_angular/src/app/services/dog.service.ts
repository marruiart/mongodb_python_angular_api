import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dog } from './dog';
import { lastValueFrom } from 'rxjs';

const API_URL = 'http://localhost:8000/dog';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient) { }

  getDogs(): Promise<Dog[]> {
    return lastValueFrom(this.http.get<Dog[]>(API_URL));
  }

  getDogById(id: string): Promise<Dog> {
    return lastValueFrom(this.http.get<Dog>(`${API_URL}/${id}`));
  }

  postDog(dog: Dog): Promise<string> {
    return lastValueFrom(this.http.post<string>(API_URL, dog));
  }

  putDog(id: string, dog: Dog): Promise<void> {
    return lastValueFrom(this.http.put<void>(`${API_URL}/${id}`, dog));
  }

  deleteDog(id: string): Promise<void> {
    return lastValueFrom(this.http.delete<void>(`${API_URL}/${id}`));
  }
}
