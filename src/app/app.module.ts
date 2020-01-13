import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LiteracyTabularComponent } from './literacy-tabular/literacy-tabular.component';
import { LiteracyService } from './Shared/literacy.service';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { LiteracyChartComponent } from './literacy-chart/literacy-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LiteracyTabularComponent,
    LiteracyChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    FormsModule
  ],
  providers: [LiteracyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
