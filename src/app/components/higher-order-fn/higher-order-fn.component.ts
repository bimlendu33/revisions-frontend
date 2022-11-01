import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-higher-order-fn',
  templateUrl: './higher-order-fn.component.html',
  styleUrls: ['./higher-order-fn.component.css'],
})
export class HigherOrderFnComponent implements OnInit {
  names = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  sum!: number;
  constructor() {}

  ngOnInit(): void {
    this.sum = this.getSum();
  }

  getSum() {
    return [
      ...createEvenNumbers(this.names),
      ...getOddNumber(this.names),
    ].reduce((partialSum, a) => partialSum + a, 0);
  }
}
function createEvenNumbers(names: any) {
  var newArr = names.filter((item: any) => item % 2 === 0);
  return newArr;
}

function getOddNumber(names: any) {
  var newArr = names.filter((item: any) => item % 2 !== 0);
  return newArr;
}
