import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routes } from './app.routing'
import { MainHeaderComponent } from './main-header/main-header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ListComponent } from './list/list.component';
import {HttpClientModule} from '@angular/common/http';

// import { LocalStorage } from '../app/core/local_storage.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MainHeaderComponent,
    AboutComponent,
    ContactComponent,
    ListComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
