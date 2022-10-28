import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';




@Component({
  selector: 'app-add-course1',
  templateUrl: './add-course1.component.html',
  styleUrls: ['./add-course1.component.css']
})
export class AddCourse1Component implements OnInit {

  courseForm = new FormGroup({
  "name" : new FormControl(''),
  "category" : new FormControl(''),

});


  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  onSubmit (event:any){
    event.preventDefault();
    const courseObj = this.courseForm.value;
    console.log(courseObj);

let obj = {
  "name": courseObj.name,
  "category": courseObj.category
  }
let url = "http://localhost:3000/courses";
// axios.post(url,obj).then(res=>{

this.http.post(url,obj).subscribe((res: any)=>{
console.log(res.data);
})

}
}
