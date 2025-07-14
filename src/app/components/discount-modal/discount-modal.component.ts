import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subscription, interval } from 'rxjs';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-discount-modal',
  templateUrl: './discount-modal.component.html',
  styleUrls: ['./discount-modal.component.scss'],
  standalone: false,
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ]),
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'scale(0.8) translateY(-100px)', opacity: 0 }),
        animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)', 
                style({ transform: 'scale(1) translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', 
                style({ transform: 'scale(0.8) translateY(-100px)', opacity: 0 }))
      ])
    ]),
    trigger('imageSlide', [
      transition('* => *', [
        style({ opacity: 0, transform: 'scale(1.1)' }),
        animate('600ms ease-in-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),
    trigger('contentPulse', [
      transition('* => *', [
        style({ transform: 'scale(0.95)', opacity: 0.8 }),
        animate('400ms ease-out', style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ])
  ]
})
export class DiscountModalComponent implements OnInit, OnDestroy {
  showModal = false;
  private subscription: Subscription = new Subscription();
  
  currentOfferIndex = 0;
  currentImageIndex = 0;
  
offers = [
  {
    badge: 'FLASH SALE',
    title: '🎉 SAP Mastery Deal!',
    discount: '50% OFF',
    description: 'Enroll now in our SAP beginner to advanced courses and get certified at half the price!',
    emoji: '🎉',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    buttonText: 'Enroll Now'
  },
  {
    badge: 'MEGA DEAL',
    title: '🚀 Analytics Bootcamp Offer!',
    discount: '60% OFF',
    description: 'Boost your career with our hands-on Data Analytics and Power BI training programs!',
    emoji: '🚀',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    buttonText: 'Start Learning'
  },
  {
    badge: 'PREMIUM OFFER',
    title: '💎 All-Access Pass!',
    discount: '40% OFF',
    description: 'Get unlimited access to all SAP & Analytics courses with expert mentorship and certification!',
    emoji: '💎',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    buttonText: 'Unlock Now'
  },
  {
    badge: 'WEEKEND SPECIAL',
    title: '🎊 Weekend Learning Blast!',
    discount: '55% OFF',
    description: 'Supercharge your weekends with fast-track SAP & Analytics workshops. Limited seats!',
    emoji: '🎊',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    buttonText: 'Reserve Spot'
  }
];


 images = [
    'https://img.freepik.com/free-vector/super-sale-banner-design-vector-illustration_1035-14931.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
    'https://img.freepik.com/premium-vector/mega-sale-banner-with-red-ribbon_275806-1163.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
    'https://img.freepik.com/free-vector/stylish-black-friday-sale-label-background_1017-34629.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
    'https://img.freepik.com/premium-vector/special-offer-icon-flat-red-special-offer-discount-sign-special-offer-icon-vector-icon_579956-6056.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740'
  ];

  // Timer properties
  timeLeft = 24 * 60 * 60; // 24 hours in seconds
  displayTime = '24:00:00';

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    // Subscribe to modal service
    this.subscription.add(
      this.modalService.discountModal$.subscribe(show => {
        this.showModal = show;
        if (show) {
          this.startContentRotation();
          this.startCountdown();
        }
      })
    );

    // Show modal immediately when component loads
    setTimeout(() => {
      this.modalService.openDiscountModal();
    }, 500);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  startContentRotation() {
    // Rotate offers every 4 seconds
    this.subscription.add(
      interval(4000).subscribe(() => {
        if (this.showModal) {
          this.currentOfferIndex = (this.currentOfferIndex + 1) % this.offers.length;
        }
      })
    );

    // Rotate images every 3 seconds
    this.subscription.add(
      interval(3000).subscribe(() => {
        if (this.showModal) {
          this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        }
      })
    );
  }

  startCountdown() {
    this.subscription.add(
      interval(1000).subscribe(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
          this.updateDisplayTime();
        }
      })
    );
  }

  updateDisplayTime() {
    const hours = Math.floor(this.timeLeft / 3600);
    const minutes = Math.floor((this.timeLeft % 3600) / 60);
    const seconds = this.timeLeft % 60;
    
    this.displayTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  get currentOffer() {
    return this.offers[this.currentOfferIndex];
  }

  get currentImage() {
    return this.images[this.currentImageIndex];
  }

  onClose() {
    this.modalService.closeDiscountModal();
  }

  onClaimDiscount() {
    console.log('Claim discount clicked');
    this.modalService.openEnquiryFromDiscount();
  }

  onBackdropClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
}