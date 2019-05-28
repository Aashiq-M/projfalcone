import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class GeekdataService {

  private readonly oPlanetUrl = "https://findfalcone.herokuapp.com/planets";
  private readonly oVehiclesUrl = "https://findfalcone.herokuapp.com/vehicles";
  private readonly oAuthFindUrl = "https://findfalcone.herokuapp.com/token";
  private readonly oFindUrl = "https://findfalcone.herokuapp.com/find";
  
  private oPlanetsData;
  private oVehiclesData;
  private oSubject:Subject<ErrorType>;

  constructor(private oHttp: HttpClient) {    
    this.oPlanetsData = null;
    this.oVehiclesData = null;
    this.oSubject = new Subject<ErrorType>();
    this.fetchData();
  }

  public getErrorStateObs(): Observable<ErrorType>{
    return this.oSubject.asObservable();
  }

  public get Planets(){
    return this.oPlanetsData;
  }

  public get Vehicles(){
    return this.oVehiclesData;
  }

  private fetchData(): void {
    Promise.all([this.fetchPlanets(), this.fetchVehicles()])
      .then(() => this.oSubject.next(ErrorType.SUCCESS))
      .catch(() => this.oSubject.next(ErrorType.FAILED));
  }

  private fetchPlanets(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.oHttp.get(this.oPlanetUrl).toPromise()
        .then((oResponse) => {
          this.oPlanetsData = oResponse;
          resolve();
        })
        .catch((oError) => {
          console.log(oError);
          reject();
        });
    });
  }

  private fetchVehicles(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.oHttp.get(this.oVehiclesUrl).toPromise()
        .then((oResponse) => {
          this.oVehiclesData = oResponse;
          resolve();
        })
        .catch((oError) => {
          console.log(oError);
          reject();
        });
    });
  }
}

export enum ErrorType {
  SUCCESS = 0,
  FAILED
}