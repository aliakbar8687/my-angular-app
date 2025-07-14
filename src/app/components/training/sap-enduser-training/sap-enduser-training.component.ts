import { Component } from '@angular/core';

@Component({
  selector: 'app-sap-enduser-training',
  standalone: false,
  templateUrl: './sap-enduser-training.component.html',
  styleUrl: './sap-enduser-training.component.scss'
})
export class SapEnduserTrainingComponent {
modules = ['SAP FICO', 'SAP MM', 'SAP PP', 'SAP SD'];
}
