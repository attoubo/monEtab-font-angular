import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseService } from '../../core/services/base-services/base.service';
import { User } from '../../domains/interfaces/User';

@Component({
  selector: 'app-users-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './users-form.component.html',
  styleUrls: ['../shared/css/styles.css']
})

export class UsersFormComponent implements OnInit {

  form!: FormGroup;

  constructor(private baseService: BaseService, private fb: FormBuilder){}


  user: User = {
    id: 0,
    username: '',
    email: '',
    password: ''
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.form = this.fb.group({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    },
    {
      validators: this.passwordMatchValidator // Ajoute le validateur personnalisé ici
    }
  );

  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }






  isInvalidateInput(input: AbstractControl<any>) {
    return input.invalid && (input.touched || input.dirty);
  }




  saveData(): void {
    if (this.form.valid) {
        this.user.username = this.form.value.username;
        this.user.password = this.form.value.password;
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
        console.log(this.user);
        
    }
}



}
