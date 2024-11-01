import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Student } from '../../domains/interfaces/Student';
import { BaseService } from '../../core/services/base-services/base.service';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './students.component.html',
  styleUrls: ['../shared/css/styles.css']
})

export class StudentsComponent implements OnInit {
  students: Student[] = [];
  popupVisible: boolean = false;

  isConfirmModalVisible: boolean = false;
  studentToDelete: Student | null = null;

  constructor(private baseService: BaseService){}

  loadStudents(): void {
    this.baseService.getAll<Student[]>('students').subscribe(
      (data: Student[]) => {
        this.students = data;
      },
      error => {
        console.error('Erreur lors de la récupération des étudiants', error);
      }
    )
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.loadStudents();
  }

  confirmDelete(student: Student): void {
    this.studentToDelete = student;
    this.isConfirmModalVisible = true;
  }

  closeConfirmModal(): void {
    this.isConfirmModalVisible = false;
    this.studentToDelete = null;
  }


  showConfirmationPopup(): void {
    this.popupVisible = true;
  }

  hideConfirmationPopup(): void {
    this.popupVisible = false;
  }

  
  deleteStudent(): void {
    if (this.studentToDelete) {
      this.baseService.deleteData('students', this.studentToDelete.id.toString()).subscribe({
        next: () => {
          // Supprime l'élève de la liste une fois supprimé de la base de données
          this.students = this.students.filter(s => s.id !== this.studentToDelete!.id);
          this.closeConfirmModal(); // Ferme la modal
        },
        error: (err) => {
          console.error('Erreur lors de la suppression de l\'élève', err);
          this.closeConfirmModal(); // Ferme la modal même en cas d'erreur
        }
      });
    }
  }
}
