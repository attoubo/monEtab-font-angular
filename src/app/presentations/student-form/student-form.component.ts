import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseService } from '../../core/services/base-services/base.service';
import { Student } from '../../domains/interfaces/Student';
import { environmentProd } from '../../../environments/environement.prod';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './student-form.component.html',
  styleUrls: ['../shared/css/styles.css'],
  // providers: [MessageService]

})

export class StudentFormComponent implements OnInit{

  form!: FormGroup;

  constructor(private baseService: BaseService, private fb: FormBuilder) {
  }


  student: Student = {
    matricule: '',
    fatherPhoneNumber: '',
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
      matricule: new FormControl("", [Validators.required]),
      phoneNumber: new FormControl("", [Validators.required]),
      gender: new FormControl("", [Validators.required]),
      birthday: new FormControl("", [Validators.required]),

    })
  }

  isInvalidateInput(input: AbstractControl<any>) {
    return input.invalid && (input.touched || input.dirty);
  }



  saveData(): void {
    if (this.form.valid) {
        this.student.firstName = this.form.value.firstName;
        this.student.lastName = this.form.value.lastName;
        this.student.gender = this.form.value.gender;
        this.student.matricule = this.form.value.matricule;
        // this.student.address = this.form.value.lastName;
        this.student.phoneNumber = this.form.value.phoneNumber;
        this.student.birthday = this.form.value.birthday;


        // this.baseService.create(environmentProd.endPoint.students.create, this.student).subscribe({
        //     next: (response: any) => {
        //         console.log(response); // Check if this logs correctly

        //         // this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
                
        //         this.form.reset();
        //     },
        //     error: (error: any) => {
        //         console.error('Error occurred:', error);
        //     }
        // });
        console.log(this.student);
        
    }
}


}
