import { Component } from '@angular/core';
import { ICar } from 'src/app/shared/interfaces/car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  cars: ICar[] | undefined
  isEmpty: boolean = false;
  constructor(private carService: CarService){
    this.getAllCars()
  }

  getAllCars(){
    this.cars = undefined;
    this.carService.getAllCars().subscribe({
      next: (cars) => {
        this.cars = cars
        if(cars.length == 0){
          this.isEmpty = true;
        }
      }
    })
  }
}
