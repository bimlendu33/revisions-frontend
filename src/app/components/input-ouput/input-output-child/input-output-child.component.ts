import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-output-child',
  templateUrl: './input-output-child.component.html',
  styleUrls: ['./input-output-child.component.css'],
})
export class InputOutputChildComponent implements OnInit {
  @Input('currentCount') currentCount!: number;

  @Output('updatedCounter') updatedCounter = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    console.log('input props', this.currentCount);
  }
  
  updateCounter() {
    this.updatedCounter.emit(this.currentCount++);
  }
}
