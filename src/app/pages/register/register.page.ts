import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user.interface';
import { Storage } from 'src/app/shared/services/storage/storage';
import { v4 } from 'uuid';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {
  public name!: FormControl;
  public lastName!: FormControl;
  public email!: FormControl;
  public password!: FormControl;
  public registerForm!: FormGroup;

  constructor(private readonly storageSrv: Storage, private readonly router: Router) {
    this.initForm();
  }

  ngOnInit() {}

  public doRegister() {
    console.log(this.registerForm.value);
    let users = this.storageSrv.get<IUser[]>('users');
    if(!users) {
      users = [];
    }

    const exists = users.find(user => user.email === this.email.value);
    if(exists) throw new Error('this email exist already.');

    users.push({
      uuid: v4(),
      ...this.registerForm.value,
    });

    this.storageSrv.set('users', users);
    this.registerForm.reset();
    this.router.navigate(['/']);
  }

  private initForm() {
    this.name = new FormControl('', [Validators.required]);
    this.lastName = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required, Validators.email, Validators.minLength(3)]);
    this.password = new FormControl('', [Validators.required]);
    this.registerForm = new FormGroup({
      name: this.name,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
    });
  }

}
