import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../core/services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly auth: AuthService, private readonly router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loginUser() {
    const login = this.loginForm.get('login').value;
    const password = this.loginForm.get('password').value;
    this.auth.signIn(login, password).subscribe((res: any) => {
      if (res.success) {
        this.router.navigate(['main']);
      }
    });
  }

}
