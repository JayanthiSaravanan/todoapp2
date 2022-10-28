import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  router: any;

  constructor(private http: HttpClient, private categoryService :CategoryService) {}

  categories: any;

  ngOnInit(): void {
    this.loadCategories();
    // let url = 'http://localhost:3000/categories';
    // axios
    //   .get(url)
    //   .then((res) => {
    //     this.categories = res.data;
    //   })
    //   .catch((err) => {
    //     alert('failure to get data');
    //   });
  }

  loadCategories(){
    // let url = 'http://localhost:3000/categories';
    // this.http.get(url).subscribe((res) => {
this.categoryService.getAllCategory().subscribe((res:any)=>{
    this.categories = res;
      })
  }

  deletecategory(id: any, obj:any) {

    // let url = 'http://localhost:3000/categories/' +id;
    // this.http.delete(url).subscribe((res) => {
    this.categoryService.deleteCategory(obj).subscribe((res: any)=> {
    console.log(res);
      // window.location.href ="/categories";
      this.router.navigateByUrl(['/categories']);
      alert('Successfully Deleted' + id);

    });
  }
}
