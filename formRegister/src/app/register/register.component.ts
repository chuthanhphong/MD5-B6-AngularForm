import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
userList: User[] = [];
userForm : FormGroup = new FormGroup({
  id:new FormControl('',[Validators.required,Validators.min(1)]),
  email:new FormControl('',[Validators.required ,Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
  country:new FormControl('',[Validators.required]),
  phone:new FormControl('',[Validators.required,Validators.min(10),Validators.pattern('^\\+84\\d{9,10}$')]),
 age: new FormControl('',[Validators.required,Validators.min(18)]),
  password:new FormControl('',[Validators.required,Validators.min(8)]),
  confim : new FormControl('',Validators.required)
})

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
  }
  create() {
  let user ={
    id:this.userForm.value.id,
    email : this.userForm.value.email,
    password : this.userForm.value.password,
    country : this.userForm.value.country,
    phone : this.userForm.value.phone,
    age:this.userForm.value.age

  }
  this.userList.push(user)
}
getId(){
  return this.userForm.get('id');
}getEmail(){
    return this.userForm.get('email');
  }
  getPassword(){
    return this.userForm.get('password');
  }
  getCountry(){
    return this.userForm.get('country');
  }
  getPhone(){
    return this.userForm.get('phone');
  }
  getAge(){
    return this.userForm.get('age');
  }
 getConfim(){
  return this.userForm.get('confim')
 }


}
