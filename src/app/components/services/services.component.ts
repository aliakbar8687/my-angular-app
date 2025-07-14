import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent implements OnInit, OnDestroy {
  showModal = false;
  isScrolled = false;
  private subscription: Subscription = new Subscription();

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.initializeComponent();
    this.setupModalSubscription();
    this.showInitialModal();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.isScrolled = window.pageYOffset > 100;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(): void {
    // Handle responsive behavior if needed
    this.handleResponsiveChanges();
  }

  private initializeComponent(): void {
    // Initialize any component-specific logic
    this.handleResponsiveChanges();
  }

  private setupModalSubscription(): void {
    this.subscription.add(
      this.modalService.discountModal$.subscribe(show => {
        this.showModal = show;
      })
    );
  }

  private showInitialModal(): void {
    // Show modal after component loads
    setTimeout(() => {
      this.modalService.openDiscountModal();
    }, 1000);
  }

  private handleResponsiveChanges(): void {
    // Handle responsive behavior
    const width = window.innerWidth;
    // Add any responsive logic here if needed
  }

  scrollToContact(): void {
    // Open enquiry modal
    this.modalService.openEnquiryFromDiscount();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  // Utility method for smooth scrolling
  smoothScrollTo(targetY: number, duration: number = 1000): void {
    const startY = window.pageYOffset;
    const difference = targetY - startY;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const ease = this.easeInOutCubic(progress);
      window.scrollTo(0, startY + difference * ease);
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  private easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }

  // Animation trigger methods
  onCardHover(event: Event): void {
    const card = event.currentTarget as HTMLElement;
    card.classList.add('hovered');
  }

  onCardLeave(event: Event): void {
    const card = event.currentTarget as HTMLElement;
    card.classList.remove('hovered');
  }

  // Track analytics or events
  trackButtonClick(buttonName: string): void {
    // Add analytics tracking here
    console.log(`Button clicked: ${buttonName}`);
  }
}