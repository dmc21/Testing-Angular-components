import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import {Validators, FormGroup, FormControl } from '@angular/forms';
import { User } from './user';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userData = new Array<any>();
  user = new User();
  is: Boolean;

  userForm = new FormGroup({
    id: new FormControl(null),
    nombre: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', [Validators.required]),
    localidad: new FormControl('', [Validators.required])
 });

  constructor (private service: UsersService) {}

  async ngOnInit() {
   await this.getAll();
  }

async getAll() {
    await this.service.getAll().then(data => {
      this.is = true;
      this.userData = data;
     });
    }

  newUser() {
    console.log(this.userForm.valid);
    if (this.userForm.valid && this.userForm.get('id').value == null) {
      this.service.saveData(this.userForm.value).then(data => {
        this.userData.push(this.userForm.value);
      });

    } else if (this.userForm.valid && this.userForm.get('id') !== null) {
      /*update data*/
    }
  }

}
