import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  project! : any;
  projectId! :string;
  fname! :string;



  constructor(private route:ActivatedRoute, private http:HttpClient) {
    this.projectId =this.route.snapshot.params['id'];

   }

  ngOnInit(): void {

    let url ="http://localhost:3000/projects/" +this.projectId;
    this.http.get(url).subscribe (res=>{
      console.log(res);
      this.project = res;

    }
    )
  }
  onSubmit (event:any){
    event.preventDefault();
    // alert(this.pname);
    // alert(this.fname);
    let obj = {

      fname : this.fname,

  };
this.project.features.push(obj);
console.log("Added", obj);

  let url ="http://localhost:3000/projects/" +this.projectId;
  this.http.put(url,this.project).subscribe (res=>{
    console.log(res);
    alert("Success:"+ this.fname);
  }
    )

}
}
