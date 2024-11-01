import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseService } from '../../core/services/base-services/base.service';
import { Teacher } from '../../domains/interfaces/Teacher';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { environmentProd } from '../../../environments/environement.prod';

@Component({
  selector: 'app-teacher-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './teacher-form.component.html',
  styleUrls: ['../shared/css/styles.css']
})


export class TeacherFormComponent implements OnInit {
  teachers: Teacher[] = [];
  teacher!: Teacher;

  isEditMode: boolean = false;

  form!: FormGroup;

  constructor(private baseService: BaseService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {}


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

    this.teacher = {
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

    const id = this.route.snapshot.paramMap.get('id'); // Récupérez l'ID depuis les paramètres de la route
    if (id) {
        this.loadTeacher(id); // Chargez le professeur si l'ID existe
    }

  }

  loadTeacher(id: string): void {
    this.baseService.getOne<Teacher>('teachers', id).subscribe(
      data => {
        this.teacher = data;
        this.form.patchValue(this.teacher);      },
      error => {
          console.error('Erreur lors du chargement du professeur', error);
      }
    );
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

      
      this.baseService.create(environmentProd.endPoint.teachers.create, this.teacher).subscribe({
        next: (response: any) => {
            console.log(response); // Check if this logs correctly

            // this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
            
            this.form.reset();
            this.router.navigate(['/teachers']);
        },
        error: (error: any) => {
            console.error('Error occurred:', error);
        }
    });

    console.log(this.teacher);
    
    }

  }

}
