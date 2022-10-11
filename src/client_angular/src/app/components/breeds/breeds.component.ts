import { Component, OnInit } from '@angular/core';
import { Breed } from 'src/app/services/breed';
import { BreedService } from 'src/app/services/breed.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss']
})
export class BreedsComponent implements OnInit {

  breeds: Breed[] = [];
  breed!: Breed;
  action = "postBreed";
  displayDialog: boolean = false;

  breedForm = new FormGroup({
    _id: new FormControl(''),
    breed_name: new FormControl(''),
  })

  constructor(private breedService: BreedService) {
    this.loadBreeds();
  }

  async loadBreeds() {
    this.breeds = await this.breedService.getBreeds();
  }

  async submitBreed() {
    let breed = <Breed>this.breedForm.value;
    if (this.action === "postBreed")
      await this.breedService.postBreed(breed);
    else
      await this.breedService.putBreed(<string>breed._id, breed);
    this.breedForm.reset();
    this.displayDialog = false;
    this.loadBreeds();
    this.action = "postBreed";
  }

  editBreed(breed: Breed) {
    this.displayDialog = true;
    this.action = "editBreed";
    this.breedForm.patchValue(breed);
  }

  async removeBreed(id: string) {
    await this.breedService.deleteBreed(id);
    this.loadBreeds();
  }

  ngOnInit(): void {
  }

}
