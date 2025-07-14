import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private discountModalSubject = new BehaviorSubject<boolean>(false);
  private enquiryModalSubject = new BehaviorSubject<boolean>(false);

  // Observables for components to subscribe to
  discountModal$ = this.discountModalSubject.asObservable();
  enquiryModal$ = this.enquiryModalSubject.asObservable();

  // Methods to control modals
  openDiscountModal() {
    this.discountModalSubject.next(true);
  }

  closeDiscountModal() {
    this.discountModalSubject.next(false);
  }

  openEnquiryModal() {
    this.enquiryModalSubject.next(true);
  }

  closeEnquiryModal() {
    this.enquiryModalSubject.next(false);
  }

  // Method to transition from discount to enquiry modal
openEnquiryFromDiscount() {
  console.log('Opening enquiry from discount');
  this.closeDiscountModal();
  setTimeout(() => {
    console.log('Opening enquiry modal');
    this.openEnquiryModal();
  }, 400);
}

}