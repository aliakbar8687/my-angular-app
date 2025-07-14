import { Component } from '@angular/core';

@Component({
  selector: 'app-sap-bi-platform',
  standalone: false,
  templateUrl: './sap-bi-platform.component.html',
  styleUrl: './sap-bi-platform.component.scss'
})
export class SapBiPlatformComponent {
  trainingModules = [
    'SAP BI Introduction & Architecture Overview',
    'Universe Design Tool (UDT)',
    'Information Design Tool (IDT)',
    'Web Intelligence (WebI)',
    'Crystal Reports',
    'BI Launch Pad and Security',
    'SAP BO Admin & Deployment',
    'Integration with SAP BW / ECC',
    'Scheduling & Publishing Reports',
    'Real-time Project Scenarios'
  ];

  imageData = [
    {
      url: 'https://img.freepik.com/premium-photo/financial-advisor-expert-trader-work-with-bi-business-intelligence-data-lisp_31965-331735.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
      title: 'Data Visualizations',
      caption: 'Design compelling dashboards',
      cornerNote: 'Live BI'
    },
    {
      url: 'https://img.freepik.com/premium-photo/financial-dashboard-data-display-laptop-screen-concord_31965-288139.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
      title: 'Real-time Analytics',
      caption: 'Deliver live performance metrics',
      cornerNote: 'Analytics'
    },
    {
      url: 'https://img.freepik.com/premium-photo/data-analysis-business-finance-concept-uds_31965-308414.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
      title: 'Enterprise Reports',
      caption: 'Generate pixel-perfect reports',
      cornerNote: 'Reporting'
    }
  ];
}
