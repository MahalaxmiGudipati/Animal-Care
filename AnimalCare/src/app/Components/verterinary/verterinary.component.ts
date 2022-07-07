import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';

@Component({
  selector: 'app-verterinary',
  templateUrl: './verterinary.component.html',
  styleUrls: ['./verterinary.component.css']
})
export class VerterinaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

registerForm = new FormGroup ({

  firstname: new FormControl(""),
  email: new FormControl(""),
  number: new FormControl(""),
  breedname: new FormControl(""),
  dateofapp: new FormControl(""),
  message: new FormControl("")

});

registerSubmited(){
  console.log(this.registerForm.value);
}

}
