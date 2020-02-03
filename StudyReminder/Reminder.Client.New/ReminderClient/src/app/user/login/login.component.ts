import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSuccess: boolean = false;
  isError: boolean = false;

  errors: string[];
  user: User = {
    email : "",
    password: ""
  };
  constructor(private userService: UserService, private router: Router,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.spinner.show();
    this.userService.userAuthentication(this.user.email, this.user.password)
    .pipe(finalize(() => {
      this.spinner.hide();
    }))  
    .subscribe((data:any) => {
      this.isSuccess = true;
      localStorage.setItem('token', data.token);
      this.router.navigate(['/home']);
    },
    (err: HttpErrorResponse) => {
      this.isError = true;
      this.errors = err.error.errors;
    });
  }
}
