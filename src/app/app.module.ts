import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwockiComponent } from './owocki/owocki.component';
import { OwocekDetailsComponent } from './owocek-details/owocek-details.component';
import { MessageComponentComponent } from './message-component/message-component.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { SearchOwockiComponent } from './search-owocki/search-owocki.component';
import { OwockiListComponent } from './owocki-list/owocki-list.component';
import { OwockiMainComponent } from './owocki-main/owocki-main.component';

@NgModule({
  declarations: [
    AppComponent,
    OwockiComponent,
    OwocekDetailsComponent,
    MessageComponentComponent,
    SearchOwockiComponent,
    OwockiListComponent,
    OwockiMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
