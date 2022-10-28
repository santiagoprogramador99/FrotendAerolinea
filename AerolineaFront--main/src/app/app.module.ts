import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterfacesComponent } from './interfaces/interfaces.component';
import { ServiceComponent } from './service/service.component';
import { VueloComponent } from './vuelo/vuelo.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    InterfacesComponent,
    ServiceComponent,
    VueloComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
