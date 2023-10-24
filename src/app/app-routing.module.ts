import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageWithParameterComponent } from './page-with-parameter/page-with-parameter.component';
import { ProtectedPageComponent } from './protected-page/protected-page.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "first-page", component: FirstPageComponent},
  {path: "second-page", component: SecondPageComponent},
  {path: "", redirectTo: "first-page", pathMatch: "full"},
  {path: "page-with-parameter/:id", component: PageWithParameterComponent},
  {path: "protected-page", component: ProtectedPageComponent, canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent},
  {path: 'lazy-module', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) },
  {path: "**", component: PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
