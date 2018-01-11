import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListComponent as WebinarsComponent } from './webinars/components/list/list.component';
import { AppRoutingModule } from './app-routing.module';
import { WebinarService } from './webinars/services/webinar.service';

@NgModule({
  declarations: [
    AppComponent,
    WebinarsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [WebinarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
