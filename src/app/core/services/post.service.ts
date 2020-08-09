import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private readonly http: HttpClient) {}

  getPosts(start: number, limit: number): Observable<Post[]> {
    const url = environment.api + '/api/posts';
    return this.http.get<Post[]>(url, {
      params: {
        start: start.toString(),
        limit: limit.toString()
      }
    });
  }
}
