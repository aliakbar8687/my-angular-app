import { Component } from '@angular/core';

@Component({
  selector: 'app-terp-10',
  standalone: false,
  templateUrl: './terp-10.component.html',
  styleUrl: './terp-10.component.scss'
})
export class Terp10Component {
 examDates = [
    { date: '8th Nov', location: 'Delhi', cutoff: '24th Oct' },
    { date: '8th Nov', location: 'Kolkata', cutoff: '24th Oct' },
    { date: '9th Nov', location: 'Hyderabad', cutoff: '24th Oct' },
    { date: '9th Nov', location: 'Chennai', cutoff: '24th Oct' },
    { date: '20th Nov', location: 'Pune', cutoff: '31st Oct' },
    { date: '21th Nov', location: 'Mumbai', cutoff: '31st Oct' },
    { date: '22th Nov', location: 'Bangalore', cutoff: '31st Oct' }
  ];
}
