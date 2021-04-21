import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
