import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseService } from '../../core/services/base-services/base.service';
import { User } from '../../domains/interfaces/User';
import { environmentProd } from '../../../environments/environement.prod';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './users-form.component.html',
  styleUrls: ['../shared/css/styles.css']
})

export class UsersFormComponent implements OnInit {

  form!: FormGroup;

  constructor(private baseService: BaseService, private router: Router, private fb: FormBuilder){}


  user: User = {
    id: 0,
    pseudo: '',
    email: '',
    password: '',
    creationDate: new Date()
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.form = this.fb.group({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    })

  }

  isInvalidateInput(input: AbstractControl<any>) {
    return input.invalid && (input.touched || input.dirty);
  }


  saveData(): void {
    if (this.form.valid) {
        this.user.pseudo = this.form.value.username;
        this.user.password = this.form.value.password;
        
        this.baseService.create(environmentProd.endPoint.students.create, this.user).subscribe({
            next: (response: any) => {
                console.log(response); // Check if this logs correctly

                // this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
                
                this.form.reset();
                this.router.navigate(['/users']);

            },
            error: (error: any) => {
                console.error('Error occurred:', error);
            }
        });
        console.log(this.user);
        
    }
}



}
