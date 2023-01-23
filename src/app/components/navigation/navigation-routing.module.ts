import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { NavigationComponent } from './navigation.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'coink', component: NavigationComponent, children: [
      {
        path: 'card-requests', loadChildren: () => import('../card-requests/card-requests.module').then(m => m.CardRequestsModule)
      },
      {
        path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
      }
    ]
  },
  { 
    path: '', redirectTo: 'login', pathMatch: 'full' 
  },
  {
    path: '**', redirectTo: 'login' 
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
