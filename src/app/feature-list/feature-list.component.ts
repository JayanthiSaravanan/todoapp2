import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.css']
})
export class FeatureListComponent implements OnInit {


  constructor(private http: HttpClient) { }
  projects:any;

  ngOnInit(): void {
    let url ="http://localhost:3000/projects/id/features";
    this.http.get(url).subscribe((res:any)=>{
      this.projects=res;
    })
  }


}

