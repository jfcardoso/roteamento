import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageWithParameterComponent } from './page-with-parameter/page-with-parameter.component';

const routes: Routes = [
  {path: "first-page", component: FirstPageComponent},
  {path: "second-page", component: SecondPageComponent},
  {path: "", redirectTo: "first-page", pathMatch: "full"},
  {path: "page-with-parameter/:id", component: PageWithParameterComponent},
  {path: "**", component: PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
