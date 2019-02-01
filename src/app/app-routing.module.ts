import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards/auth.guard';

import { AboutComponent } from './_components/about/about.component';
import { ContactComponent } from './_components/contact/contact.component';
import { LoginComponent } from './_components/login/login.component';
import { HomeComponent } from './_components/home/home.component';
import { ProductsComponent } from './_components/products/products.component';
import { UserWelcomeComponent } from './_components/user-welcome/user-welcome.component';
import { UserListComponent } from './_components/users/users.component';
import { GamesComponent } from './_components/games/games.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { CartComponent } from './_components/cart/cart.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, redirectTo: '' },
  { path: 'products', component: ProductsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'games', component: GamesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { 
    path: 'user-welcome', 
    component: UserWelcomeComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'cart', 
    component: CartComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'users', 
    component: UserListComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent, redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

