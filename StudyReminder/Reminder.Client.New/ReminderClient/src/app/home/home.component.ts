import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lesson } from '../shared/lesson';
import { LessonService } from '../shared/lesson.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lessons : Lesson[] = [];
  formAdd: Lesson = new Lesson();
  constructor(private router: Router, private lessonSerivce: LessonService, private toastr: ToastrService) { 
    this.refreshList();
  }

  ngOnInit(): void {
  }

  Logout(){
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
  }

  refreshList(){
    this.lessonSerivce.getLessons().subscribe((res : Lesson[]) => {
      this.lessons = res;
    });
  }

  onSubmitFormAdd(form: NgForm){
    console.log("da submit");
    this.lessonSerivce.createLesson(form.value).subscribe(res => {
      this.resetForm(this.formAdd);
      this.router.``
      this.toastr.success("Đã thêm môn học vào lịch."); 
      console.log("OK");
    }),
    (err: HttpErrorResponse) =>{
      this.toastr.error("Thêm thất bại, vui lòng thử lại.");
      console.log("fail");
    };
  }

  resetForm(form: Lesson){
    form.Id = null,
    form.Class = '',
    form.Code = '',
    form.Day = null,
    form.Name = '',
    form.Time = null
  }
}
