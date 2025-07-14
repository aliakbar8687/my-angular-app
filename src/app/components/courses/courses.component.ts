import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-courses',
  standalone: false,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  displayedCourses: Course[] = [];
  selectedCategory: string = 'all';
  currentPage: number = 1;
  coursesPerPage: number = 3; // 2 courses per row (2 books)
  currentSlide: number = 0;
  expandedCard: number | null = null; // Track which card is expanded

  // Statistics with animated counters
  totalCourses: number = 150;
  totalStudents: number = 5000;
  totalInstructors: number = 25;
  completionRate: number = 94;
  
  // Counter animations
  animatedTotalCourses: number = 0;
  animatedTotalStudents: number = 0;
  animatedTotalInstructors: number = 0;
  animatedCompletionRate: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.loadCourses();
    this.filteredCourses = this.courses;
    this.updateDisplayedCourses();
    // Delay animation to ensure component is fully loaded
    setTimeout(() => {
      this.animateCounters();
    }, 500);
  }

  loadCourses(): void {
    // Updated courses data with instructor information and all required properties
    this.courses = [
      {
        id: 1,
        title: 'SAP Financial Accounting (FICO)',
        description: 'Master SAP FICO module with comprehensive training on financial processes and accounting. Learn to handle financial transactions, create financial reports, and manage accounting processes efficiently. This course covers all aspects of financial accounting including general ledger, accounts payable, accounts receivable, and asset accounting.',
        category: 'sap-erp',
        level: 'Intermediate',
        duration: '8 weeks',
        image: 'assets/images/SAP Financial Accounting (FICO).jpg',
        rating: 4.8,
        reviews: 234,
        students: 1250,
        instructorName: 'Dr. Rajesh Kumar',
        instructorImage: 'https://media.istockphoto.com/id/2160473960/photo/happy-satisfied-math-teacher-in-elementary-class.jpg?s=612x612&w=0&k=20&c=zaosJRQ0l2dBIjy-DLc5wAFdONtg-_78Q-FIzxjjIoo=',
        features: ['Live Projects', 'Certification', 'Job Support', 'Expert Guidance', 'Real-time Scenarios', 'Interview Preparation'],
        isPopular: true,
        isNew: false
      },
      {
        id: 2,
        title: 'SAP Material Management (MM)',
        description: 'Learn procurement processes, inventory management, and vendor management in SAP MM. Understand purchase orders, goods receipt, and invoice verification processes. Cover material requirements planning, vendor evaluation, and procurement cycle management.',
        category: 'sap-erp',
        level: 'Beginner',
        duration: '6 weeks',
        image: 'https://admin.ducatindia.com/tutorial/technology/1715000293724SAP%20MM.png',
        rating: 4.7,
        reviews: 189,
        students: 850,
        instructorName: 'Priya Sharma',
        instructorImage: 'https://media.istockphoto.com/id/1310208267/photo/portrait-of-indian-woman-as-a-teacher-in-sari-standing-isolated-over-white-background-stock.jpg?s=612x612&w=0&k=20&c=UpkNhqazjP4CNvndwC_Qus1SwAEc1ogPOGpIDmWd4bk=',
        features: ['Hands-on Training', 'Real-time Projects', 'Industry Expert', 'Practical Labs', 'Case Studies', 'Best Practices'],
        isPopular: false,
        isNew: false
      },
      {
        id: 3,
        title: 'SAP S/4 HANA Financial Accounting',
        description: 'Advanced S/4 HANA finance module covering new functionalities and simplified processes. Experience the next-generation ERP with in-memory computing capabilities. Learn about universal journal, central finance, and embedded analytics.',
        category: 'sap-s4hana',
        level: 'Advanced',
        duration: '10 weeks',
        image: 'assets/images/SAP S4 HANA Financial Accounting.jpg',
        rating: 4.9,
        reviews: 156,
        students: 620,
        instructorName: 'Michael Chen',
        instructorImage: 'https://img.freepik.com/free-photo/portrait-professor-work-educational-system_23-2151737187.jpg?semt=ais_hybrid&w=740',
        features: ['Latest Version', 'Cloud Integration', 'Migration Training', 'Future-Ready Skills', 'Fiori Apps', 'Analytics'],
        isPopular: false,
        isNew: true
      },
      {
        id: 4,
        title: 'SAP BI Platform',
        description: 'Business Intelligence platform training covering reporting, dashboards, and analytics. Create meaningful insights from data with powerful visualization tools. Master Web Intelligence, Crystal Reports, and Dashboard Builder.',
        category: 'sap-bi',
        level: 'Intermediate',
        duration: '7 weeks',
        image: 'assets/images/SAP BI Platform.jpg',
        rating: 4.6,
        reviews: 298,
        students: 1420,
        instructorName: 'Sarah Johnson',
        instructorImage: 'https://img.freepik.com/free-photo/smiley-teacher-holding-tablet_23-2148668619.jpg?semt=ais_hybrid&w=740',
        features: ['Reporting Tools', 'Dashboard Creation', 'Data Visualization', 'Analytics', 'Universe Design', 'Performance Optimization'],
        isPopular: false,
        isNew: false
      },
      {
        id: 5,
        title: 'Full Stack Web Development',
        description: 'Complete web development course covering frontend and backend technologies. Build modern, responsive web applications using the latest frameworks and tools. Learn HTML5, CSS3, JavaScript, React, Node.js, and database management.',
        category: 'fullstack',
        level: 'Intermediate',
        duration: '12 weeks',
        image: 'assets/images/Full Stack Web Development.jpg',
        rating: 4.8,
        reviews: 445,
        students: 1850,
        instructorName: 'Alex Rodriguez',
        instructorImage: 'https://plus.unsplash.com/premium_photo-1661297460381-f75b8ae69a0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29ycG9yYXRlJTIwbWFufGVufDB8fDB8fHww',
        features: ['React & Angular', 'Node.js', 'Database Design', 'Modern Frameworks', 'API Development', 'DevOps Basics'],
        isPopular: true,
        isNew: false
      },
      {
        id: 6,
        title: 'Data Science & Analytics',
        description: 'Comprehensive data science training with Python, R, and machine learning algorithms. Transform raw data into actionable business insights. Cover statistical analysis, data visualization, and predictive modeling.',
        category: 'data-science',
        level: 'Advanced',
        duration: '14 weeks',
        image: 'https://techamdavad.com/web/image/product.template/44/image_1024?unique=896f236',
        rating: 4.7,
        reviews: 324,
        students: 980,
        instructorName: 'Dr. Emily Watson',
        instructorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ycG9yYXRlJTIwd29tYW58ZW58MHx8MHx8fDA%3D',
        features: ['Python & R', 'Machine Learning', 'Real Projects', 'Statistical Analysis', 'Deep Learning', 'Big Data Tools'],
        isPopular: false,
        isNew: false
      },
      {
        id: 7,
        title: 'Cybersecurity Fundamentals',
        description: 'Essential cybersecurity concepts, threat analysis, and security implementation strategies. Protect organizations from evolving cyber threats. Learn about network security, ethical hacking, and compliance frameworks.',
        category: 'cybersecurity',
        level: 'Intermediate',
        duration: '9 weeks',
        image: 'https://stg-uploads.slidenest.com/template_2696/templateColor_2584/previewImages/cybersecurity-fundamentals-powerpoint-google-slides-keynote-presentation-template-1.jpg',
        rating: 4.8,
        reviews: 267,
        students: 756,
        instructorName: 'David Kim',
        instructorImage: 'https://plus.unsplash.com/premium_photo-1682092105693-1a2566cf2ee1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29ycG9yYXRlJTIwbWFuJTIwaW5kaWFufGVufDB8fDB8fHww',
        features: ['Ethical Hacking', 'Network Security', 'Compliance', 'Risk Assessment', 'Incident Response', 'Security Tools'],
        isPopular: false,
        isNew: false
      },
      {
        id: 8,
        title: 'Cloud Solutions Architecture',
        description: 'Master cloud platforms including AWS, Azure, and Google Cloud architecture. Design scalable and resilient cloud-native applications. Learn about microservices, containerization, and serverless computing.',
        category: 'cloud',
        level: 'Advanced',
        duration: '11 weeks',
        image: 'https://www.tatvasoft.com/blog/wp-content/uploads/2014/10/cloud-computing-architecture-1-1280x720.jpg',
        rating: 4.9,
        reviews: 198,
        students: 543,
        instructorName: 'Jennifer Liu',
        instructorImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29ycG9yYXRlJTIwd29tYW58ZW58MHx8MHx8fDA%3D',
        features: ['Multi-Cloud', 'DevOps Integration', 'Scalability', 'Best Practices', 'Containerization', 'Serverless'],
        isPopular: false,
        isNew: true
      },
       {
      id: 9,
      title: 'SAP Management Accounting (CO)',
      description: 'Understand internal reporting, controlling, and cost analysis in SAP CO. Learn cost centers, internal orders, and profitability analysis.',
      category: 'sap-erp',
      level: 'Intermediate',
      duration: '6 weeks',
      image: 'assets/images/management-accounting.jpg',
      rating: 4.6,
      reviews: 132,
      students: 510,
      instructorName: 'Neha Bansal',
      instructorImage: 'https://randomuser.me/api/portraits/women/45.jpg',
      features: ['Cost Center Accounting', 'Internal Orders', 'Profitability Analysis'],
      isPopular: false,
      isNew: false
    },

    // 10. Production Planning
    {
      id: 10,
      title: 'SAP Production Planning (PP)',
      description: 'Master the SAP PP module to manage manufacturing processes, BOM, and work centers. Optimize production schedules and material planning.',
      category: 'sap-erp',
      level: 'Intermediate',
      duration: '7 weeks',
      image: 'assets/images/production-planning.jpg',
      rating: 4.5,
      reviews: 120,
      students: 450,
      instructorName: 'Amit Verma',
      instructorImage: 'https://randomuser.me/api/portraits/men/33.jpg',
      features: ['BOM Management', 'MRP', 'Shop Floor Control'],
      isPopular: false,
      isNew: false
    },

    // 11. Sales & Distribution
    {
      id: 11,
      title: 'SAP Sales and Distribution (SD)',
      description: 'Learn SAP SD module to manage customer orders, shipping, billing, and pricing. Handle sales processes efficiently.',
      category: 'sap-erp',
      level: 'Beginner',
      duration: '6 weeks',
      image: 'assets/images/sales-distribution.jpg',
      rating: 4.7,
      reviews: 180,
      students: 640,
      instructorName: 'Ritika Sharma',
      instructorImage: 'https://randomuser.me/api/portraits/women/65.jpg',
      features: ['Order Management', 'Billing', 'Shipping', 'Customer Master'],
      isPopular: false,
      isNew: true
    },

    // 12. Human Capital Management
    {
      id: 12,
      title: 'SAP Human Capital Management (HCM)',
      description: 'Manage employee lifecycle, payroll, and time tracking in SAP HCM. Learn organizational management and HR reporting.',
      category: 'sap-erp',
      level: 'Intermediate',
      duration: '8 weeks',
      image: 'assets/images/hcm.jpg',
      rating: 4.8,
      reviews: 210,
      students: 720,
      instructorName: 'Sunita Mehra',
      instructorImage: 'https://randomuser.me/api/portraits/women/50.jpg',
      features: ['Organizational Mgmt', 'Payroll', 'Time Management'],
      isPopular: false,
      isNew: false
    },

    // 13. SAP ABAP
    {
      id: 13,
      title: 'SAP ABAP Programming',
      description: 'Learn ABAP/4 programming language to develop custom SAP applications and reports. Explore modularization, reports, and debugging.',
      category: 'sap-erp',
      level: 'Advanced',
      duration: '10 weeks',
      image: 'assets/images/sap-abap.jpg',
      rating: 4.9,
      reviews: 265,
      students: 900,
      instructorName: 'Rajeev Thakur',
      instructorImage: 'https://randomuser.me/api/portraits/men/44.jpg',
      features: ['Modularization', 'ALV Reports', 'BAPI & BADI'],
      isPopular: true,
      isNew: false
    },

    // 14. Plant Maintenance
    {
      id: 14,
      title: 'SAP Plant Maintenance (PM)',
      description: 'Understand maintenance planning, task lists, and breakdown management in SAP PM.',
      category: 'sap-erp',
      level: 'Intermediate',
      duration: '6 weeks',
      image: 'assets/images/plant-maintenance.jpg',
      rating: 4.6,
      reviews: 140,
      students: 520,
      instructorName: 'Prakash Jha',
      instructorImage: 'https://randomuser.me/api/portraits/men/46.jpg',
      features: ['Notifications', 'Preventive Maintenance', 'Breakdown Mgmt'],
      isPopular: false,
      isNew: false
    },

    // 15. Quality Management
    {
      id: 15,
      title: 'SAP Quality Management (QM)',
      description: 'Control product quality with inspection, audit, and certification tools in SAP QM.',
      category: 'sap-erp',
      level: 'Intermediate',
      duration: '5 weeks',
      image: 'assets/images/quality-management.jpg',
      rating: 4.5,
      reviews: 100,
      students: 400,
      instructorName: 'Meena Soni',
      instructorImage: 'https://randomuser.me/api/portraits/women/67.jpg',
      features: ['Inspection Planning', 'Quality Certificates', 'Quality Notifications'],
      isPopular: false,
      isNew: true
    },

    // 16. Warehouse Management
    {
      id: 16,
      title: 'SAP Warehouse Management (WM)',
      description: 'Streamline inventory tracking, bin management, and warehouse activities using SAP WM.',
      category: 'sap-erp',
      level: 'Intermediate',
      duration: '6 weeks',
      image: 'assets/images/warehouse.jpg',
      rating: 4.7,
      reviews: 115,
      students: 410,
      instructorName: 'Vikas Malhotra',
      instructorImage: 'https://randomuser.me/api/portraits/men/70.jpg',
      features: ['Bin Mgmt', 'Transfer Orders', 'Inventory Control'],
      isPopular: false,
      isNew: false
    },

    // 17. TERP 10
    // {
    //   id: 17,
    //   title: 'SAP TERP 10 Certification',
    //   description: 'Comprehensive SAP TERP10 overview with cross-functional integration of all SAP modules.',
    //   category: 'sap-erp',
    //   level: 'Beginner',
    //   duration: '8 weeks',
    //   image: 'assets/images/terp10.jpg',
    //   rating: 4.8,
    //   reviews: 175,
    //   students: 500,
    //   instructorName: 'Rohit Sinha',
    //   instructorImage: 'https://randomuser.me/api/portraits/men/71.jpg',
    //   features: ['Module Overview', 'Cross Integration', 'End-to-End Scenarios'],
    //   isPopular: true,
    //   isNew: true
    // },

    // 18. Crystal Report
    {
      id: 18,
      title: 'SAP Crystal Reports',
      description: 'Design interactive, powerful reports with SAP Crystal Reports. Learn data connection, formatting, and delivery.',
      category: 'sap-bi',
      level: 'Intermediate',
      duration: '5 weeks',
      image: 'assets/images/crystal-report.jpg',
      rating: 4.6,
      reviews: 130,
      students: 380,
      instructorName: 'Sneha Kapoor',
      instructorImage: 'https://randomuser.me/api/portraits/women/60.jpg',
      features: ['Report Design', 'Formulas', 'Data Export'],
      isPopular: false,
      isNew: false
    },

    // 19. Success Factor Training
    {
      id: 19,
      title: 'SAP SuccessFactors Training',
      description: 'Master cloud-based HR management with SAP SuccessFactors. Learn talent management, recruiting, and onboarding modules.',
      category: 'sap-clouds-solution',
      level: 'Intermediate',
      duration: '7 weeks',
      image: 'assets/images/success-factor.jpg',
      rating: 4.7,
      reviews: 190,
      students: 430,
      instructorName: 'Tanvi Arora',
      instructorImage: 'https://randomuser.me/api/portraits/women/58.jpg',
      features: ['Employee Central', 'Recruitment', 'Goal Mgmt'],
      isPopular: false,
      isNew: true
    },

    // 20. Mobile Development
    {
      id: 20,
      title: 'Mobile App Development',
      description: 'Build modern iOS and Android apps using Flutter, React Native, and native SDKs.',
      category: 'fullstack',
      level: 'Intermediate',
      duration: '10 weeks',
      image: 'assets/images/mobile-development.jpg',
      rating: 4.8,
      reviews: 220,
      students: 720,
      instructorName: 'Arjun Patel',
      instructorImage: 'https://randomuser.me/api/portraits/men/80.jpg',
      features: ['Flutter', 'React Native', 'UI/UX Design', 'APIs'],
      isPopular: true,
      isNew: false
    },

    // 21. AI & ML
    {
      id: 21,
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Dive into AI algorithms, model training, and deep learning concepts using TensorFlow and PyTorch.',
      category: 'data-science',
      level: 'Advanced',
      duration: '12 weeks',
      image: 'assets/images/ai-ml.jpg',
      rating: 4.9,
      reviews: 310,
      students: 860,
      instructorName: 'Dr. Naveen Reddy',
      instructorImage: 'https://randomuser.me/api/portraits/men/61.jpg',
      features: ['Neural Networks', 'Deep Learning', 'NLP', 'Model Deployment'],
      isPopular: true,
      isNew: true
    },

    // 22. IoT Development
    {
      id: 22,
      title: 'IoT Development & Integration',
      description: 'Design and implement smart systems with sensors, microcontrollers, and cloud-based dashboards using IoT protocols.',
      category: 'iot',
      level: 'Intermediate',
      duration: '8 weeks',
      image: 'assets/images/iot-course.jpg',
      rating: 4.6,
      reviews: 150,
      students: 500,
      instructorName: 'Kiran Joshi',
      instructorImage: 'https://randomuser.me/api/portraits/men/52.jpg',
      features: ['MQTT', 'ESP32/Arduino', 'Sensor Integration', 'IoT Cloud'],
      isPopular: false,
      isNew: false
    }
  ];
}
  

  updateDisplayedCourses(): void {
    const endIndex = this.currentPage * this.coursesPerPage;
    this.displayedCourses = this.filteredCourses.slice(0, endIndex);
  }

  getStarArray(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i + 1);
  }

  getShortDescription(description: string): string {
    // Return first 120 characters with ellipsis if longer
    if (description.length <= 120) {
      return description;
    }
    return description.substring(0, 120) + '...';
  }

  toggleCardExpansion(index: number): void {
    // Toggle the expanded state
    this.expandedCard = this.expandedCard === index ? null : index;
  }

  enrollInCourse(courseId: number): void {
    console.log(`Enrolling in course with ID: ${courseId}`);
    // Add your enrollment logic here
    // For example: navigate to enrollment form, open modal, or call API
    const course = this.courses.find(c => c.id === courseId);
    if (course) {
      console.log(`Enrolling in: ${course.title}`);
      // You can add navigation logic here:
      // this.router.navigate(['/enroll', courseId]);
      // Or open a modal, show a form, etc.
    }
  }

  loadMoreCourses(): void {
    this.currentPage++;
    this.updateDisplayedCourses();
  }

  hasMoreCourses(): boolean {
    return this.displayedCourses.length < this.filteredCourses.length;
  }

  // Counter animation from 0 to target value
  animateCounters(): void {
    this.animateCounter('totalCourses', this.totalCourses, 2000);
    this.animateCounter('totalStudents', this.totalStudents, 2500);
    this.animateCounter('totalInstructors', this.totalInstructors, 1500);
    this.animateCounter('completionRate', this.completionRate, 2200);
  }

  animateCounter(property: string, target: number, duration: number): void {
    const start = 0;
    const startTime = performance.now();
    
    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(start + (target - start) * easeOutQuart);
      
      switch(property) {
        case 'totalCourses':
          this.animatedTotalCourses = current;
          break;
        case 'totalStudents':
          this.animatedTotalStudents = current;
          break;
        case 'totalInstructors':
          this.animatedTotalInstructors = current;
          break;
        case 'completionRate':
          this.animatedCompletionRate = current;
          break;
      }
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };
    
    requestAnimationFrame(updateCounter);
  }

  contactUs(): void {
    console.log('Contacting us - Contact button clicked');
    // Add your contact logic here
    // For example: navigate to contact form or open modal
  }
}