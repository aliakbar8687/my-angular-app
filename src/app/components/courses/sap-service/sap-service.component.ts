import { Component } from '@angular/core';

@Component({
  selector: 'app-sap-service',
  standalone: false,
  templateUrl: './sap-service.component.html',
  styleUrls: ['./sap-service.component.scss']
})
export class SapServiceComponent {
  sapServices = [
    {
      icon: '🛠️',
      title: 'SAP Implementation',
      description: 'End-to-end SAP system implementation for organizations of all sizes, from blueprint to go-live.'
    },
    {
      icon: '📘',
      title: 'SAP Training Programs',
      description: 'Expert-led training in SAP modules such as FICO, MM, SD, ABAP, HANA, and SuccessFactors.'
    },
    {
      icon: '🧩',
      title: 'Custom SAP Development',
      description: 'Tailored SAP solutions, module customization, and seamless third-party integrations.'
    },
    {
      icon: '🔍',
      title: 'SAP Consulting & Support',
      description: 'Advisory, migration, and post-deployment support to optimize your SAP landscape.'
    }
  ];
}
