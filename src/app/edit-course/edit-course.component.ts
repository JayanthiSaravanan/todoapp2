import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { CourseService } from '../course.service';
@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  course:any;

  id :number;
  router: any;

  constructor(private route: ActivatedRoute, private http:HttpClient,private courseService: CourseService) {
    this.id = this.route.snapshot.params['id'];
  }


  ngOnInit():void {

    let url = 'http://localhost:3000/courses/' + this.id;
    this.http.get(url).subscribe((res) => {


      this.course = res;
      })
      // .catch((err) => {
      //   alert('failure to get data');
      // });

  }

  onSubmit(event: any) {
  let obj = {
      name: this.course.name,
      id: this.course.id,
    };

    console.log('updated:', obj);

    // let url = 'http://localhost:3000/courses/' + this.id;
    // this.http.put(url, obj).subscribe((res) => {


    this.courseService.updateCourse(this.id,obj).subscribe((res:any)=> {
       console.log(res);
      // window.location.href="/list-course";
      this.router.navigateByUrl(['/list-course']);
      alert('successfully updated');
    })

  }
}

