/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
"Employee Form" component
*/
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  jobCategories = ["technology", "social", "sciences", "doctor"];
  newEmployee = new Employee(1, "Hoang", new Date("October 25, 1979 00:00:00"),this.jobCategories[0]);
  submitted = false;

  onSubmit() { 
    this.submitted = true; 
  }
  addNewEmployee() {
    this.newEmployee = new Employee(Math.floor(Date.now()), "", new Date(), "", "");
  }

  constructor() { }

  ngOnInit() {
  }

}
