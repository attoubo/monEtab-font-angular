import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseService } from '../../core/services/base-services/base.service';
import { Teacher } from '../../domains/interfaces/Teacher';

@Component({
  selector: 'app-teacher-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './teacher-form.component.html',
  styleUrls: ['../shared/css/styles.css']
})


export class TeacherFormComponent implements OnInit {

  form!: FormGroup;

  constructor(private baseService: BaseService, private fb: FormBuilder ){}


  teacher: Teacher = {
    available: false,
    speciality: '',
    id: 0,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    birthday: undefined,
    urlLogo: '',
    gender: undefined,
    address: undefined,
    user: undefined
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    this.form = this.fb.group({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      phoneNumber: new FormControl("", [Validators.required]),
      gender: new FormControl("", [Validators.required]),
      birthday: new FormControl("", [Validators.required]),
      speciality: new FormControl("", [Validators.required]),

    })

  }


  isInvalidateInput(input: AbstractControl<any>) {
    return input.invalid && (input.touched || input.dirty);
  }


  saveData(): void {

    if (this.form.valid) {
      this.teacher.firstName = this.form.value.firstName;
      this.teacher.lastName = this.form.value.lastName;
      this.teacher.phoneNumber = this.form.value.phoneNumber;
      this.teacher.gender = this.form.value.gender;
      this.teacher.birthday = this.form.value.birthday;
      this.teacher.speciality = this.form.value.speciality;

      console.log(this.teacher);

    }    

  }

}
