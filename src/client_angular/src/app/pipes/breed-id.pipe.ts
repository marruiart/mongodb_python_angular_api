import { Pipe, PipeTransform } from '@angular/core';
import { BreedService } from '../services/breed.service';

@Pipe({
  name: 'breedId'
})
export class BreedIdPipe implements PipeTransform {

  constructor(private breedService: BreedService) {
  }

  async transform(id: string): Promise<string> {
    const breed = await this.breedService.getBreedById(id);
    return breed.breed_name;
  }
}
