import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
 

@Component({
    selector: 'app-main-header',
    templateUrl: './main-header.component.html',
    styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

    private active_menu;
    private menu_name=['VueJs','About','Contact','List']
    private navigation_link:any=[
         {title:"VueJs",link_url:""},
         {title:"About",link_url:"/about"},
         {title:"Contact form",link_url:"/contact"},
         {title:"List",link_url:"/list"},
       
        ];
    constructor(private router:Router ) {
        this.onSetActiveTab();
    }

    ngOnInit() {
        
    }

    private enableSelected(num){
        this.active_menu=num;
      }
    private onSetActiveTab(){
        let current_url = (this.router.url).split("/");
        let current_url_String;
        current_url_String=(current_url[current_url.length-2]);
        this.active_menu=this.menu_name.indexOf(current_url_String);
        if(current_url_String=="" || current_url_String==undefined){
        this.active_menu='';
        }
    }


}