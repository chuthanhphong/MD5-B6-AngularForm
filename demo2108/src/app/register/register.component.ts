import { Component, OnInit } from '@angular/core';
import {Hiepga} from '../hiepga';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Hiepga: Hiepga [] = [];
  hiepga1: Hiepga = {};
  hiepgaform: FormGroup = new FormGroup({
    name : new FormControl('', [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
    password: new FormControl('',[ Validators.required, Validators.min(6)])
  });
  constructor() {}

  ngOnInit() {
  }
  save() {
    this.hiepga1 = {
      name: this.hiepgaform.value.name,
      password : this.hiepgaform.value.password
    };
    this.Hiepga.push(this.hiepga1);
      }
    getName() {
    return this.hiepgaform.get('name');
    }
  getPassword() {
    return this.hiepgaform.get('password');
  }
}

