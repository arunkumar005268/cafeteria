import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

<<<<<<< HEAD
import{ HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerateComponent } from './generate/generate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SentotpComponent } from './sentotp/sentotp.component';

=======

import { AppComponent } from './app.component';
import { GenerateComponent } from './generate/generate.component';
import { OtpComponent } from './otp/otp.component';
import { RouterModule } from '@angular/router';
>>>>>>> 5bed02f121835a3a89c0c016bf50210db6658de7

@NgModule({
  declarations: [
    AppComponent,
    GenerateComponent,
<<<<<<< HEAD
    DashboardComponent,
    SentotpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
=======
    OtpComponent
  ],
  imports: [
    BrowserModule,
    
>>>>>>> 5bed02f121835a3a89c0c016bf50210db6658de7
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
