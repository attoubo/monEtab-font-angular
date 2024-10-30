import { Routes } from '@angular/router';
import { LoginComponent } from './presentations/login/login.component';
import { HomeComponent } from './presentations/home/home.component';
import { StudentsComponent } from './presentations/students/students.component';
import { LayoutComponent } from './presentations/layout/layout.component';
import { TeachersComponent } from './presentations/teachers/teachers.component';
import { UsersComponent } from './presentations/users/users.component';
import { ReportComponent } from './presentations/report/report.component';
import { StudentFormComponent } from './presentations/student-form/student-form.component';
import { TeacherFormComponent } from './presentations/teacher-form/teacher-form.component';
import { UsersFormComponent } from './presentations/users-form/users-form.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  {
    path: '',
    component: LayoutComponent, 
    children: [
      { path: 'home', component: HomeComponent, title: 'Tableau de bord' },
      { path: 'students', component: StudentsComponent, title: 'Eleves' },
      { path: 'add-student', component: StudentFormComponent, title: 'Ajouter Élève' },
      { path: 'teachers', component: TeachersComponent, title: 'Professeurs' },
      { path: 'add-teacher', component: TeacherFormComponent, title: 'Ajouter Professeur' },
      { path: 'users', component: UsersComponent, title: 'Utilisateurs' },
      { path: 'add-users', component: UsersFormComponent, title: 'Ajouter Utilisateur' },
      { path: 'reports', component: ReportComponent, title: 'Rapport' }
    ]
  }
];