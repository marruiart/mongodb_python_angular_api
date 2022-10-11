import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/services/client';
import { ClientService } from 'src/app/services/client.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients: Client[] = [];
  client!: Client;
  action = "postClient";
  displayDialog: boolean = false;

  clientForm = new FormGroup({
    _id: new FormControl(''),
    user: new FormControl(''),
    name: new FormControl(''),
    lastname: new FormControl(''),
    dni: new FormControl(''),
    email: new FormControl(''),
    telephone: new FormControl('')
  })

  constructor(private clientService: ClientService) {
    this.loadClients();
  }

  async loadClients() {
    this.clients = await this.clientService.getClients();
  }

  async detailClient(id: string, client: Client) {
    this.displayDialog = true;
    await this.clientService.getClientById(id);
    this.clientForm.patchValue(client);
  }

  async submitClient() {
    let client = <Client>this.clientForm.value;
    console.log(client);
    if (this.action === "postClient")
      await this.clientService.postClient(client);
    else 
      await this.clientService.putClient(<string>client._id, client);
    this.clientForm.reset();
    this.displayDialog = false;
    this.loadClients();
    this.action = "postClient";
  }

  editClient(client: Client) {
    this.displayDialog = true;
    this.action = "editClient";
    this.clientForm.patchValue(client);
  }

  async removeClient(id: string) {
    await this.clientService.deleteClient(id);
    this.loadClients();
  }

  ngOnInit(): void {
  }

}
