import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { productIntreceptor } from './Home/intreceptor/product.intreceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:productIntreceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
