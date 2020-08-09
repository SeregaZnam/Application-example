import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private readonly http: HttpClient) {}

  getPosts(start: number, limit: number): Observable<Post[]> {
    return this.http.get<Post[]>(`http://localhost:4200/api/posts?start=${start}&limit=${limit}`);
  }
}
