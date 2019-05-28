import { Component, OnInit } from '@angular/core';
import { GeekdataService, ErrorType } from './geekdata.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';
  planets = "";
  vehicles = "";

  constructor(private oData: GeekdataService) {

  }

  ngOnInit() {
    this.oData.getErrorStateObs().subscribe((oErrorTyp) => {
      if (oErrorTyp === ErrorType.SUCCESS) {
        this.planets = this.oData.Planets;
        this.vehicles = this.oData.Vehicles;
      }
    });
  }
}
