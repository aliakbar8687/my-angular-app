// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Sayvaxia Technology and Innovation Lab';
  showNavbarFooter = true;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    // Listen to route changes to update navbar/footer visibility
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateNavbarFooterVisibility();
    });

    // Initial check
    this.updateNavbarFooterVisibility();
  }

  private updateNavbarFooterVisibility() {
    const currentRoute = this.router.url;
    const isAuthenticated = this.authService.isAuthenticated();
    
    // Hide navbar and footer if user is authenticated and on dashboard
    // Or show only login page if not authenticated and trying to access dashboard
    if (isAuthenticated && currentRoute === '/dashboard') {
      this.showNavbarFooter = false;
    } else if (!isAuthenticated && currentRoute === '/dashboard') {
      // Redirect to login if trying to access dashboard without authentication
      this.router.navigate(['/login']);
      this.showNavbarFooter = true;
    } else if (currentRoute === '/login') {
      // Show navbar/footer on login page for navigation back to main site
      this.showNavbarFooter = true;
    } else {
      // Show navbar/footer on all other pages
      this.showNavbarFooter = true;
    }
  }

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  get isDashboardRoute(): boolean {
    return this.router.url === '/dashboard';
  }
}