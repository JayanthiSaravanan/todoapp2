import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
})
export class EditCategoryComponent implements OnInit {
  category: any;
  id: any;
  router: any;

  constructor(private route: ActivatedRoute, private http:HttpClient, private categoryService: CategoryService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    let url = 'http://localhost:3000/categories/' + this.id;
    axios
      .get(url)
      .then((res) => {
        this.category = res.data;
      })
      .catch((err) => {
        alert('failure to get data');
      });
  }

  onSubmit(event: any) {
    let obj = {
      name: this.category.name,
      id: this.category.id,
    };

    console.log('updated:', obj);

    // let url = 'http://localhost:3000/categories/' + this.id;
    // this.http.put(url, obj).subscribe((res:any) => {
    this.categoryService.updateCategory(this.id, obj).subscribe((res:any)=>{
    console.log(res);
      // window.location.href ="/categories";
      this.router.navigateByUrl(['/categories']);
      alert('successfully updated');
     })
    //.catch(err => {
    //   alert('failure to update');
    // }
    //   )

  }
}
