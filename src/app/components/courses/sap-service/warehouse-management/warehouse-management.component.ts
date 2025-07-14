import { Component } from '@angular/core';

@Component({
  selector: 'app-warehouse-management',
  standalone: false,
  templateUrl: './warehouse-management.component.html',
  styleUrl: './warehouse-management.component.scss'
})
export class WarehouseManagementComponent {
expanded: string | null = null;

  toggle(code: string) {
    this.expanded = this.expanded === code ? null : code;
  }
images = [
  {
    url: 'https://img.freepik.com/premium-photo/erp-enterprise-resource-planning-software-modish-business-plan-marketing-strategy_31965-247681.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
    alt: 'Warehouse Logistics',
    title: 'Streamline Operations',
    corner: 'Real-Time Tracking'
  },
  {
    url: 'https://img.freepik.com/premium-photo/warehouse-management-innovative-software-computer-real-time-monitoring_31965-18827.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
    alt: 'Modern Warehouse',
    title: 'Smart Inventory',
    corner: 'Automation'
  },
  // {
  //   url: 'https://img.freepik.com/premium-photo/laptop-barcode-scanner-boxes-warehouse_1221914-9654.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
  //   alt: 'Logistics',
  //   title: 'Efficient Workflows',
  //   corner: 'Integrated SAP Tools'
  // }
];

 courses = [
  {
    code: 'SAP129',
    title: 'SAP Navigation',
    details: [
      'Logging on and off the SAP system using SAP GUI or Fiori Launchpad',
      'Understanding the layout of SAP screens, menus, fields, toolbars, and navigation structures',
      'Recognizing and interpreting SAP icons and system indicators',
      'Accessing “Application Help” and using the SAP Library for learning support',
      'Creating and managing “Favorites” for frequently accessed transactions',
      'Understanding and interpreting system messages (errors, warnings, status updates)',
      'Setting up default values to streamline repetitive data entry',
      'Navigating through SAP standard reports and basic analytics',
      'Practicing tasks through system simulations and reviewing learning via questions and quizzes'
    ]
  },
  {
    code: 'SCM601',
    title: 'Processes in Warehouse Management',
    details: [
      'Overview of SAP Warehouse Management (WM) processes and system integration',
      'Structure of warehouse: warehouse number, storage types, bins, and sections',
      'Inbound processes: goods receipt handling, putaway strategies, and transfer orders',
      'Outbound processes: picking strategies, packing, and goods issue',
      'Inventory management and physical inventory procedures within the warehouse',
      'Handling stock differences, batch management, and serial numbers in WM',
      'Integration with Materials Management (MM), Production Planning (PP), and Quality Management (QM)'
    ]
  },
  {
    code: 'SCM605',
    title: 'Customizing Delivery Processes',
    details: [
      'Understanding delivery document types and their configuration',
      'Customizing item categories, schedule lines, and delivery relevance',
      'Settings for picking, packing, and shipping point determination',
      'Outbound delivery processing and transportation planning',
      'Integration of deliveries with Warehouse Management (WM) and Extended Warehouse Management (EWM)',
      'Configuration of text determination, output determination, and delivery blocks',
      'Monitoring deliveries through status tracking and exception handling'
    ]
  },
  {
    code: 'SCM610',
    title: 'Customizing Warehouse Management',
    details: [
      'Configuring warehouse structures: storage types, storage sections, bins, and indicators',
      'Defining movement types and transfer requirements',
      'Setting up putaway and picking strategies (next empty bin, fixed bin, FIFO, etc.)',
      'Customizing replenishment and stock removal rules',
      'Integration settings with Inventory Management and Production',
      'Handling special stock types: consignment, project, and customer stock',
      'Monitoring warehouse activities with SAP standard reports and KPIs'
    ]
  },
  {
    code: 'SCM630',
    title: 'Extended Warehouse Management (EWM)',
    details: [
      'Introduction to SAP EWM and how it enhances standard Warehouse Management',
      'Understanding EWM architecture, deployment options, and integration scenarios',
      'Inbound and outbound delivery processing using EWM',
      'Warehouse order creation, resource management, and labor management',
      'Configuring storage bins, warehouse structure, and layout-oriented storage control',
      'Use of advanced features like slotting, wave management, and value-added services (VAS)',
      'Integration with Transportation Management (TM), Yard Logistics, and RFID technologies',
      'EWM monitoring tools, dashboards, and exception handling'
    ]
  }
];

}
