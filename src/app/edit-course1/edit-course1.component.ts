import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { FormGroup,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-course1',
  templateUrl: './edit-course1.component.html',
  styleUrls: ['./edit-course1.component.css']
})
export class EditCourse1Component implements OnInit {
  updateCourseForm = new FormGroup({
"name" : new FormControl(''),
"id" : new FormControl(''),
  });

  id: any;
  course: any;

  constructor(private route:ActivatedRoute, private http:HttpClient)
  {
    this.id = this.route.snapshot.params["id"];
   }


  ngOnInit(): void {

    //get course details by id:
    let url ='http://localhost:3000/courses/' +this.id;
    axios.get(url).then((res)=>{
      this.course=res.data;
      this.updateCourseForm.patchValue(this.course);
    })
    //this.course = res.data;
  }



// updatevalue
  onSubmit (event:any){
    event.preventDefault();
    const courseObj = this.updateCourseForm.value;
    console.log(courseObj);

let obj = {
  "name": courseObj.name

  }
let url = "http://localhost:3000/courses/" +this.id;
// axios.post(url,obj).then(res=>{

this.http.put(url,obj).subscribe((res: any)=>{
console.log(res.data);
})

}
}
