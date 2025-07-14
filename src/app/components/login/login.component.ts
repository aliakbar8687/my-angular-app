// login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup; // Definite assignment assertion
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
      if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      
      // Fix: Add null checks for form values
      if (email && password) {
        if (this.authService.login(email, password)) {
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = 'Invalid credentials';
        }
      } else {
        this.errorMessage = 'Please fill in all required fields';
      }
    }
  }
    goToHome() {
    this.router.navigate(['/']);
  }
}