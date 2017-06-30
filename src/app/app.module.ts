import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { SearchUsersService } from './search-users.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroDashboardComponent } from './hero-dashboard/hero-dashboard.component';
import { HeroService }          from './hero.service';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { DevelopersComponent } from './developers/developers.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { CanActivateViaOAuthGuard } from './oAuth.canActivateGuard';

@NgModule({
  declarations: [
    AppComponent,
    SearchUsersComponent,
    HeroSearchComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroDashboardComponent,
    DevelopersComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true} ),
    AppRoutingModule
  ],
  providers: [ SearchUsersService, HeroService, CanActivateViaOAuthGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
