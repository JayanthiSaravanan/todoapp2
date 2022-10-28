import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {

  id : any;
  router: any;


  constructor(private route:ActivatedRoute, private http: HttpClient) {
    this.id = this.route.snapshot.params['id'];
  }

  project: any;
features: any;
  ngOnInit(): void {

    let url="http://localhost:3000/projects/" + this.id;
    this.http.get(url).subscribe (res=>{
      this.project = res;
      console.log("success");
      // window.location.href="/list-project";
      this.router.navigateByUrl(['/list-project']);
    })
    // .catch(err=>{
    //   alert("failure to get data");
    // })
    }

}
