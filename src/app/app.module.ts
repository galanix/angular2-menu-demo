import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { AlertModule } from 'ngx-bootstrap';
import { SearchService } from './search.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  	declarations: [
  	  	AppComponent,
  	  	SearchComponent
  	],
  	imports: [
  		AlertModule.forRoot(),
  	  	BrowserModule,
  	  	routes,
        HttpModule,
        FormsModule
  	],
  	providers: [SearchService],
  	bootstrap: [AppComponent]
})

export class AppModule { }
