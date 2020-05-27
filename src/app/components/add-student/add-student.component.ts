import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  fm:FormGroup;

  constructor(fb:FormBuilder,private studentApi:AppService) {
    this.fm=fb.group({
      id:[],
      name:[],
      surname:[]
    });
   }

  ngOnInit(): void {
  }

  submit(){
  let temp=new Student(this.fm.value.id,this.fm.value.name,this.fm.value.surname);
  this.studentApi.addStudent(temp);
    console.log("id",this.fm.value);
    
  }

}
