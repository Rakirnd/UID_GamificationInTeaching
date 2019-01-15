import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {TutorialsComponent} from './tutorials/tutorials.component';
import {QuizzesComponent} from './quizzes/quizzes.component';
import {QaComponent} from './qa/qa.component';
import {FunfactComponent} from './funfact/funfact.component';
import {PersonalProfileComponent} from './personal-profile/personal-profile.component';
import {GlobalRankingComponent} from './global-ranking/global-ranking.component';
import {FunfactPostComponent} from './funfact/funfact-post/funfact-post.component';
import {AskComponent} from './qa/ask/ask.component';
import {EditComponent} from './personal-profile/edit/edit.component';
import {AddTutorialComponent} from './add-tutorial/add-tutorial.component';
import {AddQuizComponent} from './add-quiz/add-quiz.component';
import {AddStepsComponent} from './add-steps/add-steps.component';
import {ViewComponent} from './tutorials/view/view.component';
import {AnswerComponent} from './qa/answer/answer.component';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RegisterComponent} from './register/register.component';
import {QuestionComponent} from './question/question.component';
import {QuizComponent} from './quiz/quiz.component';
import {ScorePageComponent} from './score-page/score-page.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'funfact', component: FunfactComponent},
  {path: 'funfact-post', component: FunfactPostComponent},
  {path: 'tutorials', component: TutorialsComponent},
  {path: 'quizzes', component: QuizzesComponent},
  {path: 'qa', component: QaComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'personal-profile', component: PersonalProfileComponent},
  {path: 'global-ranking', component: GlobalRankingComponent},
  {path: 'askk', component: AskComponent},
  {path: 'edit', component: EditComponent},
  {path: 'addTutorial', component: AddTutorialComponent},
  {path: 'addQuiz', component: AddQuizComponent},
  {path: 'addSteps', component: AddStepsComponent},
  {path: 'view-tutorial', component: ViewComponent},
  {path: 'tutorial-view', component: ViewComponent},
  {path: 'answer', component: AnswerComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'question', component: QuestionComponent},
  {path: 'viewQuiz', component: QuizComponent},
  {path: 'scorePage', component: ScorePageComponent},
  {path: '**', component: PageNotFoundComponent} // always keep this as last component in the list, please, or it will break the whole application
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
