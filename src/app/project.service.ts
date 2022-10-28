import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }


  addProject(projectObj:any){
    let url = 'http://localhost:3000/projects';
    return this.http.post(url,projectObj);
  }

  updateProject(id:number,obj:any){
  let url = 'http://localhost:3000/projects/' + id;
    return this.http.put(url,obj);
  }

  getAllProjects(){
    let url = 'http://localhost:3000/projects';
      return this.http.get(url);
    }

    deleteProject(id:number){
      let url = 'http://localhost:3000/projects/' +id;
        return this.http.delete(url);
      }
}

