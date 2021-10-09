import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PersonalAccountComponent } from './personal-account/personal-account.component';
import { PostInnerpageComponent } from './post-innerpage/post-innerpage.component';
import { PostComponent } from './post/post.component';
import { PostingsComponent } from './postings/postings.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'post',
    component: PostComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'personal-account',
    component: PersonalAccountComponent
  },
  {
    path: 'postings',
    component: PostingsComponent
  },
  {
    path: 'post-innerpage',
    component: PostInnerpageComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
