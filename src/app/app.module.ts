import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ButtonModule, DataTableModule, SharedModule } from 'primeng/primeng';
import { ButtonComponent } from './components/button/button.component';
import { HttpModule } from '@angular/http';
import { DatatableComponent } from './components/datatable/datatable.component';
import { CarService } from './service/carservice';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    DatatableComponent
  ],
  imports: [
    BrowserModule, ButtonModule, HttpModule, DataTableModule,SharedModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
