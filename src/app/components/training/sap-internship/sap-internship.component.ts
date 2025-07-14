import { Component } from '@angular/core';

@Component({
  selector: 'app-sap-internship',
  standalone: false,
  templateUrl: './sap-internship.component.html',
  styleUrl: './sap-internship.component.scss'
})
export class SapInternshipComponent {
  advantages = [
    '360 Degree nurturing and development of SAP trainee',
    'Project ready / Onsite ready consultant',
    '100 Per cent confidence building',
    'Successful handling all kinds of Industry processes and SAP practices',
    'Effective client management and issue handling'
  ];

  structure = [
    'Understanding Candidate (Education, Experience, Exposure and Knowledge)',
    'Introduction to SAP-ERP and Technical and Functional Environment',
    'Exposure to Various Business processes',
    'SAP Standard functionalities and Application',
    'Configurations, Testing and Reverse Testing',
    'Mapping all processes',
    'Daily Assignments',
    'Dummy Project',
    'Discussion and Presentation on completed topics from SAP Trainee',
    'Group discussions and Client management skill development',
    'Exposure to real issues and on-site work experience',
    'Reviews and Performance management',
    'Module and Industry expert sessions',
    'Continuous monitoring and lab assistance'
  ];
}
