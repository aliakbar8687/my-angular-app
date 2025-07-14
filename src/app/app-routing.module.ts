// src/app/app-routing.module.ts - Fixed version
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { CoursesComponent } from './components/courses/courses.component';
import { TrainingCycleComponent } from './components/training-cycle/training-cycle.component';
import { PartnersComponent } from './components/partners/partners.component';
import { NewsComponent } from './components/news/news.component';

// Subitem components
import { StoryComponent } from './components/about/story/story.component';
import { TeamComponent } from './components/about/team/team.component';
import { MissionComponent } from './components/about/mission/mission.component';

import { WebDevComponent } from './components/courses/web-dev/web-dev.component';
import { CloudComponent } from './components/courses/cloud/cloud.component';
import { IotComponent } from './components/courses/iot/iot.component';
import { FullstackComponent } from './components/courses/fullstack/fullstack.component';
import { DataScienceComponent } from './components/courses/data-science/data-science.component';
import { CybersecurityComponent } from './components/courses/cybersecurity/cybersecurity.component';

import { CorporateComponent } from './components/training/corporate/corporate.component';
import { IndividualComponent } from './components/training/individual/individual.component';
import { OnlineComponent } from './components/training/online/online.component';

import { QuoteComponent } from './components/contact/quote/quote.component';
import { SupportComponent } from './components/contact/support/support.component';
import { CareersComponent } from './components/contact/careers/careers.component';

import { AnalyticsComponent } from './components/courses/analytics/analytics.component';
import { SapServiceComponent } from './components/courses/sap-service/sap-service.component';
import { SapCourseComponent } from './components/courses/sap-course/sap-course.component';
import { SapHanaComponent } from './components/courses/sap-course/sap-hana/sap-hana.component';
import { SapAbapComponent } from './components/courses/sap-course/sap-abap/sap-abap.component';
import { SapEnduserTrainingComponent } from './components/training/sap-enduser-training/sap-enduser-training.component';
import { SapInternshipComponent } from './components/training/sap-internship/sap-internship.component';
import { AiMlComponent } from './components/courses/ai-ml/ai-ml.component';
import { OurRecruiterComponent } from './components/services/our-recruiter/our-recruiter.component';
import { SapEventComponent } from './components/services/sap-event/sap-event.component';
import { SapProjectGoLiveComponent } from './components/services/sap-project-go-live/sap-project-go-live.component';
import { FinancialAccountingComponent } from './components/courses/sap-service/financial-accounting/financial-accounting.component';
import { ManagementAccountingComponent } from './components/courses/sap-service/management-accounting/management-accounting.component';
import { MaterialManagementComponent } from './components/courses/sap-service/material-management/material-management.component';
import { ProductionPlanningComponent } from './components/courses/sap-service/production-planning/production-planning.component';
import { SalesDistributionComponent } from './components/courses/sap-service/sales-distribution/sales-distribution.component';
import { HumanCapitalManagementComponent } from './components/courses/sap-service/human-capital-management/human-capital-management.component';
import { PlantMaintenanceComponent } from './components/courses/sap-service/plant-maintenance/plant-maintenance.component';
import { QualityManagementComponent } from './components/courses/sap-service/quality-management/quality-management.component';
import { WarehouseManagementComponent } from './components/courses/sap-service/warehouse-management/warehouse-management.component';
import { Terp10Component } from './components/courses/sap-service/terp-10/terp-10.component';
import { SapBiComponent } from './components/courses/sap-bi/sap-bi.component';
import { SapBiPlatformComponent } from './components/courses/sap-bi/sap-bi-platform/sap-bi-platform.component';
import { CrystalReportComponent } from './components/courses/sap-bi/crystal-report/crystal-report.component';
import { SapCloudsSolutionComponent } from './components/courses/sap-clouds-solution/sap-clouds-solution.component';
import { SuccessFactorComponent } from './components/courses/sap-clouds-solution/success-factor/success-factor.component';
import { MobileDevelopmentComponent } from './components/courses/fullstack/mobile-development/mobile-development.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsComponent } from './components/terms/terms.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'hero', component: HeroComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'training', component: TrainingCycleComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'news', component: NewsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms', component: TermsComponent },
  
  // About subpages
  { path: 'story', component: StoryComponent },
  { path: 'team', component: TeamComponent },
  { path: 'mission', component: MissionComponent },

  // SERVICE subpages
  { path: 'our-recruiter', component: OurRecruiterComponent },
  { path: 'sap-event', component: SapEventComponent },
  { path: 'sap-project-go-live', component: SapProjectGoLiveComponent },

  // Courses subpages
  { path: 'fullstack', component: FullstackComponent },
  { path: 'data-science', component: DataScienceComponent },
  { path: 'cybersecurity', component: CybersecurityComponent },
  { path: 'sap-course', component: SapCourseComponent },
  { path: 'sap-hana', component: SapHanaComponent },
  { path: 'sap-abap', component: SapAbapComponent },
  { path: 'web-dev', component: WebDevComponent },
  { path: 'sap-service', component: SapServiceComponent },
  { path: 'financial-accounting', component: FinancialAccountingComponent },
  { path: 'cloud', component: CloudComponent },
  { path: 'iot', component: IotComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'management-accounting', component: ManagementAccountingComponent },
  { path: 'material-management', component: MaterialManagementComponent },
  { path: 'production-planning', component: ProductionPlanningComponent },
  { path: 'sales-distribution', component: SalesDistributionComponent },
  { path: 'human-capital-management', component: HumanCapitalManagementComponent },
  { path: 'plant-maintenance', component: PlantMaintenanceComponent },
  { path: 'quality-management', component: QualityManagementComponent },
  { path: 'warehouse-management', component: WarehouseManagementComponent },
  { path: 'terp-10', component: Terp10Component },
  { path: 'sap-bi', component: SapBiComponent },
  { path: 'sap-bi-platform', component: SapBiPlatformComponent },
  { path: 'crystal-report', component: CrystalReportComponent },
  { path: 'sap-clouds-solution', component: SapCloudsSolutionComponent },
  { path: 'success-factor', component: SuccessFactorComponent },
  { path: 'mobile-development', component: MobileDevelopmentComponent },
  { path: 'sap-internship', component: SapInternshipComponent },

  // Training subpages
  { path: 'corporate', component: CorporateComponent },
  { path: 'individual', component: IndividualComponent },
  { path: 'online', component: OnlineComponent },
  { path: 'sap-enduser-training', component: SapEnduserTrainingComponent },
  { path: 'ai-ml', component: AiMlComponent },

  // Contact subpages
  { path: 'quote', component: QuoteComponent },
  { path: 'support', component: SupportComponent },
  { path: 'careers', component: CareersComponent },

  // Auth routes
  { path: 'login', component: LoginComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
   
  // Fixed wildcard route - should redirect to empty path, not component name
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}