import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-child-types',
  templateUrl: './child-types.component.html',
  styleUrls: ['./child-types.component.css'],
})
export class ChildTypesComponent implements OnInit, AfterViewInit {
  @ViewChildren('itemInfo') itemInfo!: QueryList<ElementRef>;

  constructor() {}
  ngAfterViewInit(): void {
    console.log('itemInfo ', JSON.stringify(this.itemInfo.toArray()));
    var p =this.itemInfo.toArray();
    console.log(p[0].nativeElement.value)
  }

  ngOnInit(): void {}
}
