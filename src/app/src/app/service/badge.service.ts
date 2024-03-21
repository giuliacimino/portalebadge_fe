import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Badge} from "../model/badge";
import {Observable, of} from "rxjs";
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BadgeService {
  private badgeUrl='http://localhost:8082/portalebadge/api/badge';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http:HttpClient) { }

  getBadges(): Observable<Badge[]> {
    return this.http.get<Badge[]>(this.badgeUrl)
 //     .pipe(
 //     catchError(this.handleError<Badge[]>('getBadges',[]))
 //   )

  }

  getBadge(id: number): Observable<Badge> {
    const url = `${this.badgeUrl}/${id}`;
    return this.http.get<Badge>(url).pipe(
      catchError(this.handleError<Badge>(`getBadge id=${id}`))
    );
  }

  addBadge(badge: Badge): Observable<Badge> {
    return this.http.post<Badge>(this.badgeUrl, badge, this.httpOptions);
  }

  updateBadge(badge: Badge): Observable<any> {
    return this.http.put(this.badgeUrl, badge, this.httpOptions).pipe(

      catchError(this.handleError<any>('updateBadge'))
    );
  }

  deleteBadge( id: number): Observable<any> {
    const url = `${this.badgeUrl}/${id}`;

    return this.http.delete<Badge>(url, this.httpOptions).pipe(

      catchError(this.handleError<Badge>('deleteBadge'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);


      return of(result as T);
    };
  }


}



