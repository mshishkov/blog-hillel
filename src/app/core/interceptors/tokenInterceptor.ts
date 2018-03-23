import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class tokenInterceptor implements HttpInterceptor {

    intercept(reqest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const userToken = localStorage.getItem('token');
        if (userToken) {
            reqest.headers.append('Authorization', 'token');
        }
        return next.handle(reqest);
    }

}
