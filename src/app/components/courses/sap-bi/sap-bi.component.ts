import { Component, OnInit } from '@angular/core';

interface CourseModule {
  id: number;
  title: string;
  duration: string;
  topics: string[];
  completed: boolean;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

interface CourseStats {
  totalModules: number;
  completedModules: number;
  totalHours: number;
  progressPercentage: number;
}

@Component({
  selector: 'app-sap-bi',
  standalone: false,
  templateUrl: './sap-bi.component.html',
  styleUrls: ['./sap-bi.component.scss']
})
export class SapBiComponent implements OnInit {

  courseTitle = 'SAP Business Intelligence (BI) Complete Course';
  courseDescription = 'Master SAP BI tools and techniques to become a data analytics expert';

  courseModules: CourseModule[] = [
    {
      id: 1,
      title: 'Introduction to SAP BI',
      duration: '3 hours',
      topics: ['What is SAP BI?', 'BI Architecture', 'Key Components', 'Business Benefits'],
      completed: false,
      difficulty: 'Beginner'
    },
    {
      id: 2,
      title: 'SAP BW (Business Warehouse)',
      duration: '8 hours',
      topics: ['Data Modeling', 'InfoObjects', 'InfoCubes', 'DataStore Objects', 'Transformations'],
      completed: false,
      difficulty: 'Intermediate'
    },
    {
      id: 3,
      title: 'SAP BusinessObjects',
      duration: '6 hours',
      topics: ['Web Intelligence', 'Crystal Reports', 'Dashboard Design', 'Universe Designer'],
      completed: false,
      difficulty: 'Intermediate'
    },
    {
      id: 4,
      title: 'SAP Analytics Cloud',
      duration: '5 hours',
      topics: ['Planning & Analytics', 'Data Visualization', 'Predictive Analytics', 'Stories & Dashboards'],
      completed: false,
      difficulty: 'Advanced'
    },
    {
      id: 5,
      title: 'Data Extraction & ETL',
      duration: '4 hours',
      topics: ['Data Sources', 'Extraction Methods', 'Delta Loading', 'Process Chains'],
      completed: false,
      difficulty: 'Intermediate'
    },
    {
      id: 6,
      title: 'Reporting & Visualization',
      duration: '6 hours',
      topics: ['Report Design', 'KPI Creation', 'Interactive Dashboards', 'Mobile BI'],
      completed: false,
      difficulty: 'Advanced'
    }
  ];

  courseStats: CourseStats = {
    totalModules: 0,
    completedModules: 0,
    totalHours: 0,
    progressPercentage: 0
  };

  selectedModule: CourseModule | null = null;

  ngOnInit(): void {
    this.calculateCourseStats();
  }

  calculateCourseStats(): void {
    this.courseStats.totalModules = this.courseModules.length;
    this.courseStats.completedModules = this.courseModules.filter(m => m.completed).length;
    this.courseStats.totalHours = this.courseModules.reduce((total, module) => {
      return total + parseInt(module.duration);
    }, 0);
    this.courseStats.progressPercentage = Math.round(
      (this.courseStats.completedModules / this.courseStats.totalModules) * 100
    );
  }

  selectModule(module: CourseModule): void {
    this.selectedModule = module;
  }

  toggleModuleCompletion(module: CourseModule): void {
    module.completed = !module.completed;
    this.calculateCourseStats();
  }

  startModule(module: CourseModule): void {
    console.log(`Starting module: ${module.title}`);
    // Navigate to module content
  }

  getDifficultyClass(difficulty: string): string {
    return `difficulty-${difficulty.toLowerCase()}`;
  }

  getProgressWidth(): string {
    return `${this.courseStats.progressPercentage}%`;
  }
}