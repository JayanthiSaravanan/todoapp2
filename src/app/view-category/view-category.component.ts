import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  id:any;
  router:any;
  constructor(private route:ActivatedRoute, private http:HttpClient) {
    this.id = this.route.snapshot.params['id'];
  }

  category : any;

  ngOnInit(): void {

    this.loadCategory();

    // let url="http://localhost:3000/categories/" + this.id;
    // axios.get(url).then (res=>{
    //   this.category = res.data;
    // }).catch(err=>{
    //   alert("failure to get data");
    // })

  }

  loadCategory(){
    let url="http://localhost:3000/categories/" + this.id;
    this.http.get(url).subscribe (res=>{
      this.category = res;
      this.router.navigateByUrl(['view-category']);
    })
    // .catch(err=>{
    //   alert("failure to get data");
    // })

  }

}
