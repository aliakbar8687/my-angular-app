import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  subscriptionSuccess = false;

  subscribe(): void {
    this.subscriptionSuccess = true;

    // Optional: Reset message after a few seconds
    setTimeout(() => {
      this.subscriptionSuccess = false;
    }, 5000);
  }
}
