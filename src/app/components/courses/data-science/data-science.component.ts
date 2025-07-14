import { Component } from '@angular/core';

@Component({
  selector: 'app-data-science',
  standalone: false,
  templateUrl: './data-science.component.html',
  styleUrls: ['./data-science.component.scss']
})
export class DataScienceComponent {
  modules = [
    {
      icon: '📊',
      title: 'Core Concepts',
      description: 'Master statistics, linear algebra, and data wrangling — the building blocks of data science.'
    },
    {
      icon: '🧠',
      title: 'Machine Learning',
      description: 'Get hands-on with supervised/unsupervised learning, model training, and evaluation techniques.'
    },
    {
      icon: '🛠️',
      title: 'Tools & Platforms',
      description: 'Work with Python, R, SQL, Jupyter, Power BI, and cloud tools like AWS and Google Colab.'
    },
    {
      icon: '📈',
      title: 'Internship Ready',
      description: 'Apply your skills through Sayvaxia’s live internship program with industry-aligned projects.'
    }
  ];
}
