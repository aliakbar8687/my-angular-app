import { Component } from '@angular/core';

@Component({
  selector: 'app-analytics',
  standalone: false,
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent {
  services = [
    {
      icon: '📈',
      title: 'Business Intelligence',
      description: 'Empower decision-making with dashboards, KPIs, and real-time data analysis.'
    },
    {
      icon: '📊',
      title: 'Data Visualization',
      description: 'Visualize data with powerful tools like Power BI, Tableau, and Google Data Studio.'
    },
    {
      icon: '🧠',
      title: 'Predictive Insights',
      description: 'Uncover trends and predict outcomes using advanced analytics and ML models.'
    },
    {
      icon: '💼',
      title: 'Consulting Services',
      description: 'Custom analytics strategies tailored to your organization’s goals and data ecosystem.'
    }
  ];
}
