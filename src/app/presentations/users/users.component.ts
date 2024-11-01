import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../../domains/interfaces/User';
import { BaseService } from '../../core/services/base-services/base.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['../shared/css/styles.css']
})
export class UsersComponent implements OnInit{
  users: User[] = [];

  constructor(private baseService: BaseService){}



  loadUsers(): void {
    this.baseService.getAll<User[]>('users').subscribe(
      (data: User[]) => {
        this.users = data;
      },
      error => {
        console.error('Erreur lors de la récupération des utilisateurs', error);
      }
    )
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.loadUsers();

  }

}
