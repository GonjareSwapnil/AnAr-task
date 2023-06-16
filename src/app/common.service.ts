import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  baseUrl = "https://jsonplaceholder.typicode.com/";
  

  constructor(private http:HttpClient) { 

  }

  // To get task list
  getTaskList(endPoint: any){
    const url =  this.baseUrl + endPoint ;
    return this.http.get(url);
   }
}
