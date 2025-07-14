import { Component } from '@angular/core';

interface EventImage {
  src: string;
  caption: string;
  description: string;
  date: string;
  category: string;
  layout: 'wide' | 'tall' | 'square';
}

@Component({
  selector: 'app-sap-event',
  standalone: false,
  templateUrl: './sap-event.component.html',
  styleUrl: './sap-event.component.scss'
})
export class SapEventComponent {
  eventImages: EventImage[] = [
    { 
      src: 'https://media.licdn.com/dms/image/v2/D4D22AQH5z2wzU-xhGg/feedshare-shrink_2048_1536/B4DZY6uXHKHwAo-/0/1744741957200?e=1752710400&v=beta&t=LKMuRaT-5TBo5D4BqD0uoSPo3J1KTjkCCLbzLFyV4Qk', 
      caption: 'SAP Workshop 2024', 
      description: 'Comprehensive hands-on workshop covering latest SAP technologies and best practices',
      date: 'March 15, 2024',
      category: 'Workshop',
      layout: 'wide' 
    },
    { 
      src: 'https://media.licdn.com/dms/image/v2/D4D22AQFr1DiBDLVUhw/feedshare-shrink_1280/B4DZZHxYPPG8Ak-/0/1744960864627?e=1752710400&v=beta&t=28QkiObcY83ptfSc8EYiZQ63SAa-7iuDFvj4dFWJuBg', 
      caption: 'Certification Ceremony', 
      description: 'Celebrating our successful graduates who achieved SAP certification',
      date: 'February 28, 2024',
      category: 'Certification',
      layout: 'tall' 
    },
    { 
      src: 'https://media.licdn.com/dms/image/v2/D4D22AQH3qhjvGbScFA/feedshare-shrink_2048_1536/B4DZWYavtTG8Ao-/0/1742018909515?e=1752710400&v=beta&t=dp_BEUFGMdAdvoNOoKiTryqndevUhuE-1lDASPq8WG4', 
      caption: 'Corporate Training', 
      description: 'Enterprise-level SAP training session for corporate clients',
      date: 'January 20, 2024',
      category: 'Training',
      layout: 'square' 
    },
    { 
      src: 'https://media.licdn.com/dms/image/v2/D5622AQFSTMdUyAScOA/feedshare-shrink_1280/B56ZUaa9juGQAo-/0/1739905031747?e=1752710400&v=beta&t=tAmjA1KECJ5URYuk1VZIgTe50u0RaQXYY0C2gx6yFG4', 
      caption: 'Internship Kickoff', 
      description: 'Welcome session for new interns joining our SAP training program',
      date: 'December 10, 2023',
      category: 'Internship',
      layout: 'wide' 
    },
    { 
      src: 'https://media.licdn.com/dms/image/v2/D4D22AQEy8yNNp8neBA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1733745387527?e=1753315200&v=beta&t=f45ZYVvkrCf-6pGvnOeXPJHX6HQh9xK2awhjhjxtOKc', 
      caption: 'Hands-on Session', 
      description: 'Interactive practical session with real SAP system implementations',
      date: 'November 25, 2023',
      category: 'Practical',
      layout: 'tall' 
    }
  ];

  // Additional images for load more functionality
  private additionalImages: EventImage[] = [
    {
      src: 'https://media.licdn.com/dms/image/v2/D4D22AQGbve_OmxQahQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1733745391953?e=1753315200&v=beta&t=fc6iwjvcc21LwigvHwbryIcOjfbwaO2P7TTvi1rF0tQ',
      caption: 'SAP Bootcamp 2023',
      description: 'Intensive 3-day bootcamp covering SAP fundamentals',
      date: 'October 15, 2023',
      category: 'Bootcamp',
      layout: 'square'
    },
    {
      src: 'https://media.licdn.com/dms/image/v2/D4D22AQHUlkFk8sr03Q/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1733745388784?e=1753315200&v=beta&t=UnmWKOkvKLGkQosdlA4-tfyOznm1XcOKj3zt1Xg2KGI',
      caption: 'Advanced Analytics Workshop',
      description: 'Deep dive into SAP Analytics Cloud and reporting tools',
      date: 'September 30, 2023',
      category: 'Analytics',
      layout: 'wide'
    },
    {
      src: 'https://media.licdn.com/dms/image/v2/D4D22AQGMbEuGw8hxew/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1733745381766?e=1753315200&v=beta&t=n4wgq7y03teoaU4vdenuv9JdjYadMof3sFhQAyDeqCc',
      caption: 'Success Stories Session',
      description: 'Alumni sharing their career transformation stories',
      date: 'August 18, 2023',
      category: 'Success',
      layout: 'tall'
    }
  ];

  /**
   * Load more images from the additional images array
   */
  loadMoreImages(): void {
    // Add 3 more images at a time to prevent overwhelming the UI
    const imagesToAdd = this.additionalImages.splice(0, 3);
    this.eventImages.push(...imagesToAdd);
    
    // Optional: Show a message if no more images to load
    if (this.additionalImages.length === 0) {
      console.log('No more images to load');
      // You could also disable the load more button or show a message
    }
  }

  /**
   * Check if there are more images to load
   */
  hasMoreImages(): boolean {
    return this.additionalImages.length > 0;
  }

  /**
   * Get the total number of available images
   */
  getTotalImagesCount(): number {
    return this.eventImages.length + this.additionalImages.length;
  }

  /**
   * Reset images to initial state (useful for testing or refresh functionality)
   */
  resetImages(): void {
    // Move current additional images back to the pool
    this.additionalImages.unshift(...this.eventImages.slice(5));
    this.eventImages = this.eventImages.slice(0, 5);
  }
}