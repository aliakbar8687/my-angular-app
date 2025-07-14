import { Component } from '@angular/core';

@Component({
  selector: 'app-sap-abap',
  standalone: false,
  templateUrl: './sap-abap.component.html',
  styleUrls: ['./sap-abap.component.scss']
})
export class SapAbapComponent {
  topics = [
    'ABAP Programming Basics',
    'Data Dictionary & Internal Tables',
    'Modularization Techniques',
    'Reports (Classical, Interactive, ALV)',
    'Forms – SAP Scripts & SmartForms',
    'Dialog Programming',
    'RFC, BAPI, BADI & User Exits',
    'Object-Oriented ABAP',
    'Enhancements & Debugging Techniques',
    'Project Simulation & Certification Guidance'
  ];

  highlights = [
    '100% Practical Training with Live SAP Server Access',
    'Real-Time Project Assignments',
    'Career Mentoring and Resume Building',
    'SAP-Certified Trainer with 10+ Years of Experience',
    'Interview Preparation and Job Support',
    'Weekend & Weekday Batches Available'
  ];

  images = [
    {
      src: 'https://img.freepik.com/free-vector/isometric-erp-illustration_52683-84174.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
      alt: 'SAP Training 1',
      title: 'Live Server Access',
      caption: 'Practice on actual SAP ABAP systems in real-time.',
      note: 'Real-Time'
    },
    {
      src: 'https://img.freepik.com/free-photo/saas-concept-collage_23-2149399295.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
      alt: 'SAP Training 2',
      title: 'Industry Projects',
      caption: 'Get hands-on with guided projects.',
      note: 'Projects'
    },
    {
      src: 'https://img.freepik.com/premium-photo/sap-system-concept-sap-system-application-products-business-process-automation-management-software-concept-management-solutions_35148-12337.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
      alt: 'SAP Training 3',
      title: 'Job Support',
      caption: 'From resume building to interview prep.',
      note: 'Support'
    }
  ];
}
