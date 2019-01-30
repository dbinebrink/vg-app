import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UserWelcomeComponent } from './user-welcome/user-welcome.component';
import { UserListComponent } from './user-list/user-list.component';
import { GamesComponent } from './games/games.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, redirectTo: '' },
  { path: 'user-list', component: UserListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'games', component: GamesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'user-welcome', component: UserWelcomeComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent, redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
