import { Component } from '@angular/core';

@Component({
  selector: 'app-sales-distribution',
  standalone: false,
  templateUrl: './sales-distribution.component.html',
  styleUrl: './sales-distribution.component.scss'
})
export class SalesDistributionComponent {
expanded: string | null = null;

  toggleExpand(code: string) {
    this.expanded = this.expanded === code ? null : code;
  }
images = [
  {
    src: 'https://img.freepik.com/premium-photo/sale-growth-concept-with-business-ai-touching-graph-increase-sales-volume-with-shopping-cart_555983-5929.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
    alt: 'Sales Analytics',
    overlay: 'Optimize Sales Process',
    corner: 'Sales'
  },
  {
    src: 'https://img.freepik.com/premium-photo/shopping-cart-laptop-computer_99233-853.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
    alt: 'Digital Integration',
    overlay: 'Digital Integration',
    corner: 'Delivery'
  },
  {
    src: 'https://img.freepik.com/premium-photo/concepts-online-marketing-future-business-eco-friendly-mini-shopping-cart-coins-stack-with-hologram-effect_105092-1600.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
    alt: 'Billing Solutions',
    overlay: 'Automated Billing',
    corner: 'Billing'
  },
    {
    src: 'https://img.freepik.com/free-photo/business-person-futuristic-business-environment_23-2150970200.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
    alt: 'Order Management',
    overlay: 'Streamlined Order Management',
    corner: 'Orders'
  },
  {
    src: 'https://img.freepik.com/premium-photo/hand-reaches-out-touch-glowing-sap-logo-futuristic-digital-display_417479-2936.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
    alt: 'Customer Management',
    overlay: 'Customer Data Integration',
    corner: 'Customers'
  },
  {
    src: 'https://img.freepik.com/premium-photo/businessman-presses-b2b-button-virtual-screen-man-touched-icon-business-business-touch_1126722-13045.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
    alt: 'Invoice Processing',
    overlay: 'Faster Invoice Processing',
    corner: 'Invoices'
  }
];

  courses = [
    {
      code: 'SAP129',
      title: 'SAP Navigation',
      details: [
        'Logging on and off',
        'Recognizing SAP screens, menus, fields, icons',
        'Using Application Help and SAP Library',
        'Setting up Favorites and default values',
        'Navigating SAP standard reports',
        'Understanding system messages',
        'Review questions and simulations'
      ]
    },
    {
      code: 'TERP01',
      title: 'Introduction to SAP ERP and SAP NetWeaver',
      details: []
    },
    {
      code: 'TERP61',
      title: 'Introduction to Processes in Sales Order Management',
      details: []
    },
    {
      code: 'SM001',
      title: 'Introduction to SAP Solution Manager',
      details: []
    },
    {
      code: 'TSCM60',
      title: 'Order Fulfillment I (e-learning + student handbook)',
      details: []
    },
    {
      code: 'TSCM62',
      title: 'Order Fulfillment II (e-learning + student handbook)',
      details: []
    },
    {
      code: 'TSCM50',
      title: 'Procurement I',
      details: []
    },
    {
      code: 'TSCM52',
      title: 'Procurement II',
      details: []
    }
  ];
}
