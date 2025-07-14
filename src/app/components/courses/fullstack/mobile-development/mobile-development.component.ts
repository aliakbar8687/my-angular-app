import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-development',
  standalone: false,
  templateUrl: './mobile-development.component.html',
  styleUrl: './mobile-development.component.scss'
})
export class MobileDevelopmentComponent {
technologies = [
    'Android (Java & Kotlin)',
    'iOS (Swift)',
    'Flutter',
    'React Native',
    'Ionic Framework',
    'Firebase Integration',
    'Mobile UI/UX Design',
    'REST API Integration',
    'Push Notifications',
    'App Deployment (Play Store & App Store)'
  ];
}
