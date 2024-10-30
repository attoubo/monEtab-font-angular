import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private authToken: string = 'authToken';
  constructor() { }

  // Cette méthode va nous permettre de stocker le token dans le local storage
  createToken(token: string): void {
    localStorage.setItem(this.authToken, token);
  }

  // Cette méthode va nous permettre de récupérer le token dans le local storage
  getToken(): string | null {
    return localStorage.getItem(this.authToken);
  }

  // Cette méthode va nous permettre de supprimer le token qui a été crée
  destroyToken(): void {
    localStorage.removeItem(this.authToken);
  }
}
