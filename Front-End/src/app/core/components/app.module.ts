import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { reqService } from '../services/requisition.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [reqService],
  bootstrap: [AppComponent]
})
export class AppModule { }
