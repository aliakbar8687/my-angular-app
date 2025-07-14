import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Partner } from '../../models/partner.model';

@Component({
  selector: 'app-partners',
  standalone: false,
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit, OnDestroy {
  partners: Partner[] = [];
  private sliderInterval: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadPartners();
  }

  ngOnDestroy(): void {
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
    }
  }

  loadPartners(): void {
    this.dataService.getPartners().subscribe((data: Partner[]) => {
      this.partners = data;
      // Optional: Initialize any additional slider logic here if needed
    });
  }

  getPartnerCount(): number {
    return this.partners.length;
  }

  getCountryCount(): number {
    const countries = new Set(this.partners.map(partner => partner.country));
    return countries.size;
  }

  getYearsOfPartnership(): number {
    const currentYear = new Date().getFullYear();
    const oldestPartnership = Math.min(...this.partners.map(partner => 
      new Date(partner.partnershipDate).getFullYear()
    ));
    return currentYear - oldestPartnership;
  }

  // Optional method to control slider speed dynamically
  adjustSliderSpeed(speed: number = 50): void {
    const sliderElement = document.querySelector('.partners-slider') as HTMLElement;
    if (sliderElement) {
      sliderElement.style.animationDuration = `${speed}s`;
    }
  }

  // Optional method to pause/resume slider
  pauseSlider(): void {
    const sliderElement = document.querySelector('.partners-slider') as HTMLElement;
    if (sliderElement) {
      sliderElement.style.animationPlayState = 'paused';
    }
  }

  resumeSlider(): void {
    const sliderElement = document.querySelector('.partners-slider') as HTMLElement;
    if (sliderElement) {
      sliderElement.style.animationPlayState = 'running';
    }
  }
}