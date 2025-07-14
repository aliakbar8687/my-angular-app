import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  standalone: false,
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent {
  supportServices = [
    {
      icon: '📚',
      title: 'Academic Mentorship',
      description: 'Get 1-on-1 guidance from SAP-certified mentors and trainers throughout your course journey.'
    },
    {
      icon: '🛠️',
      title: 'Technical Assistance',
      description: 'Our support team helps you troubleshoot SAP labs, tools, and simulation environments anytime.'
    },
    {
      icon: '🎯',
      title: 'Career Coaching',
      description: 'We provide resume reviews, mock interviews, and job placement support for SAP and analytics roles.'
    },
    {
      icon: '💬',
      title: 'Live Doubt Clearing',
      description: 'Join scheduled live sessions or raise tickets to clarify concepts directly with industry experts.'
    }
  ];
}
