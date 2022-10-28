import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-course1',
  templateUrl: './list-course1.component.html',
  styleUrls: ['./list-course1.component.css']
})
export class ListCourse1Component implements OnInit {

  constructor(private http:HttpClient) { }



  courses : any;

  ngOnInit(): void {

    let url="http://localhost:3000/courses";
    this.http.get(url).subscribe (res=>{
    this.courses = res;
    });
  }

}
