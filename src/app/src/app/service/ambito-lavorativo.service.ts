import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Badge} from "../model/badge";
import {AmbitoLavorativo} from "../model/ambito-lavorativo";

@Injectable({
  providedIn: 'root'
})
export class AmbitoLavorativoService {

  private ambitoLavorativoUrl='http://localhost:8082/portalebadge/api/ambitoLavorativo';


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http:HttpClient) { }

  getAmbitiLavorativi(): Observable<Badge[]> {
    return this.http.get<AmbitoLavorativo[]>(this.ambitoLavorativoUrl)
    //     .pipe(
    //     catchError(this.handleError<Badge[]>('getBadges',[]))
    //   )

  }
}
