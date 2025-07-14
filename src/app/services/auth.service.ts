// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly ADMIN_EMAIL = 'admin@syvaxia.com';
  private readonly ADMIN_PASSWORD = 'syvaxia@123';
  
  // Observable to track authentication state changes
  private authStateSubject = new BehaviorSubject<boolean>(this.isAuthenticated());
  public authState$ = this.authStateSubject.asObservable();

  constructor(private router: Router) {
    // Check authentication state on service initialization
    this.authStateSubject.next(this.isAuthenticated());
  }

  login(email: string, password: string): boolean {
    if (email === this.ADMIN_EMAIL && password === this.ADMIN_PASSWORD) {
      localStorage.setItem('isLoggedIn', 'true');
      this.authStateSubject.next(true);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    this.authStateSubject.next(false);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  // Method to redirect to appropriate page based on auth state
  redirectBasedOnAuth(): void {
    if (this.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}