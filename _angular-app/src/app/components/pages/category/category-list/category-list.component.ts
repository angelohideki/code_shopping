import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Array<{id: number, name: string, active:boolean, created_at:{date:string}}> = [];

  constructor(private  http: HttpClient) {

  }

  ngOnInit(): void {
    const  token = window.localStorage.getItem('token');
    this.http.get<{data:Array<{id: number, name: string, active:boolean, created_at:{date:string}}>}>('http://localhost:8000/api/categories', {
       headers:{
         'Authorization' : `Bearer ${token}`
       }
    })
      .subscribe(response => {
        response.data[0].active = false;
        this.categories = response.data
      });
  }

}