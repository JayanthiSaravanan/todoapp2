import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  //apiUrl = 'http://localhost:3000/';
  apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  addCourse(courseObj:any){
    let url = this.apiUrl +  'courses';
    return this.http.post(url,courseObj);
  }

  updateCourse(id:number, obj:any){
    let url = this.apiUrl + 'courses/' +id;
    return this.http.put(url,obj);
  }

  deleteCourse(id:number){
    let url = this.apiUrl +'courses/' +id;
    return this.http.delete(url);
  }

  getAllCourses(){
    let url = this.apiUrl +'courses';
    return this.http.get(url);
  }

  // change URL
  // updateCourse(id:number, obj:any){
  //   let url = 'http://localhost:3000/courses/' +id;
  //   return this.http.put(url,obj);
  // }

  // deleteCourse(id:number){
  //   let url = 'http://localhost:3000/courses/' +id;
  //   return this.http.delete(url);
  // }

  // getAllCourses(){
  //   let url = 'http://localhost:3000/courses';
  //   return this.http.get(url);
  // }
}
