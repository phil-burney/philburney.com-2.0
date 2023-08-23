import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [  { path: '', component: HomepageComponent}, 

//{path: 'portfolio', component: PortfolioComponent}, 
{path: 'aboutme', component: AboutmeComponent}, 
{path: 'resume', component: ResumeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
