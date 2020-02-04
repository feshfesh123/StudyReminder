import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Lesson } from './lesson';
@Injectable({
  providedIn: 'root'
})
export class LessonService {
  readonly apiUrl = "https://studyreminderapi.azurewebsites.net/api/lessons";
  constructor(private http: HttpClient) { }
  getLessons(){
    return this.http.get(this.apiUrl);
  }
  createLesson(data: Lesson){
    return this.http.post(this.apiUrl, data);
  }
}
