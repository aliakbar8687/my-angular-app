import { Component } from '@angular/core';

@Component({
  selector: 'app-human-capital-management',
  standalone: false,
  templateUrl: './human-capital-management.component.html',
  styleUrl: './human-capital-management.component.scss'
})
export class HumanCapitalManagementComponent {
expanded: string | null = null;

  toggle(code: string) {
    this.expanded = this.expanded === code ? null : code;
  }

  // courses = [
  //   {
  //     code: 'SAP129',
  //     title: 'SAP Navigation (e-learning)',
  //     details: [
  //       'Logging on and off',
  //       'Understanding SAP screens, menus, and fields',
  //       'Recognizing SAP icons',
  //       'Using Application Help and SAP Library',
  //       'Setting up Favorites',
  //       'Understanding system messages',
  //       'Setting default values',
  //       'Navigating SAP reports',
  //       'Review simulations and knowledge tests'
  //     ]
  //   },
  //   { code: 'SM001E', title: 'Introduction to SAP Solution Manager (e-learning)', details: [] },
  //   { code: 'TERP01', title: 'SAP ERP: Introduction (e-learning)', details: [] },
  //   { code: 'TERP30', title: 'SAP ERP: Introduction to HCM (e-learning)', details: [] },
  //   { code: 'THR10', title: 'Management & Administration I (e-learning + handbook)', details: [] },
  //   { code: 'THR12', title: 'Management & Administration II (e-learning + handbook)', details: [] }
  // ];
}
