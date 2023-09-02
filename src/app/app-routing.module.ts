import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { MathematiqueComponent } from './component/cours/mathematique/mathematique.component';
import { PhysiqueComponent } from './component/cours/physique/physique.component';
import { DatascienceComponent } from './component/cours/datascience/datascience.component';
import { VisionordinateurComponent } from './component/cours/visionordinateur/visionordinateur.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'login',component:LoginComponent},
  {path: 'inscription',component:InscriptionComponent},
  {path: 'mathematique',component:MathematiqueComponent},
  {path: 'physique',component:PhysiqueComponent},
  {path: 'data',component:DatascienceComponent},
  {path: 'visionordinateur',component:VisionordinateurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
