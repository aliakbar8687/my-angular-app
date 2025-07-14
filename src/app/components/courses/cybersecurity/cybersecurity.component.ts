import { Component } from '@angular/core';

@Component({
  selector: 'app-cybersecurity',
  standalone: false,
  templateUrl: './cybersecurity.component.html',
  styleUrls: ['./cybersecurity.component.scss']
})
export class CybersecurityComponent {

imageCards = [
  {
    url: 'https://img.freepik.com/free-photo/malware-breaking-into-database-screen_482257-77676.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
    heading: 'Real-time Threat Detection',
    subtext: 'Simulate real-life cyber attacks.',
    cornerLabel: 'Labs'
  },
  {
    url: 'https://img.freepik.com/premium-vector/isometric-protection-network-security-safe-your-data-template_15115-7.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
    heading: 'Certified Mentors',
    subtext: 'Expert-led sessions and demos.',
    cornerLabel: 'Experts'
  },
  {
    url: 'https://img.freepik.com/free-photo/criminal-hacking-system-unsuccessfully_482257-77696.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
    heading: 'Project-Based Internship',
    subtext: 'Work on industry use cases.',
    cornerLabel: 'Internship'
  },
  {
    url: 'https://img.freepik.com/free-photo/fingerprint-biometric-authentication_23-2151967424.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
    heading: 'Ethical Hacking Practice',
    subtext: 'Hands-on labs in penetration testing.',
    cornerLabel: 'Red Team'
  },
  {
    url: 'https://img.freepik.com/free-photo/cybersecurity-concept-collage-design_23-2151877153.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
    heading: 'Network Defense Techniques',
    subtext: 'Master firewall, IDS/IPS configurations.',
    cornerLabel: 'Blue Team'
  },
  {
    url: 'https://img.freepik.com/premium-photo/cybersecurity-data-protection_666745-4350.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
    heading: 'Security Operations Center',
    subtext: 'Experience SOC workflows and alerts.',
    cornerLabel: 'SOC'
  },
  {
    url: 'https://img.freepik.com/free-photo/cybersecurity-concept-illustration_23-2151883593.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
    heading: 'Cyber Forensics',
    subtext: 'Trace digital footprints & recover evidence.',
    cornerLabel: 'Investigation'
  },
  {
    url: 'https://img.freepik.com/free-photo/cybersecurity-data-protection-concept-with-shield-laptop_23-2151967433.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
    heading: 'Secure Coding Practices',
    subtext: 'Write code resistant to exploits.',
    cornerLabel: 'DevSecOps'
  }
];



  highlights = [
    {
      icon: '🛡️',
      title: 'Hands-on Labs',
      description: 'Simulated threat environments, red/blue teaming, and real-world security breach scenarios.'
    },
    {
      icon: '🧠',
      title: 'Expert-Led Training',
      description: 'Learn from ethical hackers, cybersecurity analysts, and certified CISOs with real industry experience.'
    },
    {
      icon: '📜',
      title: 'Certifications & Internship',
      description: 'Earn Sayvaxia certification plus a 6–12 week internship with ongoing project exposure.'
    },
    {
      icon: '🚀',
      title: 'Career Path Guidance',
      description: 'Get clarity on roles like SOC Analyst, Pen Tester, GRC Consultant, and Security Engineer.'
    }
  ];
}
