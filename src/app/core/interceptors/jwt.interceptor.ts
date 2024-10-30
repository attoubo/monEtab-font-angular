import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

export class JwtInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService, private router: Router) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token: string | null = this.localStorageService.getToken();
    
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${JSON.parse(token).token}`
        }
      });
    }
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 || error.status === 403 || (error.status === 400 && error.error.errorCode === 'INVALID_TOKEN')) {
          this.localStorageService.destroyToken();
          this.router.navigate(['/login']);
        }
        return throwError(() => new Error(`Authentication error: ${error.error.message} || ${error.message}`));
      })
    );
  }

}
