import { Component } from '@angular/core';

@Component({
  selector: 'app-quality-management',
  standalone: false,
  templateUrl: './quality-management.component.html',
  styleUrl: './quality-management.component.scss'
})
export class QualityManagementComponent {
 expanded: string | null = null;

  toggle(code: string) {
    this.expanded = this.expanded === code ? null : code;
  }

 courses = [
  {
    code: 'SCM100',
    title: 'Business Process in Planning',
    details: [
      'Overview of the integrated planning process in SAP ECC 6.0 and SAP R/3 environments',
      'Master data requirements: material master, bill of materials (BOM), routings, and work centers',
      'Sales and Operations Planning (SOP) for top-down planning and forecast adjustments',
      'Demand Management and its role in independent requirements planning',
      'Execution and simulation of Long-Term Planning (LTP) scenarios',
      'Material Requirements Planning (MRP): types, runs, and exception handling',
      'Capacity Evaluation for resource availability and production planning',
      'Integration of planning with production and procurement modules',
      'Introduction to SAP Advanced Planning & Optimization (SAP APO) as part of SCM suite'
    ]
  },
  {
    code: 'SCM300',
    title: 'Manufacturing Overview',
    details: [
      'Introduction to discrete, repetitive, and process manufacturing in SAP',
      'Manufacturing master data: BOMs, routings, production versions, and resources',
      'Production order lifecycle: creation, release, scheduling, and execution',
      'Order confirmations, goods movements, and backflushing processes',
      'Capacity planning, detailed scheduling, and shop floor control',
      'Integration with inventory, cost management, and quality processes',
      'Understanding make-to-stock vs. make-to-order production strategies',
      'Reporting and analysis of production performance and work-in-progress (WIP)'
    ]
  },
  {
    code: 'SCM500',
    title: 'Processes in Procurement',
    details: [
      'Comprehensive Procure-to-Pay (P2P) cycle and its business relevance',
      'Vendor master data management and source determination logic',
      'Creation of purchase requisitions, RFQs, and purchase orders',
      'Goods receipt process and invoice verification',
      'Automatic account determination and inventory postings',
      'Outline agreements and scheduling agreements',
      'Release procedures and workflow integration for purchasing documents',
      'Procurement analytics using standard SAP reporting tools'
    ]
  },
  {
    code: 'PLM400',
    title: 'Business Processes in Quality',
    details: [
      'Introduction to SAP Quality Management (QM) and its integration with logistics',
      'Overview of quality planning, inspection, and control processes',
      'Inspection types: goods receipt, in-process, and final inspection',
      'Handling of inspection lots, results recording, and usage decisions',
      'Integration with material master, vendor master, and work centers',
      'Quality notifications and corrective/preventive action (CAPA) processes',
      'Audit management and quality certificates',
      'Quality key performance indicators (KPIs) and standard reporting'
    ]
  },
  {
    code: 'PLM412',
    title: 'Quality Planning and Inspection',
    details: [
      'Setting up inspection plans, task lists, and sampling procedures',
      'Creating and maintaining master inspection characteristics and catalogs',
      'Use of control indicators and dynamic modification rules',
      'Inspection methods assignment and version control',
      'Inspection lot creation and automatic triggering based on business events',
      'Linkage to batch management, engineering change management, and document management'
    ]
  },
  {
    code: 'PLM415',
    title: 'Quality Management in Logistics',
    details: [
      'Integration of QM with materials management (MM) and warehouse processes',
      'Quality inspection during goods receipt and stock transfer',
      'Inspection stock handling and usage decisions in the warehouse',
      'Vendor evaluation based on quality inspection results',
      'Logistics-related quality notifications and follow-up actions',
      'Automated lot creation and status management in inbound logistics'
    ]
  },
  {
    code: 'PLM420',
    title: 'Quality Management in Production',
    details: [
      'In-process inspection integration with production orders',
      'Triggering inspection lots during shop floor execution',
      'Inspection points, sample calculation, and results recording during manufacturing',
      'Rejection handling, rework, and deviation management',
      'QM integration with manufacturing execution and work center operations',
      'Quality reporting for yield analysis, defect tracking, and process capability'
    ]
  }
];

}
