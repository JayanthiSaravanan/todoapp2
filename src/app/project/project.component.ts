import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { startWith } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],

})
export class ProjectComponent implements OnInit {
name! : string;
sonar! :string;
github! :string;
netlify! :string;
  router: any;


  constructor(private http: HttpClient, private projectService: ProjectService) { }
  ngOnInit(): void {

  }

  onSubmit (event:any){
event.preventDefault();


if (this.name == null || this.name.trim() == '') {
  alert('Enter project name');
  return;
}

if (this.github == null || this.github.trim() == '') {
  alert('Enter Github url');
  return;
}
else if (!this.github.startsWith('https://github.com/')){
alert('Entered wrong github url');
return;
}

if (this.sonar == null || this.sonar.trim() == '') {
  alert('Enter Sonarcloud url name');
  return;
}
else if(!this.sonar.startsWith('https://sonarcloud.io/')){
  alert('Entered wrong sonarcloud url');
  return;
}


if (this.netlify == null || this.netlify.trim() == '') {
  alert('Enter Netlify url name');
  return;
}
else if(!this.netlify.endsWith('netlify.app/')){
  alert('Entered wrong netlify url');
  return;
}


let obj ={
  "name": this.name,
  "sonar": this.sonar,
  "github" : this.github,
  "netlify" : this.netlify,
  "features" : []
}

// let url = 'http://localhost:3000/projects';
// this.http.post(url,obj).subscribe(res =>{

this.projectService.addProject(obj).subscribe(res => {
  console.log(res);
  // window.location.href='/list-project';
  this.router.navigateByUrl(['/list-project']);
  alert('Project Added:' + this.name);
})
}
}
