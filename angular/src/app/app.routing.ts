//common//
import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
//Pages//
 
import { MainHeaderComponent } from './main-header/main-header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ListComponent } from './list/list.component';
export const routes: Routes = [
    { path: '', component: MainHeaderComponent },
   { path: 'about', component: AboutComponent },
   { path: 'contact', component: ContactComponent },
   { path: 'list', component: ListComponent },
]
@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})

export class AppRoutingModule {}