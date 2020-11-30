import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeBarComponent } from './home/home-bar/home-bar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent,
    children: [
      { path: 'homebar', component: HomeBarComponent }
    ]
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
