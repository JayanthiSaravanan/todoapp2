import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
fname! : string;
lname! : string;
gender!: string;
city! : string;
state! : string;
  router: any;


  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit (event:any){
  event.preventDefault();

  if (this.fname == null || this.fname == '') {
  alert('Enter first name');
  return;
   }

  // else if(this.lname == null || this.lname == '') {
  // alert('Enter last name');
  // return;
  // }

  // else if(this.gender == null || this.gender == '') {
  //   alert('Enter gender');
  //   return;
  //   }

  //   else if(this.city == null || this.city == '') {
  //     alert('Enter gender');
  //     return;
  //     }

  // else if(this.state == null || this.state == '') {
  //   alert('Enter gender');
  //   return;
  //   }
   let user= { "fname":this.fname,"lastname":this.lname,"gender": this.gender,"city" :this.city, "state": this.state};
   console.log(user);


  let url="http://localhost:3000/users";
  this.http.post(url, user).subscribe (res=>{
    alert("successfully registered");
    this.router.navigateByUrl(['/home']);
  })
  // .catch(err=>{
  //   alert("failure registered");
  // })

  }

  }
