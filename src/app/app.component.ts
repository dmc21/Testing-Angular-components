import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from './users.service';
import { NgForm, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from './user';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userData = new Array<any>();
  user = new User();
  userForm: FormGroup;

  constructor (private service: UsersService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.service.getAll().then(data => {
      this.userData = data;
    });

    this.userForm = this.formBuilder.group({
      'id': [null],
      'nombre': ['', [Validators.required]],
      'apellidos': ['', [Validators.required]],
      'localidad': ['', [Validators.required]]
    });
  }


  newUser() {
    if (this.userForm.valid && this.userForm.get('id').value == null) {
      this.service.saveData(this.userForm.value).then(data => {
        this.userData.push(this.userForm.value);
      });

    } else if (this.userForm.valid && this.userForm.get('id') !== null) {
      /*update data*/
    }
  }

}
