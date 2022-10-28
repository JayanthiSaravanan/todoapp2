import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  name!: String;
  router: any;


  constructor(private http: HttpClient, private categoryService: CategoryService) { }

  ngOnInit(): void {
  }
  onSubmit (event:any){

    event.preventDefault();

    let obj = {
      "name": this.name
      }
          // let url="http://localhost:3000/categories";
          // this.http.post(url,obj).subscribe (res=>{

          this.categoryService.addCategory(obj).subscribe((res:any) =>{
          console.log (res);
            // window.location.href ="/categories";
            this.router.navigateByUrl(['/categories']);
            alert('Category Added:' + this.name);
          })
      }

}
