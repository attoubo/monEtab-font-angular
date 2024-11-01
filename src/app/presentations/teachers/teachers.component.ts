import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Teacher } from '../../domains/interfaces/Teacher';
import { BaseService } from '../../core/services/base-services/base.service';

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './teachers.component.html',
  styleUrls: ['../shared/css/styles.css']
})
export class TeachersComponent implements OnInit {

  teachers: Teacher[] = [];
  popupVisible: boolean = false;

  isConfirmModalVisible: boolean = false;
  teacherToDelete: Teacher | null = null;

  constructor(private baseService: BaseService){}

  loadTeachers(): void {
    this.baseService.getAll<Teacher[]>('teachers').subscribe(
      (data: Teacher[]) => {
        this.teachers = data;
      },
      error => {
        console.error('Erreur lors de la récupération des professeurs', error);
      }
    )
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.loadTeachers();
  }

  confirmDelete(teacher: Teacher): void {
    this.teacherToDelete = teacher;
    this.isConfirmModalVisible = true;
  }

  closeConfirmModal(): void {
    this.isConfirmModalVisible = false;
    this.teacherToDelete = null;
  }

  showConfirmationPopup(): void {
    this.popupVisible = true;
  }

  hideConfirmationPopup(): void {
    this.popupVisible = false;
  }


  deleteTeacher(): void {
    if (this.teacherToDelete) {
      this.baseService.deleteData('teachers', this.teacherToDelete.id.toString()).subscribe({
        next: () => {
          // Supprime le professeur de la liste une fois supprimé de la base de données
          this.teachers = this.teachers.filter(s => s.id !== this.teacherToDelete!.id);
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
