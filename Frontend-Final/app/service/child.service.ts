import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChildService {
  private apiUrl = 'http://localhost:5286/api/ChildClass'; // replace with your API endpoint

  constructor(private http: HttpClient) {}

  // Create
  createChild(child: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/addChild', child);
  }

  // Read
  getChild(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Update
  updateChild(id: string, child: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/updateChild`, child); //?
  }

  // Delete
  deleteChild(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  // List
  getChildren(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/showChildren');
  }

  // List by description of properties------
  getChildrenByDescription(description: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.apiUrl}/getAllChildrenByDescription/${description}`
    );
  }

  // List by parent id
  getChildrenByParentId(parentId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/filterByParentId/${parentId}`);
  }

  // List by parent id
  getAllChildClassesRange(start: number, end: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.apiUrl}/range?start=${start}&end=${end}`
    );
  }

  // Add many children
  addManyChildren(children: any[]): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/addManyChildren`, children);
  }
}
