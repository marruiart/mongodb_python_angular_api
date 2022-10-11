import { Component, OnInit } from '@angular/core';
import { Dog } from 'src/app/services/dog';
import { Breed } from 'src/app/services/breed';
import { Client } from 'src/app/services/client';
import { DogService } from 'src/app/services/dog.service';
import { ClientService } from 'src/app/services/client.service';
import { BreedService } from 'src/app/services/breed.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  dogs: Dog[] = [];
  breeds: Breed[] = [];
  breedById: string = "";
  client_id: string = "";
  clients: Client[] = [];
  dog!: Dog;
  action = "postDog";
  displayDialog: boolean = false;

  dogForm = new FormGroup({
    _id: new FormControl(''),
    dog_name: new FormControl(''),
    age: new FormControl(''),
    breed_id: new FormControl(''),
    client_id: new FormControl('')
  })

  constructor(
    private dogService: DogService,
    private clientService: ClientService,
    private breedService: BreedService
  ) {
    this.loadDogs();
  }

  async loadDogs() {
    this.dogs = await this.dogService.getDogs();
    this.breeds = await this.breedService.getBreeds();
    this.clients = await this.clientService.getClients();
  }

  async submitDog() {
    let dog = <Dog>this.dogForm.value;
    console.log(dog);
    if (this.action === "postDog")
      await this.dogService.postDog(dog);
    else
      await this.dogService.putDog(<string>dog._id, dog);
    this.dogForm.reset();
    this.displayDialog = false;
    this.loadDogs();
    this.action = "postDog";
  }

  editDog(dog: Dog) {
    this.displayDialog = true;
    this.action = "editDog";
    this.dogForm.patchValue(dog);
  }

  async removeDog(id: string) {
    await this.dogService.deleteDog(id);
    this.loadDogs();
  }

  ngOnInit(): void {
  }

}
