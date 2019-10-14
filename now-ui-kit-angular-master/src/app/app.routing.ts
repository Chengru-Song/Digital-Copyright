import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { RegisterComponent } from './examples/register/register.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes =[
    { path: '', redirectTo: 'index', pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'index',                component: LandingComponent, canActivate: [AuthGuard] },
    { path: 'login',                component: LoginComponent },
    { path: 'profile',              component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'register',             component: RegisterComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
