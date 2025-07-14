import { Component } from '@angular/core';

// Types and Interfaces
interface LearningHubEdition {
  title: string;
  desc: string;
}

interface AnimationConfig {
  duration: number;
  delay: number;
  easing: string;
}

@Component({
  selector: 'app-corporate',
  standalone: false,
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.scss']
})
export class CorporateComponent {
  // Data Properties
  reasons: string[] = [
    'SAP comes in 21 industry‑specific versions, allowing specialization',
    'Shortage of certified professionals due to unauthorized institutes',
    'Increasing demand for SAP consultants across clients'
  ];

  careerBenefits: string[] = [
    'Globally accepted SAP certificate – international opportunities',
    'Boost employability through SAP\s extensive ecosystem',
    'Adds value to your existing portfolio',
    'Articulates how ERP supports business needs',
    'Overseas career paths & higher salaries',
    'Performs key processes and understands integrations'
  ];

  certificationPaths: string[] = [
    'Full 5‑weeks training at SAP Authorized Education Partners',
    'Or 2+ implementation experience with company sponsorship'
  ];

  certificationTests: string[] = [
    'Explain core processes (Accounting, MM, PP, SD, HR)',
    'Describe organizational units and relationships',
    'Define master data and global settings',
    'Tailor SAP via customization',
    'Use SAP navigator, docs, process models, methodologies',
    'Understand SAP service support structure',
    'Understand technological requirements of R/3'
  ];

  learningHubEditions: LearningHubEdition[] = [
    {
      title: 'Solution Editions',
      desc: 'Solution‑specific digital resources, 60 hrs hands‑on, 2 exam bookings.'
    },
    {
      title: 'Business Edition (HUB040)',
      desc: 'Access essential content for business professionals.'
    },
    {
      title: 'Professional Edition (HUB030)',
      desc: 'Advanced access for IT and consultants.'
    }
  ];

  // Animation and Interaction Properties
  private animationObserver: IntersectionObserver | null = null;
  isAnimated: boolean = false;

  ngOnInit(): void {
    this.initializeAnimations();
    this.setupInteractiveElements();
  }

  ngOnDestroy(): void {
    if (this.animationObserver) {
      this.animationObserver.disconnect();
    }
  }

  // Initialize scroll animations
  private initializeAnimations(): void {
    if (typeof window !== 'undefined') {
      const observerOptions: IntersectionObserverInit = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      this.animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.triggerAnimation(entry.target as HTMLElement);
          }
        });
      }, observerOptions);

      // Observe sections after view init
      setTimeout(() => {
        document.querySelectorAll('.animate-fade, .animate-slide-up, .animate-fade-up, .animate-slide-in, .animate-zoom')
          .forEach(element => this.animationObserver?.observe(element));
      }, 100);
    }
  }

  // Trigger animation for elements
  private triggerAnimation(element: HTMLElement): void {
    if (!element.classList.contains('animated')) {
      element.classList.add('animated');
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  }

  // Setup interactive elements
  private setupInteractiveElements(): void {
    if (typeof window !== 'undefined') {
      // Enhanced card interactions
      setTimeout(() => {
        const cards = document.querySelectorAll('.edition');
        cards.forEach(card => {
          card.addEventListener('mouseenter', () => this.enhanceCard(card as HTMLElement));
          card.addEventListener('mouseleave', () => this.resetCard(card as HTMLElement));
        });
      }, 200);
    }
  }

  // Enhance card on hover
  private enhanceCard(card: HTMLElement): void {
    card.style.transform = 'translateY(-8px) scale(1.02)';
    card.style.boxShadow = '0 8px 25px rgba(0, 119, 182, 0.3)';
    card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
  }

  // Reset card hover effect
  private resetCard(card: HTMLElement): void {
    card.style.transform = 'translateY(0) scale(1)';
    card.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
  }

  // Method to handle button clicks
  onCTAClick(action: string): void {
    console.log(`CTA clicked: ${action}`);
    // Add your navigation or modal logic here
    this.showNotification(`${action} initiated successfully!`);
  }

  // Show notification
  private showNotification(message: string): void {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #28a745;
      color: white;
      padding: 1rem 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      z-index: 9999;
      animation: slideInRight 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.3s ease-in';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  // Track specific benefits for analytics
  trackBenefit(benefit: string, index: number): void {
    console.log(`Benefit viewed: ${benefit} at position ${index}`);
  }

  // Handle learning hub edition selection
  selectLearningPath(edition: LearningHubEdition): void {
    console.log(`Selected learning path: ${edition.title}`);
    this.showNotification(`${edition.title} selected! Preparing enrollment...`);
  }
}