import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-ouput',
  templateUrl: './input-ouput.component.html',
  styleUrls: ['./input-ouput.component.css'],
})
export class InputOuputComponent implements OnInit {
  currentCount: number = 0;

  constructor() {}

  ngOnInit(): void {}

  getUpdatedCount(counter: any) {
    console.log('counter');
    this.currentCount = counter;
  }
}
