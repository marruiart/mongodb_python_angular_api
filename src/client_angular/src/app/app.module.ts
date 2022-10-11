import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreedsComponent } from './components/breeds/breeds.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { BreedIdPipe } from './pipes/breed-id.pipe';
import { ClientIdPipe } from './pipes/client-id.pipe';

// PrimeNg
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SpeedDialModule } from 'primeng/speeddial';
import { TableModule } from 'primeng/table';
import { ClientsComponent } from './components/clients/clients.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    BreedsComponent,
    DogsComponent,
    BreedIdPipe,
    ClientIdPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

    // PrimeNg
    ButtonModule,
    DialogModule,
    TableModule,
    SpeedDialModule,
    InputTextModule,
    InputMaskModule,
    DropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
