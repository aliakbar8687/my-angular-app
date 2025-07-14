import { Component, OnInit, AfterViewInit } from '@angular/core';

// Interface for gallery images
interface GalleryImage {
  src: string;
  caption: string;
  layout: 'wide' | 'square' | 'tall';
}

@Component({
  selector: 'app-sap-project-go-live',
  standalone: false,
  templateUrl: './sap-project-go-live.component.html',
  styleUrl: './sap-project-go-live.component.scss'
})
export class SapProjectGoLiveComponent implements OnInit, AfterViewInit {
  goLiveImages: GalleryImage[] = [
    { src: 'https://media.licdn.com/dms/image/v2/D4D22AQEpYxVN4rXWiw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1733745389073?e=1753315200&v=beta&t=K-cYUB1xGCQCVkF0x7nvm7aSTIudW1RbhgT-SJppgas', caption: 'Go-Live Celebration – Client A', layout: 'wide' },
    { src: 'https://media.licdn.com/dms/image/v2/D4D22AQEFcDEtyMBtxQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1733745389856?e=1753315200&v=beta&t=3A4mU1RFJ4AXM6MoiFXUNUY8vQLRFc2XjGywLJyHdWg', caption: 'Team Handover Session', layout: 'square' },
    { src: 'https://media.licdn.com/dms/image/v2/D4D22AQGdVlOw4nPRYQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1733745389832?e=1753315200&v=beta&t=tnpUEMgsEsNP3ricEGX_MklOx6guIGZ19o4wNU1yjCc', caption: 'Project Launch Event', layout: 'tall' },
    { src: 'https://media.licdn.com/dms/image/v2/D4D22AQGYmVFcXvoWcw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1733745386729?e=1753315200&v=beta&t=MKn5CeyCDJ49C1rWRacflXP7mqtm5hHFMlxf9xbOxvE', caption: 'Key User Training', layout: 'wide' },
    { src: 'https://media.licdn.com/dms/image/v2/D4D22AQHIYLe9mKMK3Q/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1733745389357?e=1753315200&v=beta&t=MhsYbzQ5TZHS7553wNUQSUFXD5dHkEha7aVeG-3Rvhc', caption: 'Stakeholder Meet', layout: 'square' }
  ];

  selectedImage: GalleryImage | null = null;

  ngOnInit(): void {
    // Component initialization
  }

  ngAfterViewInit(): void {
    this.initScrollEffects();
    this.initImageLazyLoading();
  }

  scrollToGallery(): void {
    const gallery = document.getElementById('gallery');
    if (gallery) {
      gallery.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  openLightbox(image: GalleryImage): void {
    this.selectedImage = image;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.selectedImage = null;
    document.body.style.overflow = 'auto';
  }

  private initScrollEffects(): void {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  }

  private initImageLazyLoading(): void {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    }
  }

  private animateStats(): void {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
      const target = stat.textContent?.replace(/\D/g, '') || '0';
      const increment = parseInt(target) / 100;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= parseInt(target)) {
          current = parseInt(target);
          clearInterval(timer);
        }
        stat.textContent = Math.floor(current) + (stat.textContent?.includes('%') ? '%' : '');
      }, 20);
    });
  }
}