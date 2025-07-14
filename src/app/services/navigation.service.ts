import { Injectable } from '@angular/core';

export interface NavItem {
  title: string;
  path?: string;
  children?: NavItem[];
  isActive?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor() { }

  getMainNav(): NavItem[] {
    return [
      {
        title: 'Home',
        path: '/'
      },
      {
        title: 'Services',
        children: [
          { title: 'Web Development', path: '/services/web' },
          { title: 'Mobile Apps', path: '/services/mobile' },
          { title: 'AI Solutions', path: '/services/ai' },
          { title: 'Cloud Services', path: '/services/cloud' }
        ]
      },
      {
        title: 'Courses',
        children: [
          { title: 'All Courses', path: '/courses' },
          { title: 'Programming', path: '/courses/programming' },
          { title: 'Data Science', path: '/courses/data-science' },
          { title: 'Cyber Security', path: '/courses/cyber-security' }
        ]
      },
      {
        title: 'Training',
        path: '/training'
      },
      {
        title: 'Partners',
        path: '/partners'
      },
      {
        title: 'News',
        path: '/news'
      },
      {
        title: 'About Us',
        path: '/about'
      },
      {
        title: 'Contact',
        path: '/contact'
      }
    ];
  }

  scrollToSection(sectionId: string): void {
    // Handle both ID selectors and direct IDs
    const selector = sectionId.startsWith('#') ? sectionId : `#${sectionId}`;
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    } else {
      console.warn(`Section with selector '${selector}' not found`);
    }
  }

  // Alternative method with offset for fixed navbar
  scrollToSectionWithOffset(sectionId: string, offset: number = 80): void {
    const selector = sectionId.startsWith('#') ? sectionId : `#${sectionId}`;
    const element = document.querySelector(selector) as HTMLElement;
    if (element) {
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      console.warn(`Section with selector '${selector}' not found`);
    }
  }

  // Method to check if a path is active
  isPathActive(path: string, currentPath: string): boolean {
    return currentPath === path || currentPath.startsWith(path + '/');
  }

  // Method to update navigation items with active state
  updateActiveStates(navItems: NavItem[], currentPath: string): NavItem[] {
    return navItems.map(item => ({
      ...item,
      isActive: item.path ? this.isPathActive(item.path, currentPath) : false,
      children: item.children ? this.updateActiveStates(item.children, currentPath) : undefined
    }));
  }
}