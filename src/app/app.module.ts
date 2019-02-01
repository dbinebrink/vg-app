import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './_components/about/about.component';
import { ContactComponent } from './_components/contact/contact.component';
import { LoginComponent } from './_components/login/login.component';
import { HomeComponent } from './_components/home/home.component';
import { ProductsComponent } from './_components/products/products.component';
import { SidebarComponent } from './_components/sidebar/sidebar.component';
import { UserWelcomeComponent } from './_components/user-welcome/user-welcome.component';
import { UserListComponent } from './_components/users/users.component';
import { GamesComponent } from './_components/games/games.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { CartComponent } from './_components/cart/cart.component';
import { StarComponent } from './_components/star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    ProductsComponent,
    HomeComponent,
    SidebarComponent,
    UserWelcomeComponent,
    UserListComponent,
    GamesComponent,
    DashboardComponent,
    CartComponent,
    StarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
