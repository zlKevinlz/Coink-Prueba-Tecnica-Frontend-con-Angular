import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { NavigationComponent } from './navigation.component';

const routes: Routes = [
  { 
    path: '', redirectTo: '/card-requests', pathMatch: 'full' 
  },
  {
    path: '**', redirectTo: '/card-requests' 
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '', component: NavigationComponent, children: [
      {
        path: 'card-requests', loadChildren: () => import('../card-requests/card-requests.module').then(m => m.CardRequestsModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
