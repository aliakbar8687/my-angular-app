import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { CoursesComponent } from './components/courses/courses.component';
import { TrainingCycleComponent } from './components/training-cycle/training-cycle.component';
import { PartnersComponent } from './components/partners/partners.component';
import { NewsComponent } from './components/news/news.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './services/data.service';
import { NavigationService } from './services/navigation.service';
import { HomeComponent } from './components/home/home.component';
import { StoryComponent } from './components/about/story/story.component';
import { TeamComponent } from './components/about/team/team.component';
import { MissionComponent } from './components/about/mission/mission.component';
import { WebDevComponent } from './components/courses/web-dev/web-dev.component';
import { AnalyticsComponent } from './components/courses/analytics/analytics.component';
import { IotComponent } from './components/courses/iot/iot.component';
import { CloudComponent } from './components/courses/cloud/cloud.component';
import { DataScienceComponent } from './components/courses/data-science/data-science.component';
import { CybersecurityComponent } from './components/courses/cybersecurity/cybersecurity.component';
import { FullstackComponent } from './components/courses/fullstack/fullstack.component';
import { CorporateComponent } from './components/training/corporate/corporate.component';
import { IndividualComponent } from './components/training/individual/individual.component';
import { OnlineComponent } from './components/training/online/online.component';
import { QuoteComponent } from './components/contact/quote/quote.component';
import { SupportComponent } from './components/contact/support/support.component';
import { CareersComponent } from './components/contact/careers/careers.component';
import { SapCourseComponent } from './components/courses/sap-course/sap-course.component';
import { SapServiceComponent } from './components/courses/sap-service/sap-service.component';
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
import { DiscountModalComponent } from './components/discount-modal/discount-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnquiryComponent } from './components/enquiry/enquiry.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsComponent } from './components/terms/terms.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    CoursesComponent,
    TrainingCycleComponent,
    PartnersComponent,
    NewsComponent,
    FooterComponent,
    HomeComponent,
    StoryComponent,
    TeamComponent,
    MissionComponent,
    WebDevComponent,
    AnalyticsComponent,
    IotComponent,
    CloudComponent,
    DataScienceComponent,
    CybersecurityComponent,
    FullstackComponent,
    CorporateComponent,
    IndividualComponent,
    OnlineComponent,
    QuoteComponent,
    SupportComponent,
    CareersComponent,
    SapCourseComponent,
    SapServiceComponent,
    SapHanaComponent,
    SapAbapComponent,
    SapEnduserTrainingComponent,
    SapInternshipComponent,
    AiMlComponent,
    OurRecruiterComponent,
    SapEventComponent,
    SapProjectGoLiveComponent,
    FinancialAccountingComponent,
    ManagementAccountingComponent,
    MaterialManagementComponent,
    ProductionPlanningComponent,
    SalesDistributionComponent,
    HumanCapitalManagementComponent,
    PlantMaintenanceComponent,
    QualityManagementComponent,
    WarehouseManagementComponent,
    Terp10Component,
    SapBiComponent,
    SapBiPlatformComponent,
    CrystalReportComponent,
    SapCloudsSolutionComponent,
    SuccessFactorComponent,
    MobileDevelopmentComponent,
    DiscountModalComponent,
    EnquiryComponent,
    PrivacyPolicyComponent,
    TermsComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [
     DataService,
    NavigationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
