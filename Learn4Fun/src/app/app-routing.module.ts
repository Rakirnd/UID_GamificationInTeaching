import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {TutorialsComponent} from './tutorials/tutorials.component';
import {QuizzesComponent} from './quizzes/quizzes.component';
import {QaComponent} from './qa/qa.component';
import {FunfactComponent} from './funfact/funfact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'funfact', component: FunfactComponent},
  {path: 'tutorials', component: TutorialsComponent},
  {path: 'quizzes', component: QuizzesComponent},
  {path: 'qa', component: QaComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
