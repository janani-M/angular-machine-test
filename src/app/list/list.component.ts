import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit { 
    
    
    constructor( private http:HttpClient) { 
       this.getJson();
    }

    ngOnInit() {
       
    }

    getJson() {
        console.log("get")
        return this.http.get('https://jsonplaceholder.typecode.com/comments');
        
    }
}