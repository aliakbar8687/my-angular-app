import { Component } from '@angular/core';

@Component({
  selector: 'app-success-factor',
  standalone: false,
  templateUrl: './success-factor.component.html',
  styleUrl: './success-factor.component.scss'
})
export class SuccessFactorComponent {
 modules = [
    'Introduction to SAP SuccessFactors',
    'Employee Central',
    'Recruitment and Onboarding',
    'Performance & Goals Management',
    'Learning Management System (LMS)',
    'Succession & Development',
    'Compensation Management',
    'Time Off and Payroll Integration',
    'Role-Based Permissions',
    'Reporting and Analytics'
  ];
}
