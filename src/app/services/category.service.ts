import { Category } from './../model/Category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryDisplay } from '../model/CategoryDisplay';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  selectedCategory!: CategoryDisplay;

  constructor(private http: HttpClient) { }

  getAllDisplayCategory(): Observable<CategoryDisplay[]> {
    return this.http.get<CategoryDisplay[]>(environment.baseUrl + 'api/categories');
  }

  getAllDisplayCategoryWithSubCategories(): Observable<CategoryDisplay[]> {
    return this.http.get<CategoryDisplay[]>(environment.baseUrl + 'api/categories/with-sub');
  }

  setSelectedCategory(category: CategoryDisplay): void {
    this.selectedCategory = category;
  }

  getSelectedCategory(): CategoryDisplay {
    return this.selectedCategory;
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(environment.baseUrl + 'api/categories/' + id.toString());
  }

  getAllAvailableSubCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.baseUrl + 'api/categories/available-sub-categories');
  }

  getAvailableSubCategories(id: number): Observable<Category[]> {
    return this.http.get<Category[]>(environment.baseUrl + 'api/categories/available-sub-categories/' + id.toString());
  }

  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(environment.baseUrl + 'api/categories', category);
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(environment.baseUrl + 'api/categories', category);
  }

}
