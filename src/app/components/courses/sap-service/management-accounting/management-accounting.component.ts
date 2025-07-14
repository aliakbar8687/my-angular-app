import { Component } from '@angular/core';

@Component({
  selector: 'app-management-accounting',
  standalone: false,
  templateUrl: './management-accounting.component.html',
  styleUrl: './management-accounting.component.scss'
})
export class ManagementAccountingComponent {
 expanded: string | null = null;
 topics = [
  {
    code: 'TERP01',
    title: 'SAP ERP Business Process Basics and Navigation',
    details: [
      'Understand the core business processes supported by SAP ERP, including Order-to-Cash (OTC), Procure-to-Pay (P2P), and Plan-to-Produce (P2P2)',
      'Familiarize with SAP GUI, Fiori Launchpad, and system landscape (DEV, QAS, PRD)',
      'Introduction to user roles, authorization objects, and role-based access control',
      'Learn to navigate menus, transaction codes, and SAP Easy Access screen',
      'Overview of master data vs. transactional data and how they interact across modules'
    ]
  },
  {
    code: 'TERP20',
    title: 'SAP Financial and Management Accounting Basics',
    details: [
      'Detailed overview of FI (Financial Accounting) and CO (Controlling) modules and their interdependency',
      'Understand the structure of the financial organization including company code, chart of accounts, controlling area',
      'Introduction to general ledger accounting, accounts receivable, and accounts payable',
      'Understand financial reporting, balance sheets, and P&L statements in SAP',
      'Learn how cost elements link financial and controlling views for integrated reporting'
    ]
  },
  {
    code: 'TFIN20',
    title: 'Management Accounting I',
    details: [
      'Foundations of internal cost accounting and its importance in decision-making',
      'Setup and usage of cost centers, cost elements, and statistical key figures',
      'Manage and monitor internal orders for cost tracking of small projects',
      'Overview of activity types, activity pricing, and planning',
      'Explore allocation techniques such as assessments and distributions'
    ]
  },
  {
    code: 'SM001E',
    title: 'Introduction to SAP Solution Manager',
    details: [
      'Explore the role of Solution Manager in SAP ALM (Application Lifecycle Management)',
      'Understand its core components: Process Management, IT Service Management, Change Control Management',
      'Utilize SolMan for centralized documentation, test management, and system monitoring',
      'Learn about the integration of SolMan with other SAP systems for diagnostics and analytics',
      'Understand technical monitoring, early watch alerts, and incident management'
    ]
  },
  {
    code: 'TFIN22',
    title: 'Management Accounting II',
    details: [
      'Deep dive into product costing using cost estimate with quantity structure',
      'Learn about cost object controlling and order settlement processes',
      'Understand profitability analysis using CO-PA (account-based and costing-based)',
      'Explore planning and budgeting features within CO for strategic management',
      'Use standard reports to analyze contribution margins, profitability segments, and cost performance'
    ]
  }
];


  toggleExpand(topic: string) {
    this.expanded = this.expanded === topic ? null : topic;
  }
}
