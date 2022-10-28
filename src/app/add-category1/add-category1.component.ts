import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-category1',
  templateUrl: './add-category1.component.html',
  styleUrls: ['./add-category1.component.css']
})
export class AddCategory1Component implements OnInit {
category! : string;
categoryForm : any;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event:any){
    event.privateDefault();
    const categoryObj = this.categoryForm.value;
    }
  }




