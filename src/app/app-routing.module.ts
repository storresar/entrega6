import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecetasComponent } from './recetas/recetas.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'recetarios',component: HomeComponent },
  {path:'recetas/:id', component: RecetasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
