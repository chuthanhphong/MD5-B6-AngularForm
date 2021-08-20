import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  userList: User[] = [
    {
      email: 'phong@gmail.com',
      password: '123456'
    }, {
      email: 'chuong@gmail.com',
      password: '123456'
    }
  ];
  userForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')),
    password: new FormControl('', Validators.min(6)),
    confim: new FormControl('', Validators.required)
  });


  constructor() {
  }

  ngOnInit() {
  }

  change() {

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.userList.length; i++) {

      if (this.getEmail().value === (this.userList[i].email) && this.userForm.get('password').value === (this.userList[i].password)) {
        window.location.href = 'https://james.codegym.vn/mod/assign/view.php?id=9858&forceview=1';
        break;
      }
      alert('Sai Tên Đăng Nhập và Tài Khoản');
      break;
    }

  }
  getEmail() {
    return this.userForm.get('email');
  }
  getPassWord() {
    return this.userForm.get('password');
  }
  getConfim() {
    return this.userForm.get('confim');
  }
}


