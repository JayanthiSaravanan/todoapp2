import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from '../project.service';
@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  project : any;

  id: any;
  router: any;

  constructor(private route: ActivatedRoute, private http:HttpClient,private projectService: ProjectService) {
    this.id = this.route.snapshot.params['id'];
   }

  ngOnInit(): void {

    let url = 'http://localhost:3000/projects/' + this.id;
    this.http
      .get(url)
      .subscribe((res) => {
        this.project = res;
      })
      // .catch((err) => {
      //   alert('failure to get data');
      // });


  }

  onSubmit(event: any) {
    event.preventDefault();
    let obj = {
      "name": this.project.name,
      "id": this.project.id,
    }

    // let url = 'http://localhost:3000/projects/' + this.project.id;
    // this.http.put(url,obj).subscribe ((res) => {

    this.projectService.updateProject(this.id,obj).subscribe((res:any)=> {
    console.log(res);
      // window.location.href="/list-project";
      this.router.navigateByUrl(['list-project']);
      alert('project name updated :' + this.project.name);
    })

  }

}
