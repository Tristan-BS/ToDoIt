import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as devEnvironment } from '../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class ManageService {
  private apiUrl = devEnvironment.apiURL;

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/category/showall`)
  }

  addCategory(category: {title: string, description: string, color: string}): Observable<any> {
    return this.http.post(`${this.apiUrl}/category/add`, category);
  }

  editCategory(id: number, category: {title: string, description: string, color: string}): Observable<any> {
    return this.http.put(`${this.apiUrl}/category/edit/${id}`, category);
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/category/delete/${id}`);
  }
}
