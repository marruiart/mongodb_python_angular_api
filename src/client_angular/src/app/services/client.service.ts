import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './client';
import { lastValueFrom } from 'rxjs';

const API_URL = 'http://localhost:8000/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getClients(): Promise<Client[]> {
    return lastValueFrom(this.http.get<Client[]>(API_URL));
  }

  getClientById(id: string): Promise<Client> {
    return lastValueFrom(this.http.get<Client>(`${API_URL}/${id}`));
  }

  postClient(client: Client): Promise<string> {
    return lastValueFrom(this.http.post<string>(API_URL, client));
  }

  putClient(id: string, client: Client): Promise<void> {
    return lastValueFrom(this.http.put<void>(`${API_URL}/${id}`, client));
  }

  deleteClient(id: string): Promise<void> {
    return lastValueFrom(this.http.delete<void>(`${API_URL}/${id}`));
  }
}
