import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PolizaComponent } from './pages/poliza/poliza.component';
import { PolizasComponent } from './pages/polizas/polizas.component';

@NgModule({
  declarations: [
    AppComponent,
    PolizaComponent,
    PolizasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
