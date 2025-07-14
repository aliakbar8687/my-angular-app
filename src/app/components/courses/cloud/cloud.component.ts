import { Component } from '@angular/core';

@Component({
  selector: 'app-cloud',
  standalone: false,
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.scss']
})
export class CloudComponent {
services = [
  {
    icon: '☁️',
    title: 'Cloud Migration',
    description: 'Seamlessly transition your applications, workloads, and data from on-premise environments to modern cloud platforms like AWS, Azure, or GCP. We ensure minimal downtime, data integrity, and optimized performance throughout the migration process.',
    imageUrl: 'https://img.freepik.com/free-photo/technology-integrated-everyday-life_23-2151887047.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740'
  },
  {
    icon: '🔐',
    title: 'Cloud Security',
    description: 'Implement robust, scalable, and compliant security frameworks across your cloud infrastructure. Our services include threat detection, identity and access management, data encryption, firewall configuration, and continuous monitoring for maximum protection.',
    imageUrl: 'https://img.freepik.com/premium-photo/digital-technology-landscape-computer-engineer-focuses-laptop-computer-while-surrounded-by-data-center-big-data-storage-discover-power-internet-cloud-network-technology_143683-14748.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740'
  },
  {
    icon: '⚙️',
    title: 'DevOps & Automation',
    description: 'Streamline your software development lifecycle through powerful DevOps practices. We set up and manage CI/CD pipelines using tools like Kubernetes, Docker, Jenkins, and Terraform, enabling faster deployments, automated testing, and improved system reliability.',
    imageUrl: 'https://img.freepik.com/premium-photo/cloud-computing-technology-online-data-storage-business-network-concept_31965-15300.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740'
  },
  {
    icon: '📦',
    title: 'Cloud Consulting',
    description: 'Receive strategic guidance from certified cloud experts to design, build, and manage efficient cloud infrastructures. We help optimize your cloud costs, assess your current architecture, and align your cloud strategy with business goals for maximum ROI.',
    imageUrl: 'https://img.freepik.com/free-photo/cybersecurity-concept-illustration_23-2151883575.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740'
  }
];

}
