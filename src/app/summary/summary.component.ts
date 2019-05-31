import { Component, OnInit } from '@angular/core';
import { GeekdataService, ChoosenOne } from './geekdata.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})




export class SummaryComponent implements OnInit {

  public oChoosenOnes: Array<ChoosenOne> = new Array<ChoosenOne>();

  constructor() {
    // this.oChoosenOnes = new Array<ChoosenOne>(4);
  }

  ngOnInit() {
    this.fnGetChoosenOnes();
  }

  fnGetChoosenOnes(){
    let planet1:ChoosenOne = {
      planet:"planet1",
      vehicle:"vehicle1",
      time:12
    }
    this.oChoosenOnes.push(planet1);

    let planet2:ChoosenOne = {
      planet:"planet2",
      vehicle:"vehicle2",
      time:12
    }
    this.oChoosenOnes.push(planet2);

    let planet3:ChoosenOne = {
      planet:"planet3",
      vehicle:"vehicle3",
      time:12
    }
    this.oChoosenOnes.push(planet3);

    let planet4:ChoosenOne = {
      planet:"planet4",
      vehicle:"vehicle4",
      time:12
    }
    this.oChoosenOnes.push(planet4);
  }

}