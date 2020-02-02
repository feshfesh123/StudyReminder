import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  success: boolean = false;
  error: string;
  user: User = {
    email : "",
    password: ""
  };
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.userAuthentication(this.user.email, this.user.password).subscribe((data:any) => {
      localStorage.setItem('token', data.token);
      this.router.navigate(['/home']);

    },
    (err: HttpErrorResponse) => {
      this.success = true;
      this.error = err.message;
    });
  }
}
