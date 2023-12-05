import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { FourfourComponent } from './pages/fourfour/fourfour.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'log-in', component: LogInComponent },

  {
    path: '404',
    component: FourfourComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
