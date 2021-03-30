import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {RegisterComponent} from './components/public/register/register.component';
import {FormsModule} from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import { ActualitesListComponent } from './components/private/retraite/actualites/actualites-list/actualites-list.component';
import { NavbarComponent } from './components/private/shared/navbar/navbar.component';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { DashboardComponent } from './components/private/retraite/reservation/dashboard/dashboard.component';
import { MoteurComponent } from './components/private/retraite/reservation/moteur/moteur.component';
import { Section1Component } from './components/private/retraite/reservation/moteur/section1/section1.component';
import { MoteurArticleComponent } from './components/private/retraite/actualites/moteur-article/moteur-article.component';
import { Section2Component } from './components/private/retraite/reservation/moteur/section2/section2.component';
import { Section3Component } from './components/private/retraite/reservation/moteur/section3/section3.component';
import { Section4Component } from './components/private/retraite/reservation/moteur/section4/section4.component';
import { ArticledashComponent } from './components/private/retraite/article/articledash/articledash.component';
import { Article1Component } from './components/private/retraite/article/article1/article1.component';

import {ReactiveFormsModule} from '@angular/forms';
import { ListeAttenteComponent } from './components/private/admin/gestion-retraites/liste-attente/liste-attente.component';
import { ListeComponent } from './components/private/admin/gestion-retraites/liste/liste.component';
import { DashboardAdminComponent } from './components/private/admin/gestion-retraites/dashboard-admin/dashboard-admin.component'

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthentificationService } from './services/authentification.service';
import { AuthentificationGuard } from './guards/authentification.guard';
import { ArticleService } from './services/article.service';
import { CarouselComponent } from './components/private/shared/carousel/carousel.component';
import { RegisterValidationComponent } from './components/public/register-validation/register-validation.component';
import { UpdateRetraiteComponent } from './components/private/admin/gestion-retraites/update-retraite/update-retraite.component';
import { Page404Component } from './components/public/page404/page404.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { AddReclamComponent } from './components/private/retraite/reclam-retraite/add-reclam/add-reclam.component';
import { UpdateReclamComponent } from './components/private/retraite/reclam-retraite/update-reclam/update-reclam.component';
import { RepTraiteReclamComponent } from './components/private/retraite/reclam-retraite/rep-traite-reclam/rep-traite-reclam.component';
import { RepNontraiteReclamComponent } from './components/private/retraite/reclam-retraite/rep-nontraite-reclam/rep-nontraite-reclam.component';
import { DashboardReclamComponent } from './components/private/retraite/reclam-retraite/dashboard-reclam/dashboard-reclam.component';
import { ListeReclamAttenteComponent } from './components/private/admin/gestion-reclam/liste-reclam-attente/liste-reclam-attente.component';
import { ListeReclamComponent } from './components/private/admin/gestion-reclam/liste-reclam/liste-reclam.component';
import { ContenuReclamComponent } from './components/private/admin/gestion-reclam/contenu-reclam/contenu-reclam.component';
import { ReponseReclamComponent } from './components/private/admin/gestion-reclam/reponse-reclam/reponse-reclam.component';
import { Moteur1Component } from './components/private/retraite/reservation/moteur1/moteur1.component';
import { Moteur2Component } from './components/private/retraite/reservation/moteur2/moteur2.component';
import { ProfilComponent } from './components/private/retraite/profil/profil.component';





@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ActualitesListComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    MoteurComponent,
    Section1Component,
    MoteurArticleComponent,
    Section2Component,
    Section3Component,
    Section4Component,
    ArticledashComponent,
    Article1Component,
    ListeAttenteComponent,
    ListeComponent,
    DashboardAdminComponent,
    CarouselComponent,
    RegisterValidationComponent,
    UpdateRetraiteComponent,
    Page404Component,
    AddReclamComponent,
    UpdateReclamComponent,
    RepTraiteReclamComponent,
    RepNontraiteReclamComponent,
    DashboardReclamComponent,
    ListeReclamAttenteComponent,
    ListeReclamComponent,
    ContenuReclamComponent,
    ReponseReclamComponent,
    Moteur1Component,
    Moteur2Component,
    ProfilComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  
  providers: [AuthentificationService, AuthentificationGuard, ArticleService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    }],

  bootstrap: [AppComponent]
})
export class AppModule { }
