import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Reactive Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// http
import { HttpClientModule } from '@angular/common/http';

// components
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { TopNavComponent } from './top-nav/top-nav.component';

// services
import { PubsubService } from './services/pub-sub.service';
import { CommonService } from './services/common.service';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    TopNavComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    PubsubService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
