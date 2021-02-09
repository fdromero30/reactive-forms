import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err, caught) => {
        return this.handleError(err)
      })
    );
  }

  handleError(err) {
    console.log(err)
    if (err.status == 404) {

      const msg = 'No se encontro el sever';
      alert(msg)
      return throwError(msg);
    }
    alert('ocurrio un error');
    return throwError('ocurrio un error');
  }
}
