import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ItemViewComponent } from './body/item-view/item-view.component';

const appRoutes:Routes = [
  {path:'',component:BodyComponent},
  {path:':item',component:ItemViewComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
