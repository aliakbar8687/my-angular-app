import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, HostListener } from '@angular/core';
import { trigger, transition, style, animate, stagger, query, keyframes } from '@angular/animations';
import { DataService } from '../../services/data.service';
import { News } from '../../models/news.model';

// Category interface for type safety
interface Category {
  id: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-news',
  standalone: false,
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slideInUp', [
      transition(':enter', [
        style({ 
          opacity: 0, 
          transform: 'translateY(60px) scale(0.9)',
          filter: 'blur(8px)'
        }),
        animate('800ms cubic-bezier(0.35, 0, 0.25, 1)', 
          style({ 
            opacity: 1, 
            transform: 'translateY(0) scale(1)',
            filter: 'blur(0px)'
          })
        )
      ])
    ]),
    trigger('cardHover', [
      transition(':enter', [
        style({ 
          opacity: 0, 
          transform: 'perspective(1000px) rotateX(20deg) translateY(30px)',
          boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
        }),
        animate('600ms cubic-bezier(0.4, 0, 0.2, 1)', 
          style({ 
            opacity: 1, 
            transform: 'perspective(1000px) rotateX(0deg) translateY(0)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.15)'
          })
        )
      ])
    ]),
    trigger('staggeredFadeIn', [
      transition('* <=> *', [
        query(':enter', [
          style({ 
            opacity: 0, 
            transform: 'translateY(40px) scale(0.8)',
            filter: 'blur(4px)'
          }),
          stagger(150, [
            animate('700ms cubic-bezier(0.35, 0, 0.25, 1)', 
              style({ 
                opacity: 1, 
                transform: 'translateY(0) scale(1)',
                filter: 'blur(0px)'
              })
            )
          ])
        ], { optional: true }),
        query(':leave', [
          animate('300ms ease-in', 
            style({ 
              opacity: 0, 
              transform: 'translateY(-20px) scale(0.95)',
              filter: 'blur(2px)'
            })
          )
        ], { optional: true })
      ])
    ]),
    trigger('titleAnimation', [
      transition(':enter', [
        style({ 
          opacity: 0, 
          transform: 'translateY(-30px)',
          letterSpacing: '10px'
        }),
        animate('1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
          style({ 
            opacity: 1, 
            transform: 'translateY(0)',
            letterSpacing: 'normal'
          })
        )
      ])
    ])
  ]
})
export class NewsComponent implements OnInit {
  allNews: News[] = [];
  filteredNews: News[] = [];
  featuredNews: News | null = null;
  selectedCategory: string = 'all';
  loading: boolean = false;
  hasMoreNews: boolean = true;
  currentPage: number = 1;
  itemsPerPage: number = 6;
  isScrolled: boolean = false;
  
  categories: Category[] = [
    { id: 'all', name: 'All News', icon: '📰' },
    { id: 'innovation', name: 'Innovation', icon: '🚀' },
    { id: 'technology', name: 'Technology', icon: '💻' },
    { id: 'achievement', name: 'Achievement', icon: '🏆' },
    { id: 'partnership', name: 'Partnership', icon: '🤝' }
  ];

  private allFilteredNews: News[] = [];

  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.isScrolled = window.scrollY > 100;
  }

  ngOnInit(): void {
    this.loadNews();
    this.filterNews();
  }

  loadNews(): void {
    this.loading = true;
    console.log('Loading news...');
    
    // Simulate API call with mock data
    setTimeout(() => {
      this.loadMockData();
      this.loading = false;
      this.cdr.markForCheck();
    }, 1000);
  }

  private loadMockData(): void {
    const mockNews: News[] = [
      {
        id: 1,
        title: 'Syvaxia Honored with Excellence in Training Award',
        excerpt: 'Awarded for delivering innovative, job-oriented training programs and maintaining a 100% placement track record.',
        category: 'achievement',
        author: 'Syvaxia Admin',
        publishDate: new Date('2025-06-05'),
        image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop&auto=format&q=80',
        tags: ['Award', 'Training'],
        featured: false
      },
      {
        id: 2,
        title: 'Syvaxia Integrates AI-Powered Learning Modules',
        excerpt: 'Our platform now supports AI-driven content delivery to personalize training experiences for each student.',
        category: 'technology',
        author: 'Tech Team, Syvaxia',
        publishDate: new Date('2025-06-03'),
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop&auto=format&q=80',
        tags: ['AI', 'eLearning'],
        featured: false
      },
      {
        id: 3,
        title: 'Launch of Virtual Reality Labs for Technical Courses',
        excerpt: 'Syvaxia introduces VR labs to provide immersive practical experience for engineering and IT students.',
        category: 'innovation',
        author: 'Innovation Cell, Syvaxia',
        publishDate: new Date('2025-05-30'),
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop&auto=format&q=80',
        tags: ['VR', 'Technical Training'],
        featured: false
      },
      {
        id: 4,
        title: 'Syvaxia Partners with Top IT Firms for Internship Programs',
        excerpt: 'Strategic collaborations to ensure real-world exposure and internships for students in leading tech companies.',
        category: 'partnership',
        author: 'Syvaxia Communications',
        publishDate: new Date('2025-05-28'),
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop&auto=format&q=80',
        tags: ['Internship', 'Industry Tie-up'],
        featured: false
      },
      {
        id: 5,
        title: 'New Campus Expansion Announced',
        excerpt: 'Syvaxia expands to three new locations with state-of-the-art facilities and modern learning environments.',
        category: 'achievement',
        author: 'Syvaxia Management',
        publishDate: new Date('2025-05-25'),
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop&auto=format&q=80',
        tags: ['Expansion', 'Campus'],
        featured: false
      },
      {
        id: 6,
        title: 'Blockchain Technology Course Launch',
        excerpt: 'Comprehensive blockchain development program designed to meet industry demands and future opportunities.',
        category: 'technology',
        author: 'Curriculum Team',
        publishDate: new Date('2025-05-22'),
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop&auto=format&q=80',
        tags: ['Blockchain', 'Course'],
        featured: false
      }
    ];

    this.allNews = mockNews;
    this.featuredNews = this.allNews.find(n => n.featured) || null;
    this.filterNews();
  }

  filterNews(category: string = this.selectedCategory): void {
    this.selectedCategory = category;
    this.currentPage = 1;
    
    if (category === 'all') {
      this.allFilteredNews = this.allNews.filter(news => !news.featured);
    } else {
      this.allFilteredNews = this.allNews.filter(news => 
        news.category === category && !news.featured
      );
    }
    
    this.updateDisplayedNews();
    this.cdr.markForCheck();
  }

  private updateDisplayedNews(): void {
    const startIndex = 0;
    const endIndex = this.currentPage * this.itemsPerPage;
    
    this.filteredNews = this.allFilteredNews.slice(startIndex, endIndex);
    this.hasMoreNews = endIndex < this.allFilteredNews.length;
    
    console.log('Updated displayed news:', this.filteredNews);
    console.log('Has more news:', this.hasMoreNews);
  }

  loadMoreNews(): void {
    if (this.hasMoreNews && !this.loading) {
      this.loading = true;
      this.currentPage++;
      
      setTimeout(() => {
        this.updateDisplayedNews();
        this.loading = false;
        this.cdr.markForCheck();
      }, 800);
    }
  }

  formatDate(date: Date | string): string {
    // Handle both Date objects and string dates
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    }).format(dateObj);
  }

  getCategoryIcon(category: string | undefined): string {
    if (!category) return '📰';
    const cat = this.categories.find(c => c.id === category);
    return cat ? cat.icon : '📰';
  }

  getCategoryName(category: string | undefined): string {
    if (!category) return 'News';
    const cat = this.categories.find(c => c.id === category);
    return cat ? cat.name : 'News';
  }

  getAnimationDelay(index: number): string {
    return `${index * 100}ms`;
  }

  // Separate track by functions for different arrays
  trackByNewsId(index: number, news: News): number {
    return news.id;
  }

  trackByCategoryId(index: number, category: Category): string {
    return category.id;
  }
}