import { Component } from '@angular/core';

@Component({
  selector: 'app-plant-maintenance',
  standalone: false,
  templateUrl: './plant-maintenance.component.html',
  styleUrl: './plant-maintenance.component.scss'
})
export class PlantMaintenanceComponent {
expanded: string | null = null;

  toggle(code: string) {
    this.expanded = this.expanded === code ? null : code;
  }

 courses = [
  {
    code: 'SAP129',
    title: 'SAP Navigation (Learning Hub)',
    details: [
      'Logging on and off the SAP system via SAP GUI or Fiori Launchpad',
      'Understanding SAP screens, including menus, status bars, and navigation areas',
      'Recognizing and using standard SAP icons for navigation and actions',
      'Accessing Application Help and SAP Library for on-demand guidance',
      'Creating and managing user-specific Favorites for frequently used transactions',
      'Understanding and interpreting SAP system messages (errors, warnings, status)',
      'Setting user-specific default values to streamline data entry',
      'Navigating and executing SAP standard reports for day-to-day operations',
      'Reinforcement through interactive questions and system simulation scenarios'
    ]
  },
  {
    code: 'SAP01e',
    title: 'SAP Overview',
    details: [
      'Introduction to SAP as an enterprise software company and its global reach',
      'Overview of SAP product portfolio including SAP S/4HANA, Business Suite, and Industry Solutions',
      'Understanding the concept of integrated business processes within ERP systems',
      'Key modules and their functions: FI (Financial Accounting), MM (Materials Management), SD (Sales and Distribution), PP (Production Planning), and more',
      'Role of master data and organizational structures in the SAP system',
      'Basic concepts of transactions, real-time processing, and reporting',
      'Navigation tips across SAP GUI and Fiori interfaces',
      'Overview of SAP support, updates, and innovation roadmaps'
    ]
  },
  {
    code: 'PLM305',
    title: 'Managing Technical Objects',
    details: [
      'Understanding technical objects: equipment, functional locations, and bills of material (BOM)',
      'Creating, displaying, and changing master data for equipment and functional locations',
      'Structuring technical assets using hierarchies and reference data',
      'Classification of technical objects and link to documents, warranties, and measurement points',
      'Integration with Maintenance Planning and Work Orders',
      'Use of serial numbers and data history for tracking and traceability'
    ]
  },
  {
    code: 'PLM310',
    title: 'Maintenance and Service Processing (Preventative)',
    details: [
      'Introduction to Preventive Maintenance (PM) strategies and concepts',
      'Creating and scheduling maintenance plans (single cycle, strategy-based, and performance-based)',
      'Generating maintenance calls and work orders automatically',
      'Integration with technical objects and measuring points for condition-based triggers',
      'Handling call objects, notifications, and completion confirmations',
      'Use of maintenance items, cycles, and packages'
    ]
  },
  {
    code: 'PLM315',
    title: 'Maintenance Processing Operational Functions',
    details: [
      'Execution of maintenance orders and notifications in real operational environments',
      'Creation and release of work orders, assignment of tasks, and materials management',
      'Time confirmation, technical completion, and settlement procedures',
      'Handling unplanned breakdowns and emergency maintenance scenarios',
      'Integration with Warehouse, Purchasing, and HR for resource planning',
      'Standard reporting and KPIs for operational maintenance performance'
    ]
  },
  {
    code: 'PLM318',
    title: 'Analytics in Enterprise Asset Management',
    details: [
      'Overview of key analytics tools available in SAP for EAM (e.g., Fiori, SAP Analytics Cloud)',
      'Analyzing asset performance, maintenance costs, and downtime metrics',
      'Using standard reports and dashboards for work orders, equipment, and failures',
      'KPI tracking for preventive vs corrective maintenance efficiency',
      'Real-time visibility using SAP HANA and embedded analytics',
      'Customization of analytic views and queries for specific operational needs'
    ]
  },
  {
    code: 'PLM320',
    title: 'WCM (Work Clearance Management)',
    details: [
      'Introduction to WCM and its role in ensuring safety during maintenance activities',
      'Creating and managing work permits, isolation procedures, and risk assessments',
      'Integration of WCM with Maintenance Orders and Technical Objects',
      'Configuring WCM objects such as WCDs (Work Clearance Documents) and tags',
      'Ensuring regulatory compliance through proper clearance documentation and process control',
      'Real-world use cases involving isolation, safety locks, and clearance workflows'
    ]
  }
];

}
