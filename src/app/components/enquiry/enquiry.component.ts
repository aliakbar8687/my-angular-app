import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ModalService } from '../../services/modal.service';
import { EnquiryService } from '../../services/enquiry.service';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-enquiry',
  standalone: false,
  templateUrl: './enquiry.component.html',
  styleUrl: './enquiry.component.scss'
})
export class EnquiryComponent implements OnInit, OnDestroy {
  isModalOpen = false;
  isSubmitted = false;
  isSubmitting = false;
  showSuccessMessage = false;
  loadingCities = false;
  contactForm: FormGroup | any;
  private subscription: Subscription = new Subscription();

  // Location data
  states: any[] = [];
  cities: any[] = [];

  graduationYears: number[] = [];
  experienceOptions = [
    { value: '0', label: 'Fresher (No Experience)' },
    { value: '1', label: '1 Year Experience' },
    { value: '2', label: '2 Years Experience' },
    { value: '3', label: '3 Years Experience' },
    { value: '4', label: '4 Years Experience' },
    { value: '5', label: '5 Years Experience' },
    { value: '6+', label: '6+ Years Experience' }
  ];
preferredCourses = [
  { value: 'full-stack-development', label: 'Full Stack Development' },
  { value: 'data-science-and-analytics', label: 'Data Science and Analytics' },
  { value: 'cloud', label: 'Cloud' },
  { value: 'cyber-security', label: 'Cyber Security' },
  { value: 'sap-coming-soon', label: 'SAP - Coming Soon' }
];
  constructor(
    private fb: FormBuilder,
    private enquiryService: EnquiryService,
    private modalService: ModalService,
    private locationService: LocationService // Inject location service
  ) {
    this.generateGraduationYears();
    this.initializeForm();
  }

  ngOnInit() {
    // Load states when component initializes
    this.loadStates();

    // Subscribe to modal service
    this.subscription.add(
      this.modalService.enquiryModal$.subscribe(show => {
        console.log('Enquiry modal state changed:', show);
        if (show && !this.isModalOpen) {
          this.openModal();
        } else if (!show && this.isModalOpen) {
          this.closeModal();
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private initializeForm() {
    this.contactForm = this.fb.group({
      fullName: ['', [
        Validators.required, 
        Validators.minLength(2),
        Validators.pattern(/^[a-zA-Z\s]*$/)
      ]],
      email: ['', [
        Validators.required, 
        Validators.email,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      ]],
      state: ['', Validators.required],
      city: ['', Validators.required],
      graduationYear: ['', Validators.required],
      experience: ['', Validators.required],
      mobileNumber: ['', [
        Validators.required, 
        Validators.pattern(/^[6-9]\d{9}$/)
      ]],
      preferredCourse: ['', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue]
    });
  }

  // Load states from API
  loadStates() {
    this.subscription.add(
      this.locationService.getStates().subscribe({
        next: (states) => {
          this.states = states;
        },
        error: (error) => {
          console.error('Error loading states:', error);
        }
      })
    );
  }

  // Handle state change and load cities
  onStateChange(event: any) {
    const stateId = event.target.value;
    
    // Reset city selection
    this.contactForm.patchValue({ city: '' });
    this.cities = [];

    if (stateId) {
      this.loadingCities = true;
      this.subscription.add(
        this.locationService.getCitiesByState(stateId).subscribe({
          next: (cities) => {
            this.cities = cities;
            this.loadingCities = false;
          },
          error: (error) => {
            console.error('Error loading cities:', error);
            this.loadingCities = false;
          }
        })
      );
    }
  }

  generateGraduationYears() {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= currentYear - 50; year--) {
      this.graduationYears.push(year);
    }
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Prepare form data with state and city IDs
      const formData = {
        ...this.contactForm.value,
        stateId: this.contactForm.value.state,
        cityId: this.contactForm.value.city
      };

      // Remove the original state and city fields
      delete formData.state;
      delete formData.city;
      
      this.enquiryService.submitEnquiry(formData).subscribe({
        next: (response) => {
          console.log('Form submitted successfully:', response);
          this.isSubmitting = false;
          this.showSuccessMessage = true;
          this.isSubmitted = false;
        },
        error: (error) => {
          console.error('Error submitting form:', error);
          this.isSubmitting = false;
        }
      });
    } else {
      this.isSubmitted = true;
      this.scrollToFirstError();
    }
  }

  openModal() {
    this.isModalOpen = true;
    this.showSuccessMessage = false;
    this.isSubmitted = false;
    this.isSubmitting = false;
    this.contactForm.reset();
    this.cities = []; // Reset cities
    // Ensure agreeToTerms is properly reset to false
    this.contactForm.patchValue({
      agreeToTerms: false
    });
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    this.showSuccessMessage = false;
    this.isSubmitted = false;
    this.isSubmitting = false;
    this.contactForm.reset();
    this.cities = []; // Reset cities
    this.modalService.closeEnquiryModal();
    document.body.style.overflow = 'auto';
  }

  // Helper methods for validation
  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched || this.isSubmitted));
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field && field.errors) {
      if (field.errors['required']) {
        return `${this.getFieldLabel(fieldName)} is required`;
      }
      if (field.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (field.errors['minlength']) {
        return `${this.getFieldLabel(fieldName)} must be at least ${field.errors['minlength'].requiredLength} characters`;
      }
      if (field.errors['pattern']) {
        if (fieldName === 'mobileNumber') {
          return 'Please enter a valid 10-digit Indian mobile number';
        }
        if (fieldName === 'fullName') {
          return 'Full name should contain only letters and spaces';
        }
        return 'Please enter a valid format';
      }
    }
    return '';
  }

  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      fullName: 'Name',
      email: 'Email',
      state: 'State',
      city: 'City',
      graduationYear: 'Graduation Year',
      experience: 'Experience Level',
      preferredCourse: 'Preferred Course',
      mobileNumber: 'Mobile Number',
      message: 'Message',
      agreeToTerms: 'Terms and Privacy Policy Agreement'
    };
    return labels[fieldName] || fieldName;
  }

  private scrollToFirstError() {
    setTimeout(() => {
      const firstErrorField = document.querySelector('.form-control.error');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }
    }, 100);
  }

  // Input event handlers
  onMobileNumberInput(event: any) {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
  }

  onFullNameInput(event: any) {
    event.target.value = event.target.value.replace(/[^a-zA-Z\s]/g, '');
  }
}