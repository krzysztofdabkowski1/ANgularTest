import { Injectable } from '@angular/core';
import {Owoc} from './owoc'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../message-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OwockiDataService {

  private owockiUrl = 'api/owocki';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private messagesService:MessageService,
    private http: HttpClient
  ) { }

  private log(message: string) {
    this.messagesService.add(`OwocekService: ${message}`);
  }
  getOwocki(): Observable<Owoc[]> {
    this.log('Wysłano owocki');
    return this.http.get<Owoc[]>(this.owockiUrl).pipe(
      tap(_ => this.log('Pobrano owocki')),
      catchError(this.handleError<Owoc[]>('getOwocki', []))
    );
    
  }

  updateOwocek(owocek: Owoc): Observable<any> {
    return this.http.put(this.owockiUrl, owocek, this.httpOptions).pipe(
      tap(_ => this.log('zaktualizowany owocek '+owocek.id)),
      catchError(this.handleError<Owoc[]>('updateOwocek', []))
    );
  };

  addOwocek(owocek: Owoc): Observable<Owoc>{
    return this.http.post<Owoc>(this.owockiUrl, owocek, this.httpOptions).pipe(
      tap((o: Owoc) => {
        this.log(`dodano owocka ${o.id}`)}),
      catchError(this.handleError<Owoc>('addOwocek', undefined)))
  };
  


  getOwocek(id: Number): Observable<Owoc>{
    const urlById = this.owockiUrl+`/${id}`;
    this.messagesService.add(`Poprano owocka o id=${id}`);
    return this.http.get<Owoc>(urlById);
  }

  delete(id: Number): Observable<Owoc>{
    const owocekUrl = `${this.owockiUrl}/${id}`;
    console.log(owocekUrl);

    return this.http.delete<Owoc>(owocekUrl,this.httpOptions).pipe(
      catchError(this.handleError<Owoc>('deleteOwocek'))
    );
  }

  deleteOwocek(id: Number): void{
      this.delete(id).subscribe(
        _ => this.log(`usunięto owocka o id:  ${id}`));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  searchOwocki(term: string): Observable<Owoc[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Owoc[]>(`${this.owockiUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`znaleziono owocka zawierającego wyrażenie "${term}"`) :
         this.log(`brak owocków pasujących do wyrażenia  "${term}"`)),
      catchError(this.handleError<Owoc[]>('searchOWocki', []))
    );
  }
}
