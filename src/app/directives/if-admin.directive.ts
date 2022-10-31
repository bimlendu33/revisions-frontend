import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appIfAdmin]',
})
export class IfAdminDirective implements OnInit {
  @Input() appIfAdmin !: boolean;

  constructor(
    private containerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {
  
  }

  ngOnInit(): void {
    if (this.appIfAdmin) {
      this.containerRef.createEmbeddedView(this.templateRef);
    } else {
      this.containerRef.clear();
    }
  }
}
