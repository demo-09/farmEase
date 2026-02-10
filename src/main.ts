import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./app/app').then(m => m.App) },
];

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
