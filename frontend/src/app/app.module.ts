import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { AppComponent } from './app.component';
import { RatingComponent } from './common/rating.component';
import { productIntreceptor } from './Home/intreceptor/product.intreceptor';
import { appRoutes } from './routes/app.routes';
@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:productIntreceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
