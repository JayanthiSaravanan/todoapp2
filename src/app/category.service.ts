import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  //apiUrl = 'http://localhost:3000/';
   apiUrl = environment.apiUrl;


  constructor(private http:HttpClient)
  {}

  addCategory(categoryObj: any){

    let url = this.apiUrl + 'category';
    return this.http.post(url,categoryObj);
  }
updateCategory(id: number, obj: any){
  let url = this.apiUrl + 'category';
  return this.http.put(url, obj);
}

getAllCategory(){
  let url = this.apiUrl + 'category';
  return this.http.get(url);
}

deleteCategory(obj:any){
  let url = this.apiUrl + 'category';
  return this.http.get(url,obj);
}
}



