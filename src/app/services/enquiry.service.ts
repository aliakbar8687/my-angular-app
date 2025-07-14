// src/app/services/enquiry.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(private http: HttpClient) { }

  submitEnquiry(formData: any): Observable<any> {
    return this.http.post(`${API_URL}/enquiries`, formData);
  }

  getAllEnquiries(): Observable<any> {
    return this.http.get(`${API_URL}/enquiries`);
  }

  updateEnquiry(id: number, formData: any): Observable<any> {
    return this.http.put(`${API_URL}/enquiries/${id}`, formData);
  }

  deleteEnquiry(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/enquiries/${id}`);
  }
}