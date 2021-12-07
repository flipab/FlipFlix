import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


  @Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public formGroup: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],

  })

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    ) { }

  ngOnInit() {
  }

  public login(): void{
    this.httpClient.post(
      'http://localhost:3000/login',
      this.formGroup.value
    ).subscribe((x)=>{
      console.log(x)
    })
  }

}
