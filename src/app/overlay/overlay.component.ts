import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  @Input() isShowing = true;

  @ContentChild(TemplateRef)
  layoutTemplate!: TemplateRef<any>;
  
  constructor() { }

  ngOnInit(): void {
  }

  templateContext = { 
    show: this.show(), 
    close: () => this.close()
  };

  show() {
    this.isShowing = true;
  }

  close() {
    this.isShowing = false;
  }



}
