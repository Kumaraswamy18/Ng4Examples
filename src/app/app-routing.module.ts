import { NgModule, ModuleWithProviders }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDashboardComponent }   from './hero-dashboard/hero-dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { DevelopersComponent }  from './developers/developers.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CanActivateViaOAuthGuard } from './oAuth.canActivateGuard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: HeroDashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'developers', component: DevelopersComponent },
  { path: 'home', component: HomeComponent , canActivate : [CanActivateViaOAuthGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

// Export routes
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);