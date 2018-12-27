import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { QaComponent } from './qa/qa.component';
import { FooterComponent } from './footer/footer.component';
import {SlideshowModule} from 'ng-simple-slideshow';

import { ReactiveFormsModule } from '@angular/forms';
import { FunfactComponent } from './funfact/funfact.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';
import { GlobalRankingComponent } from './global-ranking/global-ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContactComponent,
    HomeComponent,
    TutorialsComponent,
    QuizzesComponent,
    QaComponent,
    FooterComponent,
    FunfactComponent,
    PersonalProfileComponent,
    GlobalRankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
