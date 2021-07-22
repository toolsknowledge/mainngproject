import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { AppComponent } from './app.component';
import { CartEffets } from './Cart/effects/cart.effects';
import { cartReducer } from './Cart/reducer/cart.reducer';
import CartService from './Cart/services/cart.service';
import { RatingComponent } from './common/rating.component';
import { sharedModule } from './common/shared.module';
import { productIntreceptor } from './Home/intreceptor/product.intreceptor';
import { appRoutes } from './routes/app.routes';
@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [
    {
    provide:HTTP_INTERCEPTORS,
    useClass:productIntreceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
