import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PolizasComponent } from './pages/polizas/polizas.component';
import { PolizaComponent } from './pages/poliza/poliza.component';

const routes: Routes = [
  { path: 'polizas', component: PolizasComponent },
  { path: 'poliza/:id', component: PolizaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'polizas'}
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
