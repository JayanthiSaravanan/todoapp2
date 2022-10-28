import { Component, OnInit } from '@angular/core';
import { CategoriesComponent } from '../categories/categories.component';
import axios from 'axios';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CourseService } from '../course.service';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
name! :string;
category! :string;
  router: any;

  constructor(private http : HttpClient,private courseService: CourseService) { }


  ngOnInit(): void {


  }
  onSubmit (event:any){
    event.preventDefault();
if(this.name==null || this.name.trim() =='') {
  alert('EnterCourse Name');
return;
}
else if(this.category==null || this.category.trim()==''){
  alert('Select Category');
  return;
}



let obj = {
"name": this.name,
"category": this.category
 }
//     let url="http://localhost:3000/courses";
//     this.http.post(url,obj).subscribe(res=>{
//
      this.courseService.addCourse(obj).subscribe((res:any)=> {
      console.log (res);
      // window.location.href="/list-course";
      this.router.navigateByUrl(['list-course']);
      console.log('course:' + this.name);
    })



  // if (this.name == null || this.name == '') {
  //   alert('Enter course name');
  //   return;
  //   }
alert('Course :'  + this.name);


  }
}
