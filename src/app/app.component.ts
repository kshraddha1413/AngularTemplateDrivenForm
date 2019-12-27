import { Component } from '@angular/core';
import { User } from './user';
import{ EnrollmentService } from './enrollment.service'
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { error } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular','React','Vue'];
  topicHAsError=true;
  submitted = false;

  userModel = new User('rob','rob@test.com',1311424243,'default','morning',true);
  title = 'tdf';
  constructor(private _enrollmentService : EnrollmentService){}
  validateTopic( value){
    if(value === 'default'){
      this.topicHAsError = true;
    }else{
      this.topicHAsError = false;
    }
  }
  onSubmit(userForm:any){

    this.submitted= true;
    console.log('aaaa');
    console.log(userForm.value);
    console.log(userForm.value.userName);
    console.log(this.userModel);
    this._enrollmentService.enroll(userForm.value)
    .subscribe(
      data => console.log('success !',data),
      error=> console.error('error !',error)
    )

  }
}
