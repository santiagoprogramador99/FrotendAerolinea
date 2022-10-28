import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VueloComponent } from './vuelo/vuelo.component';

const routes: Routes = [
  {path: 'Vuelo',component:VueloComponent},
  { path : '', pathMatch: 'full', redirectTo : 'Vuelo'},
  { path: '**', redirectTo: 'Vuelo'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
