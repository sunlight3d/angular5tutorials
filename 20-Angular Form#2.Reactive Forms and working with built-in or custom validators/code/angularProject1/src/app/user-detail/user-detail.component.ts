/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
UserDetailComponent
*/
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';//FormGroup have multiple FormControls 
import { Component, OnInit } from '@angular/core';
import { User, Address, states } from '../data-model';
import { emailValidator } from '../../shared/CustomValidators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  states = states;
  userFormGroup: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { 
    this.createForm();
  }
  createForm() {
    this.userFormGroup = this.formBuilder.group({
      name: ['Hoang', [Validators.required, Validators.minLength(4)]],  
      email: ['', [Validators.required, emailValidator()]],       
      addresses: this.formBuilder.group({ //the child FormGroup        
        street: ['', [Validators.required]],
        city: '',
        state: this.states[0],                 
      }),
    });
  }
  ngOnInit() {

  }

}
