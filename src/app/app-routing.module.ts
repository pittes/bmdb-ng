import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorListComponent } from './feature/actor/actor-list/actor-list.component';

const routes: Routes = [
	{path:'', redirectTo: '/actor/list', pathMatch: 'full'},
	{path:'actor/list', component: ActorListComponent},
	{path:'**', component: ActorListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
