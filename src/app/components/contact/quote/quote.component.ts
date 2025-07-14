import { Component } from '@angular/core';

@Component({
  selector: 'app-quote',
  standalone: false,
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {
 quotes = [
    {
      text: `"Looking to streamline your operations with SAP? Syvaxia is your trusted partner for scalable, future-ready solutions."`,
      author: 'Syvaxia Team',
      context: 'Get in Touch'
    },
    {
      text: `"With Syvaxia, we received more than just a quote — we received clarity, commitment, and a roadmap for digital success."`,
      author: 'Aarav Malhotra',
      context: 'Client Testimonial — Manufacturing Sector'
    },
    {
      text: `"Syvaxia brought strategy, execution, and support all under one roof. Their quote came with vision and value."`,
      author: 'David Zhang',
      context: 'Enterprise Client — Digital Transformation'
    },
    {
      text: `"Request your quote today — Syvaxia helps unlock the full power of SAP for your business growth."`,
      author: 'Syvaxia Engagement Desk',
      context: 'Let’s Talk'
    }
  ];

}
