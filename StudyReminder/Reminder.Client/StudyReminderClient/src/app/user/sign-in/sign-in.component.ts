import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoginError: boolean = false;
  user: User = {
    email : "",
    password: ""
  };

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  OnSubmit() {
    this.userService.userAuthentication(this.user.email, this.user.password).subscribe((data:any) => {
      localStorage.setItem('token', data.token);
      this.router.navigate(['/home']);

    },
    (err: HttpErrorResponse) => {
      this.isLoginError = true;
    });
  }

}
