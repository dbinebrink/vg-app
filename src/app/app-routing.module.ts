import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './_components/about/about.component';
import { ContactComponent } from './_components/contact/contact.component';
import { LoginComponent } from './_components/login/login.component';
import { HomeComponent } from './_components/home/home.component';
import { ProductsComponent } from './_components/products/products.component';
import { UserWelcomeComponent } from './_components/user-welcome/user-welcome.component';
import { UserListComponent } from './_components/user-list/user-list.component';
import { GamesComponent } from './_components/games/games.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { CartComponent } from './_components/cart/cart.component';
import { LogoutComponent } from './_components/logout/logout.component';

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
