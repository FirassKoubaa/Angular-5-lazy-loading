import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  rForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.rForm = fb.group({
      'uname': '',
      'password': '',
    });
  }

  ngOnInit() {
  }
  addPost(formValues) {
    // console.log(formValues);
    localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/home']);
  }
}
