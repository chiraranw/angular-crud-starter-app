import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  students: Student[];
  constructor(private studentsApi: AppService) {
    this.studentsApi.getStudents().subscribe(
      (res) => {
        this.students = res;
      },
      (err) => {
        console.log("error :", err);

      }
    );
  }

  ngOnInit(): void {
  }
  delete(student: any) {

  }

}
