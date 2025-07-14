import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Partner } from '../../../models/partner.model';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-our-recruiter',
  standalone: false,
  templateUrl: './our-recruiter.component.html',
  styleUrl: './our-recruiter.component.scss'
})
export class OurRecruiterComponent implements OnInit, OnDestroy {
  @ViewChild('sliderContainer', { static: false }) sliderContainer!: ElementRef;
  
  recruiters: Partner[] = [];
  currentIndex: number = 0;
  autoSlideInterval: any;
  isTransitioning: boolean = false;
  slidesToShow: number = 4;
  
  // Touch/swipe handling
  touchStartX: number = 0;
  touchEndX: number = 0;
  
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPartners().subscribe((data) => {
      this.recruiters = data;
      this.updateSlidesToShow();
      this.startAutoSlide();
    });
    
    // Listen for window resize
    window.addEventListener('resize', this.onResize.bind(this));
  }

  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
    window.removeEventListener('resize', this.onResize.bind(this));
  }

  onResize(): void {
    this.updateSlidesToShow();
  }

  updateSlidesToShow(): void {
    const width = window.innerWidth;
    if (width < 576) {
      this.slidesToShow = 1;
    } else if (width < 768) {
      this.slidesToShow = 2;
    } else if (width < 992) {
      this.slidesToShow = 3;
    } else {
      this.slidesToShow = 4;
    }
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide(): void {
    if (this.isTransitioning || this.recruiters.length === 0) return;
    
    this.isTransitioning = true;
    const maxIndex = Math.max(0, this.recruiters.length - this.slidesToShow);
    this.currentIndex = this.currentIndex >= maxIndex ? 0 : this.currentIndex + 1;
    
    setTimeout(() => {
      this.isTransitioning = false;
    }, 500);
  }

  prevSlide(): void {
    if (this.isTransitioning || this.recruiters.length === 0) return;
    
    this.isTransitioning = true;
    const maxIndex = Math.max(0, this.recruiters.length - this.slidesToShow);
    this.currentIndex = this.currentIndex <= 0 ? maxIndex : this.currentIndex - 1;
    
    setTimeout(() => {
      this.isTransitioning = false;
    }, 500);
  }

  goToSlide(index: number): void {
    if (this.isTransitioning || index === this.currentIndex) return;
    
    this.isTransitioning = true;
    this.currentIndex = index;
    
    setTimeout(() => {
      this.isTransitioning = false;
    }, 500);
  }

  // Touch handlers
  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
    this.stopAutoSlide();
  }

  onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].clientX;
    this.handleSwipe();
    this.startAutoSlide();
  }

  handleSwipe(): void {
    const swipeThreshold = 50;
    const diff = this.touchStartX - this.touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
    }
  }

  getSliderTransform(): string {
    const slideWidth = 100 / this.slidesToShow;
    const translateX = -(this.currentIndex * slideWidth);
    return `translateX(${translateX}%)`;
  }

  getDotCount(): number {
    return Math.max(1, this.recruiters.length - this.slidesToShow + 1);
  }

  getDots(): number[] {
    return Array(this.getDotCount()).fill(0).map((_, i) => i);
  }
}