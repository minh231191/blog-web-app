import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TagDisplay } from '../model/TagDisplay';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  selectedTag!: TagDisplay;

  constructor(private http: HttpClient) { }

  getSelectedTag(): TagDisplay {
    return this.selectedTag;
  }

  setSelectedTag(tag: TagDisplay): void {
    this.selectedTag = tag;
  }

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
