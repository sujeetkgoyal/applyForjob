import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  loginForm: FormGroup;
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      id: [],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
