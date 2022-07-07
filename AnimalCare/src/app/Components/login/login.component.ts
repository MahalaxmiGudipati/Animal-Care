import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm !:FormGroup;

  constructor(private formBuilder : FormBuilder,
    private httpClient: HttpClient,
    private router:Router,
    private toast:NgToastService
    ) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
login(){
this.httpClient.get<any>("http://localhost:3000/signupUsers")
  .subscribe(res=>{
    const user = res.find((a:any)=>{
      return a.email === this.loginForm.value.email && a.password ===this.loginForm.value.password
    });
    if(user){
      // alert("Login success");
      this.toast.success({ detail: "Success Message",summary:res.message ,duration:5000})
      this.loginForm.reset();
      this.router.navigate(['/'])
    }
    else{
      // alert("user not found");
      this.toast.warning({ detail: "Warning Message",summary:"User not Found!!" ,duration:5000})
      this.loginForm.reset();
    }
  }
  ,err=>{
    // alert("Something went wrong!!");
    this.toast.error({ detail: "Error Message",summary:"Login Failed, try again later!!" ,duration:5000})
    this.loginForm.reset();
  }
  )
}

}
