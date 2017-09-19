import { Component, OnInit } from '@angular/core';
import { CarService } from '../../service/carservice';
import { Car } from '../../domain/car';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  loading: boolean;
  
      cars: Car[];
      
      cols: any[];
      
      constructor(private carService: CarService) { }
  
      ngOnInit() {
          this.loading = true;
          setTimeout(() => {
              this.carService.getCarsSmall().then(cars => this.cars = cars);
              this.loading = false;
          }, 1000);
          
          this.cols = [
              {field: 'vin', header: 'Vin'},
              {field: 'year', header: 'Year'},
              {field: 'brand', header: 'Brand'},
              {field: 'color', header: 'Color'}
          ];
      }

}
