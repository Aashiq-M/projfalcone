import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GeekdataService } from './geekdata.service';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { SummaryComponent } from './summary/summary.component';
import { ReloadComponent } from './reload/reload.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule],
  declarations: [AppComponent, HelloComponent, VehiclesComponent, SummaryComponent, ReloadComponent],
  bootstrap: [AppComponent],
  providers: [GeekdataService]
})
export class AppModule { }
