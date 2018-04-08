import { AuthUser } from './services/AuthUser.service';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'ngx-slider';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PageContentComponent } from './page-content/page-content.component';
import { GetProductsService } from './services/getProducts.service';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddAddressComponent } from './add-address/add-address.component';



const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent ,children:[
    { path: '', component: PageContentComponent},
    { path: 'product-description', component: ProductDescriptionComponent },
    { path: 'buy-product', component: BuyProductComponent },
    { path: 'address', component: AddAddressComponent }
  ]}, 
  { path: '**', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageContentComponent,
    ProductDescriptionComponent,
    BuyProductComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AddAddressComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    SliderModule
  ],
  providers: [GetProductsService,AuthUser],
  bootstrap: [AppComponent]
})
export class AppModule { }
