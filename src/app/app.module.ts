import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{ HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerateComponent } from './generate/generate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SentotpComponent } from './sentotp/sentotp.component';



import { OtpComponent } from './otp/otp.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    GenerateComponent,
    DashboardComponent,
    SentotpComponent,
    OtpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
