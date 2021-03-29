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
import { UpdateRetraiteComponent } from './components/private/admin/gestion-retraites/update-retraite/update-retraite.component';
import { Page404Component } from './components/public/page404/page404.component';
import { RetraiteGuard } from './guards/retraite.guard';
import { AdminGuard } from './guards/admin.guard';
import { DashboardReclamComponent } from './components/private/retraite/reclam-retraite/dashboard-reclam/dashboard-reclam.component';
import { AddReclamComponent } from './components/private/retraite/reclam-retraite/add-reclam/add-reclam.component';
import { RepNontraiteReclamComponent } from './components/private/retraite/reclam-retraite/rep-nontraite-reclam/rep-nontraite-reclam.component';
import { UpdateReclamComponent } from './components/private/retraite/reclam-retraite/update-reclam/update-reclam.component';
import { RepTraiteReclamComponent } from './components/private/retraite/reclam-retraite/rep-traite-reclam/rep-traite-reclam.component';
import { ListeReclamAttenteComponent } from './components/private/admin/gestion-reclam/liste-reclam-attente/liste-reclam-attente.component';
import { ListeReclamComponent } from './components/private/admin/gestion-reclam/liste-reclam/liste-reclam.component';
import { ContenuReclamComponent } from './components/private/admin/gestion-reclam/contenu-reclam/contenu-reclam.component';
import { ReponseReclamComponent } from './components/private/admin/gestion-reclam/reponse-reclam/reponse-reclam.component';
import { Moteur2Component } from './components/private/retraite/reservation/moteur2/moteur2.component';


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
    path:"retraite",
    canActivateChild : [RetraiteGuard],
    children:
    [
      {
        path:"actualites",
        component:ActualitesListComponent
      },
      {
        path:"article",
        component:ArticledashComponent
      },
      {
        path:"dashboard",
        component: DashboardComponent
      },
      {
        path:"moteur",
        component: MoteurComponent
      },
      {
        path:"moteur2",
        component: Moteur2Component
      },

      {
        path:"reclamation",
        component: DashboardReclamComponent
      },
      {
        path:"add-reclam",
        component: AddReclamComponent
      },
      {
        path:"rep-nontraite-reclam",
        component: RepNontraiteReclamComponent
      },
      {
        path:"rep-traite-reclam",
        component: RepTraiteReclamComponent
      },
      {
        path:"update-reclam",
        component: UpdateReclamComponent
      },
    ]
  },
  {
    path:"admin",
    canActivateChild :[AdminGuard],
    children:
    [
      {
        path:"dashboard",
        component:DashboardAdminComponent
      },
      {
        path:"liste",
        component:ListeComponent,
      },
      {
        path:"update",
        component:UpdateRetraiteComponent,
      },
      {
        path:"liste-reclam-attente",
        component:ListeReclamAttenteComponent
      },
      {
        path:"liste-reclam",
        component:ListeReclamComponent
      },
      {
        path:"contenu-reclam",
        component:ContenuReclamComponent
      },
      {
        path:"reponse-reclam",
        component:ReponseReclamComponent
      }
    ]
  },
  /*page404*/
  {
    path:"**",
    component:Page404Component
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }