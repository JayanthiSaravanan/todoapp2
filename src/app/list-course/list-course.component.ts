import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { CourseService } from '../course.service';


@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {
  router: any;

  constructor(private http: HttpClient, private courseService: CourseService) { }

  courses : any;

  ngOnInit(): void {

    // let url="http://localhost:3000/courses";
    // this.http.get(url).subscribe (res=>{

this.courseService.getAllCourses().subscribe((res:any)=>{
this.courses = res;
    })
    // .catch(err=>{
    //   alert("failure to get data");
    // })

  }
deleteCourse(id:any){

  // let url = "http://localhost:3000/courses/" + id;
  // axios.delete(url).then((res)=> {
this.courseService.deleteCourse(id).subscribe((res:any)=>{
    // window.location.href="/list-course";
    this.router.navigateByUrl(['/list-course']);
    console.log(res);
  });

}

}
