import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icard } from './interfaces/card';

import { catchError } from 'rxjs/operators';

const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private httpClient: HttpClient) {}

  updateCard(card: Icard): Observable<Icard> {
    return this.httpClient.put<Icard>(`/api/skills/`, card, cudOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
 }

  // updateCard(card: Icard): Observable<Icard> {
  //   return this.httpClient.put<Icard>(`/api/skills/${card.id}`, card, this.httpOptions);
  // }
}
