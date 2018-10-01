import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
 

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit { 
    mail:string='';
    name:string='';
    name_temp:string='';
    mail_temp:string='';
    display_box:boolean=false;
    constructor(  private router: Router) { 
       
    }

    ngOnInit() {
       
    }
    onSubmit(){
        this.name_temp='';
        this.mail_temp='';
        this.display_box=false;
        console.log(this.name,this.mail)
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(this.mail) == true && this.name!='') 
        {
            alert("success")
            this.display_box=true;
            this.name_temp=this.name;
            this.mail_temp=this.mail;
            this.name='';
            this.mail='';
        }else if(this.mail=='' && this.name==''){
            alert('Pease enter name and mail')
        }else if(reg.test(this.mail) == false){
            alert('Enter valid email address')
        }else if(this.name!=''){
            alert('Enter Name')
        }
    }
    
}