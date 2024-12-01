import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ParentService {
  private apiUrl = 'http://localhost:5286/api/ParentClass'; // replace with your API endpoint

  constructor(private http: HttpClient) {}

  // Create
  createParent(parent: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/addParent`, parent);
  }

  // Read
  getParent(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getParent/${id}`); //?
  }

  // Update
  updateParent(parent: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/updateParent`, parent);
  }

  // Delete
  deleteParent(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/removeParent/${id}`);
  }

  // List
  getParents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/getAllParents');
  }

  // List by name
  getParentsByName(name: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/filterByName/${name}`);
  }

  // Add many parents
  addManyParents(parents: any[]): Observable<any> {
    console.log(parents);
    return this.http.post<any>(`${this.apiUrl}/addManyParents`, parents);
  }

  getParentsByUserId(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/filterByUserId/${userId}`);
  }
}
