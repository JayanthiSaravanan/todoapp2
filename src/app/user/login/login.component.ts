import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email!: String;
  password!: String;
  router: any;

  constructor(private http:HttpClient) {}

  ngOnInit(): void {}
  onSubmit(event: any) {
    event.preventDefault();
    // alert("successfully logged in");
    // alert('email:' + this.email);

    if (this.email == null || this.email.trim() == '') {
      alert('enter email id');
      return;
    }
    else if (this.email.indexOf("@")== -1) {
      alert('Invalid Email Format. Must contain @');
      return;
    }
    if (this.password == null || this.password.trim() == '') {
      alert('enter password');
      return;
    }
    else if (this.password.length > 15 || this.password.length < 8) {
      alert('Password must be minimum 8 characters and maximum 15 characters');

    }


alert ("successfully Login");


let obj = {
  "email" : this.email,
"password" : this.password,

}

let url="http://localhost:3000/users";
this.http.post(url,obj).subscribe(res =>{
  console.log(res);
  // window.location.href ="/home";
  this.router.navigate(['/home']);
  alert("Registered");
})
// .catch(err=>{
//   alert("failure to get data");
// });
  }
}

