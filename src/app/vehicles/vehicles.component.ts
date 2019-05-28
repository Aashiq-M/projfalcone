import { Component, OnInit } from '@angular/core';
import { GeekdataService, ErrorType } from './../geekdata.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  public vehicles;

  constructor(private oData: GeekdataService) { }

  ngOnInit() {
    this.oData.getErrorStateObs().subscribe((oErrorTyp) => {
      if (oErrorTyp === ErrorType.SUCCESS) {        
        this.vehicles = this.oData.Vehicles;
      }
    });
  }

}