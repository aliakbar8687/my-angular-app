import { Component } from '@angular/core';

@Component({
  selector: 'app-careers',
  standalone: false,
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent {
  jobOpenings = [
    {
      title: 'SAP Functional Consultant',
      location: 'Dubai, UAE',
      type: 'Full-time',
      description: 'Lead implementation of SAP modules including FICO, MM, and SD. Collaborate with clients to translate business needs into functional requirements.'
    },
    {
      title: 'SAP ABAP Developer',
      location: 'Remote',
      type: 'Contract',
      description: 'Develop custom reports, forms, enhancements using ABAP and integrate with SAP Fiori/UI5 apps.'
    },
    {
      title: 'SAP Analytics Cloud Expert',
      location: 'Hybrid (Dubai / Remote)',
      type: 'Full-time',
      description: 'Design dashboards and analytical models using SAP Analytics Cloud (SAC). Deliver actionable insights for enterprise clients.'
    },
    {
      title: 'Data Analyst – SAP BI/BW',
      location: 'Abu Dhabi, UAE',
      type: 'Full-time',
      description: 'Work with SAP BW on HANA and SAP BI tools to deliver data-driven insights and decision support systems.'
    }
  ];
}
