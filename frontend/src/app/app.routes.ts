import { Routes } from '@angular/router';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ManageComponent } from './pages/manage/manage.component';

export const routes: Routes = [
    { path: '', component:  LandingpageComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'manage', component: ManageComponent }
];
