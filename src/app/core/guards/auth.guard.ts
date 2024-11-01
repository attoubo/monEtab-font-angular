import { CanActivateFn } from '@angular/router';
import {inject} from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../services/user.service';

export const authGuard: CanActivateFn = () => {
  let isAuth = inject(UserService);
  let router = inject(Router);

  if (isAuth && isAuth.isAuthenticated()) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
