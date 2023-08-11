import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {
  url = 'https://jsonplaceholder.typicode.com/posts';
  urlUser = 'https://jsonplaceholder.typicode.com/users';
  urlAlbums = 'https://jsonplaceholder.typicode.com/albums'
  

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get<any>(this.url);
   }

   getComments(id: number): Observable <any> {
    return this.http.get<any>(this.url + '/' + id + '/comments');
   }

   getUsers(): Observable<any> {
    return this.http.get<any>(this.urlUser);
   }

   getAlbums(): Observable<any> {
    return this.http.get<any>(this.urlAlbums);
   }
}
