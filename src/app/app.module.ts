import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{ HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerateComponent } from './generate/generate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SentotpComponent } from './sentotp/sentotp.component';


@NgModule({
  declarations: [
    AppComponent,
    GenerateComponent,
    DashboardComponent,
    SentotpComponent
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
