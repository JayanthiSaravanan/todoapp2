import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {

    let url="http://localhost:3000/tasks";
  axios.get(url).then (res=>{

    this.tasks = res.data;
  }).catch(err=>{

    alert("failure to get data");
  })

  }
// tasks = ["cse", "It"]

tasks:any =[];

s= [
  {"id":1, name:"Install Java", "status":"PENDING","created_date": "2020-01-01T10:00"},
  {"id":1, name:"Install js", "status":"PENDING","created_date": "2020-02-01T10:00"},
]

}
