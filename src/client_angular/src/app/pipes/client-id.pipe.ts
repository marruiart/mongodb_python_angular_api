import { Pipe, PipeTransform } from '@angular/core';
import { ClientService } from '../services/client.service';

@Pipe({
  name: 'clientId'
})
export class ClientIdPipe implements PipeTransform {

  constructor(private clientService: ClientService) {
  }

  async transform(id: string): Promise<string> {
    const client = await this.clientService.getClientById(id);
    return client.name;
  }
}

