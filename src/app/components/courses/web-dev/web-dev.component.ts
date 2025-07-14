import { Component } from '@angular/core';

@Component({
  selector: 'app-web-dev',
  standalone: false,
  templateUrl: './web-dev.component.html',
  styleUrls: ['./web-dev.component.scss']
})
export class WebDevComponent {
  images = [
  // {
  //   url: 'https://img.freepik.com/free-vector/flat-design-responsive-website-design_23-2149488182.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
  //   title: 'Responsive Design',
  //   caption: 'Learn how to build mobile-first responsive UIs.',
  //   cornerNote: 'Live Projects'
  // },
  {
    url: 'https://img.freepik.com/free-photo/person-working-html-computer_23-2150038859.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
    title: 'Backend Mastery',
    caption: 'Node.js, Python, and Express fundamentals.',
    cornerNote: 'APIs & Auth'
  },
  {
    url: 'https://img.freepik.com/premium-photo/medium-shot-man-working-laptop_23-2150323506.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
    title: 'Full-Stack Integration',
    caption: 'Combine frontend & backend for full solutions.',
    cornerNote: 'Stack Power'
  }
];

  webDevServices = [
    {
      icon: '💻',
      title: 'Frontend Development',
      description: 'Crafting intuitive, responsive interfaces using Angular, React, HTML, CSS, and Tailwind.'
    },
    {
      icon: '🧠',
      title: 'Backend Engineering',
      description: 'Scalable, secure APIs and backend systems with Node.js, Python, Java, and PHP.'
    },
    {
      icon: '🛒',
      title: 'E-Commerce & CMS',
      description: 'Custom Shopify, WordPress, Magento, and Headless CMS implementations.'
    },
    {
      icon: '🚀',
      title: 'Full-Stack Projects',
      description: 'End-to-end web apps with modern stacks like MERN, MEAN, and JAMstack.'
    }
  ];
}
