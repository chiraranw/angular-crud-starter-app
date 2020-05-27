import { Injectable } from '@angular/core';
import { Student } from '../model/model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }


  addStudent(student: Student) {
    return this.httpClient
      .post("http://localhost:3000/students", student)
      .subscribe(
        (data)=>{},
        (res)=>{
          console.log("Response",res);
          
        }
      );
  }


  getStudents(): Observable<Student[]> {
    return this.httpClient
      .get<Student[]>("http://localhost:3000/students");
  }

}
