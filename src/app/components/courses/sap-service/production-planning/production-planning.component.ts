import { Component } from '@angular/core';

@Component({
  selector: 'app-production-planning',
  standalone: false,
  templateUrl: './production-planning.component.html',
  styleUrl: './production-planning.component.scss'
})
export class ProductionPlanningComponent {
 expanded: string | null = null;

  toggleExpand(topic: string) {
    this.expanded = this.expanded === topic ? null : topic;
  }

 topics = [
  {
    code: 'SAP129',
    title: 'SAP Navigation (e-learning)',
    details: [
      'Logging on and off the SAP system using SAP GUI or SAP Fiori',
      'Understanding SAP screens, menus, toolbars, status bars, fields, and icons',
      'Using Application Help, SAP Library, and documentation tools effectively',
      'Setting up user-specific Favorites, transaction shortcuts, and default field values',
      'Navigating and running SAP standard reports and basic data analysis tools',
      'Understanding and interpreting system messages and reviewing interactive simulations for practice'
    ]
  },
  {
    code: 'SM001',
    title: 'Introduction to SAP Solution Manager (e-learning)',
    details: [
      'Overview of SAP Solution Manager’s role in managing SAP system landscapes',
      'Core features including Application Lifecycle Management, Test Management, and IT Service Management',
      'Monitoring capabilities, root cause analysis, and support for end-to-end operations',
      'Integration with SAP S/4HANA, cloud systems, and non-SAP systems for hybrid landscapes',
      'Benefits of Solution Documentation, Process Management, and Change Control Management'
    ]
  },
  {
    code: 'TERP01',
    title: 'SAP ERP: Introduction (e-learning)',
    details: [
      'Introduction to SAP ERP and how it supports business process integration',
      'High-level understanding of major modules: Financials (FI), Controlling (CO), Sales (SD), Materials Management (MM), Production Planning (PP), and Human Capital Management (HCM)',
      'Core concepts of organizational units, master data, and transactional data',
      'Real-world scenario demonstrations for cross-functional processes like Order-to-Cash and Procure-to-Pay',
      'Basic system navigation, reporting, and transaction execution within the ERP environment'
    ]
  },
  {
    code: 'TERP51',
    title: 'Introduction to Processes in Material Planning',
    details: [
      'Understanding the Material Requirements Planning (MRP) process and objectives',
      'Integration of material planning with inventory, procurement, and production modules',
      'Key master data: material master, bill of materials (BOM), work centers, and routing',
      'Planning strategies including make-to-stock and make-to-order scenarios',
      'Overview of demand forecasting, planning run types, and exception messages'
    ]
  },
  {
    code: 'TERP52',
    title: 'Introduction to Processes in Manufacturing Execution',
    details: [
      'Understanding manufacturing execution processes and their link to planning and logistics',
      'Shop floor control, production order processing, and confirmation activities',
      'Integration of manufacturing with warehouse, inventory, and quality management',
      'Execution tools: work centers, routings, and order releases',
      'Performance tracking with production confirmations and goods movements'
    ]
  },
  {
    code: 'TSCM40',
    title: 'Planning/Manufacturing I (e-learning + student handbook)',
    details: [
      'Detailed understanding of discrete manufacturing processes within SAP',
      'Material master data management and its role in planning and execution',
      'Creating and managing production bills of materials (BOM) and routings',
      'MRP basics: planning run types, lot sizing, scheduling, and planning results analysis',
      'Work center configuration and capacity planning fundamentals'
    ]
  },
  {
    code: 'TSCM42',
    title: 'Planning/Manufacturing II (e-learning + student handbook)',
    details: [
      'Advanced planning and production strategies including repetitive and process manufacturing',
      'Detailed configuration of production orders, order types, and status management',
      'Production execution: release, confirmation, and goods movements',
      'Integration with Quality Management (QM) and Plant Maintenance (PM)',
      'Use of SAP standard reports for production monitoring and performance analysis'
    ]
  }
];

}
