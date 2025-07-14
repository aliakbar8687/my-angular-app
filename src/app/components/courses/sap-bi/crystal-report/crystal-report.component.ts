import { Component } from '@angular/core';

@Component({
  selector: 'app-crystal-report',
  standalone: false,
  templateUrl: './crystal-report.component.html',
  styleUrl: './crystal-report.component.scss'
})
export class CrystalReportComponent {
 modules = [
    'Introduction to Crystal Reports',
    'Connecting to SAP and Non-SAP Data Sources',
    'Report Creation and Design',
    'Using Parameters and Filters',
    'Grouping and Summarizing Data',
    'Chart and Graph Integration',
    'Sub-Reports and Cross-Tabs',
    'Formula Fields and Functions',
    'Exporting and Scheduling Reports',
    'Real-Time Project Case Studies'
  ];
}
