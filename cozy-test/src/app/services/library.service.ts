import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  private count = 5;
  private apiUrl = `https://apidata.mos.ru/v1/datasets/526/rows?api_key=d8a1eb6c-4024-4cba-85b1-e206bee6b13c&$top=${this.count}&`;

  constructor(private http: HttpClient) {}

  getLibraries(searchTerm: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?q=${searchTerm}`);
  }
}
