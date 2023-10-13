import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { SignDynamicComponent } from './pages/signin-dynamic/signin-dynamic.component';
import { SigninFbComponent, SigninGoogleComponent } from './components';
import { SigninRouteComponent } from './pages/signin-route/signin-route.component';

const ROUTE: Route[] = [
  {
    path: 'signin',
    component: SignDynamicComponent,
  },
  {
    path: 'signin-route',
    component: SigninRouteComponent,
    children: [
      {
        path: 'fb',
        component: SigninFbComponent,
      },
      {
        path: 'google',
        component: SigninGoogleComponent,
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/signin?by=fb'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SignDynamicComponent,
    SigninFbComponent,
    SigninGoogleComponent,
    SigninRouteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTE)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
