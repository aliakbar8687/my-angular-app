import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiUrl = 'http://localhost:3000/api'; // Update with your backend URL

  constructor(private http: HttpClient) { }

  // Get all states
  getStates(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/states`);
  }

  // Get cities by state ID
  getCitiesByState(stateId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/cities/${stateId}`);
  }
}