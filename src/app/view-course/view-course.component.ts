import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { HttpBackend, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {
  id:any;
  router:any;

  constructor(private route:ActivatedRoute, private http: HttpClient) {
    this.id = this.route.snapshot.params['id'];
  }

  course:any;

  ngOnInit(): void {

    let url="http://localhost:3000/courses/" + this.id;
    this.http.get(url).subscribe (res=>{
      this.course = res;
      console.log("success")
      this.router.navigateByUrl(['/list-course']);
    })
    // .catch(err=>{
    //   alert("failure to get data");
    // })

  }

}

