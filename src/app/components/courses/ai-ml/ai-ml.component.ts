import { Component } from '@angular/core';

@Component({
  selector: 'app-ai-ml',
  standalone: false,
  templateUrl: './ai-ml.component.html',
  styleUrls: ['./ai-ml.component.scss']
})
export class AiMlComponent {
services = [
    {
      icon: '🤖',
      title: 'AI Model Development',
      description: 'Design and deploy intelligent models for real-world applications.'
    },
    {
      icon: '📊',
      title: 'Predictive Analytics',
      description: 'Forecast business trends using data-driven algorithms.'
    },
    {
      icon: '🔍',
      title: 'Computer Vision',
      description: 'From image classification to facial recognition with deep learning.'
    },
    {
      icon: '💬',
      title: 'Natural Language Processing',
      description: 'Build smart chatbots and engines to understand human language.'
    },
    {
      icon: '🧠',
      title: 'AI Consultation',
      description: 'Strategic support to architect and scale AI systems.'
    }
  ];

  images = [
    {
      url: 'https://img.freepik.com/free-vector/ai-machine-learning-template-vector-disruptive-technology-blog-banner_53876-112230.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
      title: 'Smart Algorithms',
      caption: 'Optimized to learn & adapt',
      cornerNote: 'AI Core'
    },
    {
      url: 'https://img.freepik.com/premium-photo/person-using-ai-tool-job_23-2150714247.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
      title: 'ML Models',
      caption: 'Trained with precision',
      cornerNote: 'ML Stack'
    },
    {
      url: 'https://img.freepik.com/premium-photo/futuristic-robot-artificial-intelligence-concept_31965-4087.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
      title: 'Automation',
      caption: 'Empowering enterprises',
      cornerNote: 'Robotics'
    }
  ];
}
