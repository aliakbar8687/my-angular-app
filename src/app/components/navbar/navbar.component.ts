import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { Subscription } from 'rxjs';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {

  showModal = false;
  private subscription: Subscription = new Subscription();
  isMobileMenuOpen = false;
  isScrolled = false;
  expandedMenuItems: { [key: string]: boolean } = {};
  expandedSubMenuItems: { [key: string]: boolean } = {};
 isBannerClosed = false;
  navigationItems = [
    {
      title: 'Home',
      link: '#home',
      subItems: [
        {
          title: 'About',
          link: '#home',
          subItems: [
            { title: 'Our Story', link: 'story' },
            // { title: 'Team', link: 'team' },
            { title: 'Mission & Vision', link: 'mission' },
          ],
        },
      ],
    },
        {
      title: 'Services',
      link: '#services',
      subItems: [
        { title: 'Our-Recruiter', link: 'our-recruiter' },
        // { title: 'Sap-Event', link: 'sap-event' },
        { title: 'Sap-Project-Go-Live', link: 'sap-project-go-live' },
      ],
    },


    {
      title: 'Courses',
      link: '#courses',
      subItems: [
        {
          title: 'SAP-ERP',
          link: 'sap-service',
          subItems: [
            { title: 'Financial Accounting', link: 'financial-accounting' },
            { title: 'Management Accounting', link: 'management-accounting' },
            { title: 'Material-Management', link: 'material-management' },
            { title: 'Production-Planning', link: 'production-planning' },
            { title: 'Sales-Distribution', link: 'sales-distribution' },
            {
              title: 'Human-Capital-Management',
              link: 'human-capital-management',
            },
            { title: 'SAP ABAP/4', link: 'sap-abap' },
            { title: 'Plant-Maintenance', link: 'plant-maintenance' },
            { title: 'Quality-Management', link: 'quality-management' },
            {
              title: 'Warehouse-Management/logistics Execution(WM)',
              link: 'warehouse-management',
            },
            // { title: 'TERP 10', link: 'terp-10' },
          ],
        },
        {
          title: 'SAP S/4 HANA',
          link: 'sap-course',
          subItems: [
            { title: 'S/4 HANA Financial Accounting', link: 'sap-hana' },
          ],
        },
        {
          title: 'SAP BW/4HANA BI',
          link: 'sap-bi',
          subItems: [
            { title: 'Sap-BI-Platform', link: 'sap-bi-platform' },
            { title: 'Crystal-Report', link: 'crystal-report' },
          ],
        },
        {
          title: 'Sap-Clouds-Solution',
          link: 'sap-clouds-solution',
          subItems: [
            { title: 'Success-Factor-Training', link: 'success-factor' }
          ],
        },
        {
          title: 'Full Stack Development',
          link: 'fullstack',
          subItems: [
            { title: 'Web Development', link: 'web-dev' },
            { title: 'Mobile-Development', link: 'mobile-development' }
          ],
        },
        {
          title: 'Data Science',
          link: 'data-science',
          subItems: [
            { title: 'Analytics', link: 'analytics' },
            { title: 'AI & ML', link: 'ai-ml' },
          ],
        },
        { title: 'Cybersecurity', link: 'cybersecurity' },
        { title: 'Cloud Solutions', link: 'cloud' },
        // { title: 'IoT Development', link: 'iot' },
      ],
    },
        {
      title: 'Training',
      link: '#training',
      subItems: [
        { title: 'Corporate Training', link: 'corporate' },
        { title: 'Individual Training', link: 'individual' },
        { title: 'Online Courses', link: 'online' },
        { title: 'SAP End User Training', link: 'sap-enduser-training' },
        { title: ' Internship', link: 'sap-internship' },
      ],
    },
    {
      title: 'Partners',
      link: '#partner',
      subItems: [],
    },
    {
      title: 'News',
      link: '#news',
      subItems: [],
    },
    {
      title: 'Contact',
      link: '#contact',
      subItems: [
        // { title: 'Get Quote', link: 'quote' },
        { title: 'Support', link: 'support' },
        { title: 'Careers', link: 'careers' },
      ],
    },
  ];

  constructor(private navigationService: NavigationService,private modalService: ModalService) {}

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.isScrolled = window.scrollY > 50;
    });
     this.subscription.add(
      this.modalService.discountModal$.subscribe(show => {
        this.showModal = show;
      })
    );

    // Show modal immediately when component loads
    setTimeout(() => {
      this.modalService.openDiscountModal();
    }, 500);
  }
onEnrollClick() {
  this.modalService.openEnquiryFromDiscount();
}
closeBanner(): void {
    this.isBannerClosed = true;
    // Add class to body to adjust padding
    document.body.classList.add('banner-closed');
  }

  // Optional: Method to show banner again
  showBanner(): void {
    this.isBannerClosed = false;
    // Remove class from body
    document.body.classList.remove('banner-closed');
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    
    // Close all expanded menu items when closing mobile menu
    if (!this.isMobileMenuOpen) {
      this.expandedMenuItems = {};
      this.expandedSubMenuItems = {};
    }
    
    // Prevent body scroll when mobile menu is open
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  toggleMobileDropdown(event: Event, itemTitle: string): void {
    event.preventDefault();
    event.stopPropagation();
    
    this.expandedMenuItems[itemTitle] = !this.expandedMenuItems[itemTitle];
    
    // Close all sub-menu items when closing parent
    if (!this.expandedMenuItems[itemTitle]) {
      Object.keys(this.expandedSubMenuItems).forEach(key => {
        if (key.startsWith(itemTitle + '_')) {
          delete this.expandedSubMenuItems[key];
        }
      });
    }
  }

  toggleMobileNestedDropdown(event: Event, parentTitle: string, subItemTitle: string): void {
    event.preventDefault();
    event.stopPropagation();
    
    const key = `${parentTitle}_${subItemTitle}`;
    this.expandedSubMenuItems[key] = !this.expandedSubMenuItems[key];
  }

  isMenuExpanded(itemTitle: string): boolean {
    return !!this.expandedMenuItems[itemTitle];
  }

  isSubMenuExpanded(parentTitle: string, subItemTitle: string): boolean {
    const key = `${parentTitle}_${subItemTitle}`;
    return !!this.expandedSubMenuItems[key];
  }

  scrollToSection(sectionId: string): void {
    this.navigationService.scrollToSection(sectionId);
    this.closeMobileMenu();
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    this.expandedMenuItems = {};
    this.expandedSubMenuItems = {};
    document.body.style.overflow = 'auto';
  }

  // Handle click on items with sub-items in mobile
  handleMobileMenuClick(event: Event, item: any): void {
    if (item.subItems && item.subItems.length > 0) {
      this.toggleMobileDropdown(event, item.title);
    } else {
      this.scrollToSection(item.link);
    }
  }

  // Handle click on sub-items with nested items in mobile
  handleMobileSubMenuClick(event: Event, parentTitle: string, subItem: any): void {
    if (subItem.subItems && subItem.subItems.length > 0) {
      this.toggleMobileNestedDropdown(event, parentTitle, subItem.title);
    } else {
      this.scrollToSection(subItem.link);
    }
  }
}