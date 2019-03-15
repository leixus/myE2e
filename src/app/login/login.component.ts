import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;
  public errorLogin: boolean;

  submitForm(): void {
    // for (const i in this.validateForm.controls) {
    //   this.validateForm.controls[ i ].markAsDirty();
    //   this.validateForm.controls[ i ].updateValueAndValidity();
    // }
    const validate = this.validate();
    if (!validate) {
      const username = this.validateForm.get('userName').value;
      const password = this.validateForm.get('password').value;
      if (username === 'leixu' && password === '12345678') {
        localStorage.setItem('login', 'true');
        this.errorLogin = false;
        this.router.navigateByUrl('/pokemon');
      } else {
        localStorage.setItem('login', 'false');
        this.errorLogin = true;
      }
    }
  }

  // 判断表单是否输入完成
  validate() {
    let status: boolean = false;
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
      if (this.validateForm.controls[ i ].invalid) {
        status = true;
      }
    }
    return status;
  }

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    localStorage.removeItem('login');
    this.errorLogin = false;
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }

  routingRegister() {
    this.router.navigateByUrl('/register');
  }

}
