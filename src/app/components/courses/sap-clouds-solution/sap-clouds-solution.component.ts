import { Component, OnInit } from '@angular/core';

interface CloudSolution {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
  useCases: string[];
  pricing: string;
  documentation: string;
}

interface TrainingModule {
  id: string;
  title: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  topics: string[];
}

@Component({
  selector: 'app-sap-clouds-solution',
  standalone: false,
  templateUrl: './sap-clouds-solution.component.html',
  styleUrl: './sap-clouds-solution.component.scss'
})
export class SapCloudsSolutionComponent implements OnInit {
  
  selectedSolution: CloudSolution | null = null;
  activeTab: string = 'overview';
  
  cloudSolutions: CloudSolution[] = [
    {
      id: 'sap-btp',
      name: 'SAP Business Technology Platform (BTP)',
      description: 'The foundation for all SAP cloud solutions, providing integration, data management, analytics, and application development capabilities.',
      icon: 'cloud-platform',
      features: [
        'Integration Suite',
        'Data Intelligence',
        'Analytics Cloud',
        'HANA Cloud',
        'Application Development',
        'AI & Machine Learning'
      ],
      useCases: [
        'Digital Transformation',
        'Application Integration',
        'Data Analytics',
        'Custom App Development'
      ],
      pricing: 'Pay-as-you-go or Subscription',
      documentation: 'https://help.sap.com/btp'
    },
    {
      id: 'sap-s4hana-cloud',
      name: 'SAP S/4HANA Cloud',
      description: 'Next-generation ERP suite delivered as a cloud service with AI and machine learning capabilities.',
      icon: 'erp-cloud',
      features: [
        'Real-time Analytics',
        'AI-powered Insights',
        'Mobile Ready',
        'Industry-specific Solutions',
        'Automatic Updates',
        'Global Compliance'
      ],
      useCases: [
        'Financial Management',
        'Supply Chain Management',
        'Human Resources',
        'Procurement'
      ],
      pricing: 'User-based Subscription',
      documentation: 'https://help.sap.com/s4hana_cloud'
    },
    {
      id: 'sap-successfactors',
      name: 'SAP SuccessFactors',
      description: 'Comprehensive human capital management (HCM) suite delivered in the cloud.',
      icon: 'hr-cloud',
      features: [
        'Employee Central',
        'Performance & Goals',
        'Learning Management',
        'Recruiting',
        'Compensation',
        'Workforce Analytics'
      ],
      useCases: [
        'HR Digital Transformation',
        'Talent Management',
        'Employee Experience',
        'Workforce Planning'
      ],
      pricing: 'Per Employee Per Month',
      documentation: 'https://help.sap.com/successfactors'
    },
    {
      id: 'sap-concur',
      name: 'SAP Concur',
      description: 'Travel, expense, and invoice management solutions that simplify and automate everyday processes.',
      icon: 'expense-cloud',
      features: [
        'Expense Management',
        'Travel Booking',
        'Invoice Processing',
        'Mobile Apps',
        'Policy Compliance',
        'Real-time Reporting'
      ],
      useCases: [
        'Expense Automation',
        'Travel Management',
        'Invoice Processing',
        'Compliance Management'
      ],
      pricing: 'Per User Per Month',
      documentation: 'https://help.sap.com/concur'
    },
    {
      id: 'sap-ariba',
      name: 'SAP Ariba',
      description: 'Procurement and supply chain solutions that connect buyers and suppliers in a digital marketplace.',
      icon: 'procurement-cloud',
      features: [
        'Procurement Solutions',
        'Supplier Management',
        'Contract Management',
        'Spend Analysis',
        'Risk Management',
        'Ariba Network'
      ],
      useCases: [
        'Strategic Sourcing',
        'Supplier Collaboration',
        'Contract Lifecycle Management',
        'Spend Optimization'
      ],
      pricing: 'Transaction-based or Subscription',
      documentation: 'https://help.sap.com/ariba'
    },
    {
      id: 'sap-analytics-cloud',
      name: 'SAP Analytics Cloud',
      description: 'All-in-one cloud solution for business intelligence, planning, and predictive analytics.',
      icon: 'analytics-cloud',
      features: [
        'Business Intelligence',
        'Enterprise Planning',
        'Predictive Analytics',
        'Data Visualization',
        'Mobile Analytics',
        'Augmented Analytics'
      ],
      useCases: [
        'Financial Planning',
        'Sales Analytics',
        'Operational Reporting',
        'Predictive Modeling'
      ],
      pricing: 'User-based Subscription',
      documentation: 'https://help.sap.com/analytics-cloud'
    }
  ];

  trainingModules: TrainingModule[] = [
    {
      id: 'sap-cloud-fundamentals',
      title: 'SAP Cloud Fundamentals',
      duration: '8 hours',
      level: 'Beginner',
      description: 'Introduction to SAP cloud ecosystem and basic concepts.',
      topics: [
        'Cloud Computing Basics',
        'SAP Cloud Strategy',
        'Cloud vs On-Premise',
        'Security in the Cloud',
        'Getting Started with SAP BTP'
      ]
    },
    {
      id: 'sap-btp-development',
      title: 'SAP BTP Application Development',
      duration: '24 hours',
      level: 'Intermediate',
      description: 'Learn to develop applications on SAP Business Technology Platform.',
      topics: [
        'CAP Framework',
        'UI5 Development',
        'Integration Suite',
        'HANA Cloud Database',
        'DevOps and CI/CD'
      ]
    },
    {
      id: 'sap-s4hana-migration',
      title: 'SAP S/4HANA Cloud Migration',
      duration: '32 hours',
      level: 'Advanced',
      description: 'Complete guide to migrating from SAP ECC to S/4HANA Cloud.',
      topics: [
        'Migration Planning',
        'Data Migration Tools',
        'Custom Code Adaptation',
        'Testing Strategies',
        'Go-Live Support'
      ]
    },
    {
      id: 'sap-integration',
      title: 'SAP Cloud Integration',
      duration: '16 hours',
      level: 'Intermediate',
      description: 'Master integration patterns and tools in SAP cloud environment.',
      topics: [
        'Integration Patterns',
        'Cloud Integration Service',
        'API Management',
        'Event-Driven Architecture',
        'Monitoring and Troubleshooting'
      ]
    }
  ];

  ngOnInit(): void {
    // Initialize with first solution selected
    this.selectedSolution = this.cloudSolutions[0];
  }

  selectSolution(solution: CloudSolution): void {
    this.selectedSolution = solution;
    this.activeTab = 'overview';
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  enrollInTraining(moduleId: string): void {
    // This would typically integrate with your training platform
    console.log(`Enrolling in training module: ${moduleId}`);
    // Add your enrollment logic here
  }

  downloadResource(solutionId: string): void {
    // This would typically trigger a download
    console.log(`Downloading resource for: ${solutionId}`);
    // Add your download logic here
  }

  getIconClass(iconName: string): string {
    const iconMap: {[key: string]: string} = {
      'cloud-platform': 'fas fa-cloud',
      'erp-cloud': 'fas fa-building',
      'hr-cloud': 'fas fa-users',
      'expense-cloud': 'fas fa-receipt',
      'procurement-cloud': 'fas fa-shopping-cart',
      'analytics-cloud': 'fas fa-chart-line'
    };
    return iconMap[iconName] || 'fas fa-cloud';
  }

  getLevelBadgeClass(level: string): string {
    const levelMap: {[key: string]: string} = {
      'Beginner': 'badge-success',
      'Intermediate': 'badge-warning',
      'Advanced': 'badge-danger'
    };
    return levelMap[level] || 'badge-secondary';
  }
}