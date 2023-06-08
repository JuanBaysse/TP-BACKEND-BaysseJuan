import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Punto2Component } from './punto2/punto2/punto2.component';
import { Punto1Component } from './punto1/punto1.component';
import { FormComponent } from './form/form/form.component';
import { TableComponent } from './table/table/table.component';
import { Pto1Component } from './pto1/pto1.component';
import { Pto1AComponent } from './pto1-a/pto1-a.component';
import { PagebComponent } from './pageb/pageb/pageb.component';
const routes: Routes = [
  { path: 'punto1', component:  Pto1Component },
  { path: 'punto2', component: PagebComponent },
  { path: 'punto5/:id', component: FormComponent },
  { path: 'punto5b', component: TableComponent },
  { path: 'punto1A', component: Pto1AComponent },
  { path: '', redirectTo: '/punto1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
