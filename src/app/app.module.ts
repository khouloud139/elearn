import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ServiceComponent } from './component/home/service/service.component';
import { AboutComponent } from './component/home/about/about.component';
import { CategoriesComponent } from './component/home/categories/categories.component';
import { CoursesComponent } from './component/home/courses/courses.component';
import { TeamComponent } from './component/home/team/team.component';
import { TestimonialComponent } from './component/home/testimonial/testimonial.component';
import { ContactComponent } from './component/home/contact/contact.component';
import { LoginComponent } from './component/login/login.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { MathematiqueComponent } from './component/cours/mathematique/mathematique.component';
import { SearchComponent } from './component/search/search.component';
import { ScrollComponent } from './component/scroll/scroll.component';
import { CommentaireComponent } from './component/commentaire/commentaire.component';
import { Header2Component } from './component/header2/header2.component';
import { PhysiqueComponent } from './component/cours/physique/physique.component';
import { DatascienceComponent } from './component/cours/datascience/datascience.component';
import { VisionordinateurComponent } from './component/cours/visionordinateur/visionordinateur.component';

@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    ServiceComponent,
    AboutComponent,
    CategoriesComponent,
    CoursesComponent,
    TeamComponent,
    TestimonialComponent,
    ContactComponent,
    LoginComponent,
    InscriptionComponent,
    MathematiqueComponent,
    SearchComponent,
    ScrollComponent,
    CommentaireComponent,
    Header2Component,
    PhysiqueComponent,
    DatascienceComponent,
    VisionordinateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
