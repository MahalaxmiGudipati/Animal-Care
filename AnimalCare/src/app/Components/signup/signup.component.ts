import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm !:FormGroup;
  http: any;
 
  constructor(private formBuilder : FormBuilder ,
    private httpClient: HttpClient,
    private router:Router,
    private toast:NgToastService
    ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      mobile:['',Validators.required]
    })
  }

  signUp(){
    this.httpClient.post<any>("http://localhost:3000/signupUsers" ,this.signupForm.value)
    .subscribe((res: { message: any; })=>{
      // alert("Signup Successfull");
      this.toast.success({ detail: "Success Message",summary:res.message ,duration:5000})
      this.signupForm.reset();
      this.router.navigate(["/login"]);
    }
    ,(err: any)=>
    {
      // alert("Something went wrong");
      this.toast.warning({ detail: "Warning Message",summary:"User not Found!!" ,duration:5000})
      this.signupForm.reset();
    }
    )
    }
}
