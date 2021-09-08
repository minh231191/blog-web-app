import { PostDetails } from './../model/PostDetails';
import { PostFilter } from './../model/PostFilter';
import { PostPaged } from './../model/PostPaged';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';
import { Direction } from '../model/Direction';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPostPaged(id: number, date: Date, direction: Direction, postFilter: PostFilter): Observable<PostPaged> {
    const param = {
      id: id.toString(),
      date: formatDate(date, 'yyyy-MM-dd HH:mm:ss.SSS', 'EN-US'),
      direction: direction.toString(),
      categoryId: postFilter.categoryId != null ? postFilter.categoryId.toString() : '',
      userId: postFilter.userId != null ? postFilter.userId.toString() : '',
    };
    return this.http.get<PostPaged>(environment.baseUrl + 'api/posts', {params: param});
  }

  getPostDetailsById(id: number): Observable<PostDetails> {
    return this.http.get<PostDetails>(environment.baseUrl + 'api/posts/' + id.toString());
  }

  updatePost(post: PostDetails): Observable<PostDetails> {
    return this.http.put<PostDetails>(environment.baseUrl + 'api/posts', post);
  }

  createPost(post: PostDetails): Observable<PostDetails> {
    return this.http.post<PostDetails>(environment.baseUrl + 'api/posts', post);
  }

}
