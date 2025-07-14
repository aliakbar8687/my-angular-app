import { Component } from '@angular/core';

@Component({
  selector: 'app-fullstack',
  standalone: false,
  templateUrl: './fullstack.component.html',
  styleUrls: ['./fullstack.component.scss']
})
export class FullstackComponent {
  highlights = [
    {
      icon: '🖥️',
      title: 'Front-End Mastery',
      description: 'Build responsive user interfaces with HTML5, CSS3, JavaScript, Angular, and React.'
    },
    {
      icon: '🗄️',
      title: 'Back-End Proficiency',
      description: 'Develop robust server logic using Node.js, Express, Java, or Python with database integration.'
    },
    {
      icon: '🧪',
      title: 'Project-Based Learning',
      description: 'Work on live applications, from e-commerce platforms to real-time dashboards.'
    },
    {
      icon: '🎓',
      title: 'Internship & Placement',
      description: 'Gain experience through Sayvaxia’s internship program and get career guidance for full-stack roles.'
    }
  ];
}
