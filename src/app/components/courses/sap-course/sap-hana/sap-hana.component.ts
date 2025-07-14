import { Component } from '@angular/core';

@Component({
  selector: 'app-sap-hana',
  standalone: false,
  templateUrl: './sap-hana.component.html',
  styleUrls: ['./sap-hana.component.scss']
})
export class SapHanaComponent {
  modules = [
    'Introduction to SAP HANA & Architecture',
    'Data Modeling with SAP HANA Studio',
    'SAP HANA SQL & Procedures',
    'Real-Time Replication & Data Provisioning',
    'SAP HANA Administration & Security',
    'Integration with SAP BW & BusinessObjects',
    'Performance Optimization Techniques',
    'Live Projects & Case Studies'
  ];
imageCards = [
  {
    src: 'https://img.freepik.com/free-vector/gradient-api-illustration_23-2149379182.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
    alt: 'SAP HANA Training',
    title: 'Expert-Led Classes',
    description: 'Learn directly from SAP-certified professionals.',
    corner: 'Live Sessions'
  },
  {
    src: 'https://img.freepik.com/premium-photo/sap-system-software-automation-concept-virtual-screen-data-center_161452-13247.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
    alt: 'Hands-on Learning',
    title: 'Real-Time Practice',
    description: 'Work on live datasets and scenarios.',
    corner: 'Case Study'
  },
  {
    src: 'https://img.freepik.com/premium-photo/api-application-programming-interface-concept-man-holding-virtual-screen-api-icon-software-development-tool_562687-5889.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
    alt: 'Placement Support',
    title: 'Career Guidance',
    description: 'Land roles at top firms after training.',
    corner: 'Career Boost'
  }
];

  benefits = [
    'Hands-on training with real-time scenarios',
    'Expert SAP HANA-certified trainers',
    'Certification exam preparation included',
    'Placement assistance with top MNCs',
    'Available in both online and offline modes',
    'Access to recorded sessions & learning materials'
  ];
}
