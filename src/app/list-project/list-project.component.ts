import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {

  projects :any;
  router: any;

  constructor(private http:HttpClient,private projectService :ProjectService) { }

  ngOnInit(): void {

    // let url="http://localhost:3000/projects";
    // this.http.get(url).subscribe (res=>{


    this.projectService.getAllProjects().subscribe(res=>{
      this.projects = res;
    })
    // .catch(err=>{
    //   alert("failure to get data");
    // })
  }

  deleteproject(id:any){

    // let url = "http://localhost:3000/projects/" + id;
    // this.http.delete(url).subscribe((res)=> {

      this.projectService.deleteProject(id).subscribe((res: any) => {
      console.log(res);
      alert("successfully deleted:" +id);
      // window.location.href="/list-project";
      this.router.navigateByUrl(['/list-project']);
      this.ngOnInit();
    });

}
  }


9999
