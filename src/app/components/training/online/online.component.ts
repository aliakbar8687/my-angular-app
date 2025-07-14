import { Component } from '@angular/core';

@Component({
  selector: 'app-online',
  standalone: false,
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.scss']
})
export class OnlineComponent {
  highlights = [
    {
      icon: '💡',
      title: 'Comprehensive E-Learning',
      description: 'Self-paced content with slide notes, audio, simulations, and expert tips.'
    },
    {
      icon: '🧪',
      title: 'SAP Training Systems',
      description: 'Hands-on practice on live SAP systems to reinforce your learning.'
    },
    {
      icon: '🆘',
      title: 'Help Desk Support',
      description: 'Get answers to technical and learning queries within 24 hours (Mon-Fri).'
    },
    {
      icon: '📘',
      title: 'Student Manuals',
      description: 'Access to electronic versions of official SAP course manuals.'
    }
  ];

  modules = {
    functional: ['SAP FI – FINANCE', 'SAP CO – CONTROLLING', 'SAP SD – SALES & DISTRIBUTION', 'SAP HR – HUMAN RESOURCE', 'SAP MM – MATERIAL MANAGEMENT', 'SAP PP – PRODUCTION PLANNING', 'SAP TERP'],
    technical: ['SAP ABAP/4', 'SAP BI – BUSINESS INTELLIGENCE']
  };
}
