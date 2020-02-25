import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  apiService: any;
  message: any;
  invalidLogin: boolean;
  constructor( private formBuilder: FormBuilder,
               private router: Router) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  onSubmit() {
    console.log(this.loginForm.value);
    if (this.loginForm.invalid) {
      return;
    }

    const loginData = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.value
    };

    this.apiService.login(loginData).subscribe((data: any) => {
      this.message = data.message;

      if (data.token) {
        window.localStorage.setItem('token', data.token);
      } else {
        this.invalidLogin = true;
        alert(data.message);
      }
    });
  }
}
