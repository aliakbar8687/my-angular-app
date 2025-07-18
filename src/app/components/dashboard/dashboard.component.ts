// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../../services/enquiry.service';
import { AuthService } from '../../services/auth.service';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  enquiries: any[] = [];
  filteredEnquiries: any[] = [];
  isLoading = true;
  searchTerm = '';
currentPage = 1;
itemsPerPage = 10;
totalItems = 0;
totalPages = 0;
paginatedEnquiries: any[] = [];
Math: any;
  constructor(
    private enquiryService: EnquiryService,
    private authService: AuthService,
     private router: Router
  ) {}

  ngOnInit(): void {
    this.loadEnquiries();
        if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }

loadEnquiries(): void {
  this.enquiryService.getAllEnquiries().subscribe({
    next: (data) => {
      this.enquiries = data;
      this.filteredEnquiries = data;
      this.updatePagination();
      this.isLoading = false;
    },
    error: (error) => {
      console.error('Error fetching enquiries:', error);
      this.isLoading = false;
    }
  });
}

onSearch(): void {
  if (!this.searchTerm.trim()) {
    this.filteredEnquiries = this.enquiries;
  } else {
    const searchLower = this.searchTerm.toLowerCase();
    this.filteredEnquiries = this.enquiries.filter(enquiry => 
      enquiry.fullName?.toLowerCase().includes(searchLower) ||
      enquiry.email?.toLowerCase().includes(searchLower) ||
      enquiry.mobileNumber?.toString().includes(searchLower) ||
      enquiry.graduationYear?.toString().includes(searchLower) ||
      enquiry.experience?.toLowerCase().includes(searchLower) ||
      enquiry.preferredCourse?.toLowerCase().includes(searchLower) ||
      enquiry.stateName?.toLowerCase().includes(searchLower) ||
      enquiry.cityName?.toLowerCase().includes(searchLower) ||
      enquiry.id?.toString().includes(searchLower)
    );
  }
  
  // Reset to first page when searching
  this.currentPage = 1;
  this.updatePagination();
}

exportToExcel(): void {
  if (this.filteredEnquiries.length === 0) {
    alert('No data to export');
    return;
  }

  // Prepare data for export
  const exportData = this.filteredEnquiries.map(enquiry => ({
    'ID': enquiry.id,
    'Full Name': enquiry.fullName,
    'Email': enquiry.email,
    'Mobile Number': enquiry.mobileNumber,
    'Graduation Year': enquiry.graduationYear,
    'Experience': this.getExperienceText(enquiry.experience),
    'Preferred Course': this.getPreferredCourseText(enquiry.preferredCourse),
    'State': enquiry.stateName,
    'City': enquiry.cityName,
    'Agreed to Terms': enquiry.agreeToTerms ? 'Yes' : 'No',
    'Submitted Date': new Date(enquiry.created_at).toLocaleDateString()
  }));

  // Create workbook and worksheet
  const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(exportData);
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  
  // Add worksheet to workbook
  XLSX.utils.book_append_sheet(wb, ws, 'Enquiries');

  // Generate filename with current date
  const currentDate = new Date().toISOString().split('T')[0];
  const filename = `enquiries_${currentDate}.xlsx`;

  // Save the file
  XLSX.writeFile(wb, filename);
}

  private getExperienceText(experience: string): string {
    switch (experience) {
      case 'fresher': return 'Fresher';
      case '1': return '1 Year';
      case '2': return '2 Years';
      case '3': return '3 Years';
      case '4': return '4 Years';
      case '5': return '5 Years';
      case '6+': return '6+ Years';
      default: return experience;
    }
  }
private getPreferredCourseText(preferredCourse: string): string {
  switch (preferredCourse) {
    case 'full-stack-development': return 'Full Stack Development';
    case 'data-science-and-analytics': return 'Data Science and Analytics';
    case 'cloud': return 'Cloud';
    case 'cyber-security': return 'Cyber Security';
    case 'sap-coming-soon': return 'SAP - Coming Soon';
    default: return preferredCourse || 'N/A';
  }
}
 updatePagination(): void {
  this.totalItems = this.filteredEnquiries.length;
  this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
  
  // Ensure current page is valid
  if (this.currentPage > this.totalPages) {
    this.currentPage = 1;
  }
  
  this.updatePaginatedData();
}

updatePaginatedData(): void {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  this.paginatedEnquiries = this.filteredEnquiries.slice(startIndex, endIndex);
}

goToPage(page: number): void {
  if (page >= 1 && page <= this.totalPages) {
    this.currentPage = page;
    this.updatePaginatedData();
  }
}

goToFirstPage(): void {
  this.goToPage(1);
}

goToLastPage(): void {
  this.goToPage(this.totalPages);
}

goToPreviousPage(): void {
  this.goToPage(this.currentPage - 1);
}

goToNextPage(): void {
  this.goToPage(this.currentPage + 1);
}

onItemsPerPageChange(): void {
  this.currentPage = 1;
  this.updatePagination();
}

getPageNumbers(): number[] {
  const pages: number[] = [];
  const maxVisiblePages = 5;
  
  if (this.totalPages <= maxVisiblePages) {
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
  } else {
    const halfVisible = Math.floor(maxVisiblePages / 2);
    let start = Math.max(1, this.currentPage - halfVisible);
    let end = Math.min(this.totalPages, start + maxVisiblePages - 1);
    
    if (end - start < maxVisiblePages - 1) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
  }
  
  return pages;
}

// Update the deleteEnquiry method:
deleteEnquiry(id: number): void {
  if (confirm('Are you sure you want to delete this enquiry?')) {
    this.enquiryService.deleteEnquiry(id).subscribe({
      next: () => {
        this.enquiries = this.enquiries.filter(e => e.id !== id);
        this.filteredEnquiries = this.filteredEnquiries.filter(e => e.id !== id);
        this.updatePagination(); // Update pagination after deletion
      },
      error: (error) => {
        console.error('Error deleting enquiry:', error);
      }
    });
  }
}

  logout(): void {
    this.authService.logout();
  }
    goToMainSite(): void {
    // Option to go back to main site while staying logged in
    this.router.navigate(['/']);
  }
}