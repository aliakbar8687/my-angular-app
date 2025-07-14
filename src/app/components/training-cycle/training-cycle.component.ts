import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-cycle',
  standalone: false,
  templateUrl: './training-cycle.component.html',
  styleUrls: ['./training-cycle.component.scss']
})
export class TrainingCycleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Component initialization logic
  }

  onReadMore(): void {
    console.log('Read More clicked');
    // Add navigation or modal logic here
  }

  onFeatureReadMore(feature: string): void {
    console.log('Feature Read More clicked:', feature);
    // Add feature-specific navigation logic here
  }

}