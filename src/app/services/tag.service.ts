import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TagDisplay } from '../model/TagDisplay';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) { }

  getAllDisplayTags(): Observable<TagDisplay[]> {
    return this.http.get<TagDisplay[]>(environment.baseUrl + 'api/tags');
  }

  getTagById(id: number): Observable<TagDisplay> {
    return this.http.get<TagDisplay>(environment.baseUrl + 'api/tags/' + id.toString());
  }

  createTag(tag: TagDisplay): Observable<TagDisplay> {
    return this.http.post<TagDisplay>(environment.baseUrl + 'api/tags/', tag);
  }

  updateTag(tag: TagDisplay): Observable<TagDisplay> {
    return this.http.put<TagDisplay>(environment.baseUrl + 'api/tags/' + tag.id.toString(), tag);
  }

}
