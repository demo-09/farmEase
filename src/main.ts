import { bootstrapApplication } from '@angular/platform-browser';
import { Routes, provideRouter, withHashLocation } from '@angular/router';
import { App } from './app/app';
import { Signup } from './app/pages/signup/signup';
import { Login } from './app/pages/login/login';
import { HomePage } from './app/pages/Home/home-page/home-page';
import { About } from './app/pages/about/about';


/* Define routes */
const routes: Routes = [
  { path: '', component : HomePage },
  { path: 'Signup', component: Signup },
  { path: 'Login', component: Login },
  { path: 'About', component: About },
];

/* App configuration */
const appConfig = {
  providers: [
    provideRouter(routes, withHashLocation())
  ]
};

/* Bootstrap the Angular application */
bootstrapApplication(App, appConfig)
  .catch(err => console.error('Bootstrap error:', err));
