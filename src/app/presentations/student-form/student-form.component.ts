import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseService } from '../../core/services/base-services/base.service';
import { Student } from '../../domains/interfaces/Student';
import { environmentProd } from '../../../environments/environement.prod';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './student-form.component.html',
  styleUrls: ['../shared/css/styles.css'],
  // providers: [MessageService]

})

export class StudentFormComponent implements OnInit{
  students: Student[] = [];
  student!: Student; // Pour stocker l'élève à modifier
  isEditMode: boolean = false; // Pour savoir si nous sommes en mode modification

  form!: FormGroup;

  constructor(private baseService: BaseService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
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


    this.student = {
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


    const id = this.route.snapshot.paramMap.get('id'); // Récupérez l'ID depuis les paramètres de la route
    if (id) {
        this.loadStudent(id); // Chargez l'élève si l'ID existe
    }
  }


  loadStudent(id: string): void {
    this.baseService.getOne<Student>('students', id).subscribe(
      data => {
        this.student = data;
        this.form.patchValue(this.student);      },
      error => {
          console.error('Erreur lors du chargement de l\'élève', error);
      }
    );
  }
  

  isInvalidateInput(input: AbstractControl<any>) {
    return input.invalid && (input.touched || input.dirty);
  }


  updateStudent(eleve: any) {
    this.router.navigate(['/add-student'], { state: { eleve: eleve } });
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


        this.baseService.create(environmentProd.endPoint.students.create, this.student).subscribe({
            next: (response: any) => {
                console.log(response); // Check if this logs correctly

                // this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
                
                this.form.reset();
                this.router.navigate(['/students']);
            },
            error: (error: any) => {
                console.error('Error occurred:', error);
            }
        });

        console.log(this.student);
        
    }
  }

}
