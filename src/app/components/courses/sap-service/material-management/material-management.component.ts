import { Component } from '@angular/core';

@Component({
  selector: 'app-material-management',
  standalone: false,
  templateUrl: './material-management.component.html',
  styleUrl: './material-management.component.scss'
})
export class MaterialManagementComponent {
expanded: string | null = null;

  toggleExpand(topic: string) {
    this.expanded = this.expanded === topic ? null : topic;
  }

 topics = [
  {
    code: 'SAP129',
    title: 'SAP Navigation',
    details: [
      'Basic SAP GUI navigation including menu paths, transaction codes (T-codes), and command field usage',
      'Personalization of SAP screens, layout settings, and favorites customization',
      'Understanding of screen elements such as status bar, standard toolbar, and navigation area',
      'Basic user actions like printing, help access, and working with multiple sessions',
      'Introduction to SAP Fiori Launchpad and differences with SAP GUI'
    ]
  },
  {
    code: 'SM001',
    title: 'Introduction to SAP Solution Manager (e-learning)',
    details: [
      'High-level overview of SAP Solution Manager and its importance in SAP landscapes',
      'Key functionalities such as Application Lifecycle Management, Test Suite, and Change Control Management',
      'Understand benefits of centralized documentation, monitoring, and process management',
      'Introduction to IT Service Management (ITSM) and Root Cause Analysis',
      'Learn how SolMan supports SAP upgrades, implementations, and operations'
    ]
  },
  {
    code: 'TERP01',
    title: 'SAP ERP: Introduction',
    details: [
      'Overview of SAP ERP and its role in enterprise resource planning',
      'Understanding core modules like FI (Financial), MM (Materials Management), SD (Sales), PP (Production)',
      'Explore how business processes integrate across the system',
      'Concepts of master data, transactional data, and organizational structures',
      'Introduction to real-time processing, system-wide reporting, and audit trails'
    ]
  },
  {
    code: 'TERP02',
    title: 'Introduction to SAP NetWeaver',
    details: [
      'Detailed introduction to SAP NetWeaver as the technical foundation of SAP systems',
      'Key components: Application Server, Business Intelligence, Enterprise Portal, and PI (Process Integration)',
      'Learn about integration capabilities across non-SAP and SAP systems',
      'Understanding of service-oriented architecture (SOA) and interoperability',
      'Explore NetWeaver’s role in mobility, data management, and development tools (ABAP/Java)'
    ]
  },
  {
    code: 'TERP41',
    title: 'Processes in Procurement',
    details: [
      'Comprehensive overview of Procure-to-Pay (P2P) process in SAP',
      'Steps from purchase requisition to purchase order, goods receipt, and invoice verification',
      'Vendor master data structure and integration with accounting and logistics',
      'Understanding purchasing documents, source determination, and info records',
      'Overview of procurement reporting and vendor evaluation criteria'
    ]
  },
  {
    code: 'TERP42',
    title: 'Processes in Inventory & Warehouse Management',
    details: [
      'Introduction to inventory management and warehouse operations in SAP',
      'Understanding goods movements, stock types (unrestricted, blocked, quality inspection)',
      'Warehouse structure: storage types, bins, sections, and strategies',
      'Overview of warehouse automation, transfer orders, and picking strategies',
      'Integration with MM and SD for seamless logistics operations'
    ]
  },
  {
    code: 'TSCM50',
    title: 'Procurement I',
    details: [
      'In-depth understanding of purchasing master data including vendors, materials, and purchasing info records',
      'Creation and management of purchase requisitions and purchase orders',
      'Introduction to document types, item categories, and account assignment categories',
      'Release strategies and approval workflow configuration',
      'Overview of pricing procedures and conditions in purchasing documents'
    ]
  },
  {
    code: 'TSCM52',
    title: 'Procurement II',
    details: [
      'Advanced purchasing functions including subcontracting, stock transport orders, and consignment',
      'Document release strategies for purchase orders and requisitions',
      'Invoice verification and integration with accounts payable',
      'Evaluation of vendors based on performance metrics and scorecards',
      'Use of analytical reports to track procurement KPIs and compliance'
    ]
  }
];

}
