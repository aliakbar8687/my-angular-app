import { Component, OnInit, OnDestroy, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  @ViewChildren('statNumber') statNumbers!: QueryList<ElementRef>;
  
  currentSlide = 0;
  isAutoPlaying = true;
  private autoSlideInterval: any;
  private observer: IntersectionObserver | null = null;
  
slides = [ {
  title: 'Training & Internship Programs',
  subtitle: 'Gain real-world experience with internships in Dubai.',
  description: 'Kickstart your tech career with expert-led training and real-time project experience in high-demand domains like Data Science, Business Analytics, Cloud Computing, and more.',
  image: 'https://img.freepik.com/premium-photo/portrait-indian-student-with-glasses-book_894067-17315.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
  ctaText: 'Apply for Internship',
  ctaLink: '#contact'
}
,
  {
title: 'Master SAP with Industry Experts (Coming Soon)',
subtitle: 'Comprehensive SAP Training for Career Growth – Launching Soon',
    description: 'SAP modules like FICO, MM, and ABAP launching soon—ideal for aspiring consultants and analysts. Get hands-on training with real-world scenarios and certification-focused guidance to boost your ERP career.',
    image: 'https://img.freepik.com/premium-photo/portrait-smiling-young-middle-eastern-female-college-student-holding-book-isolated-white-background_1362287-1661.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
    ctaText: 'Explore  Courses',
    ctaLink: '#courses'
  },
  {
    title: 'Data Science & Business Analytics',
    subtitle: 'Turn Data into Opportunity',
    description: 'Learn Python, SQL, Power BI, Machine Learning, and Business Analytics tools with structured, career-oriented training designed for high-demand data roles.',
    image: 'https://img.freepik.com/premium-photo/young-man-is-smiling-holding-pencil-pencil_979520-162150.jpg?uid=R155423574&ga=GA1.1.1529083375.1749758229&semt=ais_hybrid&w=740',
    ctaText: 'Join Our Training Program\s',
    ctaLink: '#training'
  },
 
];


  stats = [
    { number: '10+', label: 'Trained Trainers', targetNumber: 10, currentNumber: 0 },
    { number: '430+', label: 'Students Trained', targetNumber:430, currentNumber: 0 },
    { number: '10+', label: 'Industry Partners', targetNumber: 10, currentNumber: 0 },
    { number: '4+', label: 'Years of Excellence', targetNumber: 4, currentNumber: 0 }
  ];

  constructor() { }

  ngOnInit(): void {
    this.startAutoSlide();
    this.setupIntersectionObserver();
  }

  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
    if (this.observer) {
      this.observer.disconnect();
    }
  }



  startAutoSlide(): void {
    if (this.isAutoPlaying) {
      this.autoSlideInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    }
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  scrollToSection(sectionId: string): void {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  private setupIntersectionObserver(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.startCountingAnimation();
          this.observer?.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5,
      rootMargin: '0px 0px -100px 0px'
    });

    // Observe the stats section
    setTimeout(() => {
      const statsSection = document.querySelector('.stats-section');
      if (statsSection) {
        this.observer?.observe(statsSection);
      }
    }, 100);
  }

  private startCountingAnimation(): void {
    this.stats.forEach((stat, index) => {
      this.animateCounter(stat, index);
    });
  }

  private animateCounter(stat: any, index: number): void {
    const duration = 2000; // 2 seconds
    const startTime = performance.now();
    const startValue = 0;
    const endValue = stat.targetNumber;
    
    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
      stat.currentNumber = currentValue;
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        stat.currentNumber = endValue;
      }
    };
    
    // Add staggered delay for each counter
    setTimeout(() => {
      requestAnimationFrame(updateCounter);
    }, index * 200);
  }

  getDisplayNumber(stat: any): string {
    if (stat.currentNumber === stat.targetNumber) {
      return stat.number; // Show original format (e.g., "500+")
    }
    return stat.currentNumber.toString();
  }
}