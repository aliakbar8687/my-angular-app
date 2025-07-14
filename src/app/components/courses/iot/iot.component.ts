import { Component } from '@angular/core';

@Component({
  selector: 'app-iot',
  standalone: false,
  templateUrl: './iot.component.html',
  styleUrls: ['./iot.component.scss']
})
export class IotComponent {
  services = [
    {
      icon: '📡',
      title: 'IoT System Design',
      description: 'Architect secure and scalable IoT systems tailored for industrial, smart home, and smart city applications.'
    },
    {
      icon: '🔧',
      title: 'Hands-on IoT Training',
      description: 'Learn IoT development with real hardware kits, Raspberry Pi, Arduino, and cloud integrations.'
    },
    {
      icon: '📊',
      title: 'Sensor Data Analytics',
      description: 'Collect, stream, and analyze sensor data in real-time to power intelligent dashboards and automation.'
    },
    {
      icon: '🔒',
      title: 'IoT Security & Deployment',
      description: 'Implement secure device provisioning, firmware updates, and edge-to-cloud encryption.'
    }
  ];
}
