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
    DashboardAdminComponent
    
   
    
    
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
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
