import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MyWorksComponent } from './my-works/my-works.component';


const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"contact", component:ContactComponent},
  {path:"help", component:HomeComponent},
  {path:"my-works", component:MyWorksComponent},
  {path:"", pathMatch:"full", redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
