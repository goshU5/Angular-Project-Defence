import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddCarComponent } from './add-car/add-car.component';
import { CarRoutingModule } from './car-routing.module'
import { CatalogComponent } from './catalog/catalog.component';
import { FormsModule } from '@angular/forms';
import { CarDetailsComponent } from './car-details/car-details.component';



@NgModule({
  declarations: [
    AddCarComponent,
    CatalogComponent,
    CarDetailsComponent
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    RouterModule,
    FormsModule,
  ],
})
export class CarModule { }
