import { Component } from '@angular/core';

@Component({
  selector: 'app-sap-course',
  standalone: false,
  templateUrl: './sap-course.component.html',
  styleUrls: ['./sap-course.component.scss']
})
export class SapCourseComponent {
modules = [
  {
    icon: '🗄️',
    title: 'SAP HANA Database Administration',
    description: 'Master SAP HANA in-memory database architecture, installation, configuration, and performance optimization. Learn backup and recovery strategies, system monitoring, user management, and advanced database administration techniques for enterprise environments.'
  },
  {
    icon: '📊',
    title: 'SAP HANA Data Modeling',
    description: 'Design and develop sophisticated data models using SAP HANA Studio and Web IDE. Create calculation views, attribute views, analytic views, and stored procedures. Master advanced techniques for real-time analytics, data virtualization, and multi-dimensional modeling for business intelligence.'
  },
  {
    icon: '⚡',
    title: 'SAP HANA Performance Optimization',
    description: 'Deep dive into SAP HANA performance tuning methodologies, memory management, and query optimization techniques. Learn to analyze system performance, identify bottlenecks, implement indexing strategies, and optimize data loading processes for maximum system efficiency.'
  },
  {
    icon: '🔗',
    title: 'SAP HANA Integration & Development',
    description: 'Explore SAP HANA integration capabilities with SAP and non-SAP systems through OData services, REST APIs, and native SQL. Learn HANA application development using XS JavaScript, SQLScript programming, and real-time data replication techniques for hybrid cloud architectures.'
  }
];
}
