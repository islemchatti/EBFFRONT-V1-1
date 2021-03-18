import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActualitesListComponent } from './components/private/retraite/actualites/actualites-list/actualites-list.component';
import { ArticledashComponent } from './components/private/retraite/article/articledash/articledash.component';


import { MoteurComponent } from './components/private/retraite/reservation/moteur/moteur.component';
import { Section1Component } from './components/private/retraite/reservation/moteur/section1/section1.component';
import { DashboardComponent } from './components/private/retraite/reservation/dashboard/dashboard.component';
import { RegisterComponent } from './components/public/register/register.component';
import { DashboardAdminComponent } from './components/private/admin/gestion-retraites/dashboard-admin/dashboard-admin.component';
import { ListeAttenteComponent } from './components/private/admin/gestion-retraites/liste-attente/liste-attente.component';
import { ListeComponent } from './components/private/admin/gestion-retraites/liste/liste.component';
import { AuthentificationGuard } from './guards/authentification.guard';
import { RegisterValidationComponent } from './components/public/register-validation/register-validation.component';
import { Article1Component } from './components/private/retraite/article/article1/article1.component';

const routes: Routes = [

  {
    path:"",
    component:RegisterComponent
  },
  {
    path:"registerValidation",
    component:RegisterValidationComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"section1",
    component:Section1Component
  },
  {
    path:"article",
    component: ArticledashComponent
  },
  {
    path:"retraite",
    children:
    [
      {
        path:"actualites",
        component:ActualitesListComponent
      },
      {
        path:"article1",
        component:ArticledashComponent
      },
      {
        path:"dashboard",
        component: DashboardComponent,
        canActivate: [AuthentificationGuard]
      }
    ]
  },
  {
    path:"admin",
    children:
    [
      {
        path:"dashboard",
        component:DashboardAdminComponent
      },
      {
        path:"liste-attente",
        component:ListeAttenteComponent,
      },
      {
        path:"liste",
        component:ListeComponent,
      },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }