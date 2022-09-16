import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-context-component',
  templateUrl: './context-component.component.html',
  styleUrls: ['./context-component.component.scss']
})
export class ContextComponentComponent implements OnInit {

  @Input() isShowing = false;

  @ContentChild(TemplateRef)
  layoutTemplate!: TemplateRef<any>;
  
  constructor() { }

  ngOnInit(): void {
  }

  templateContext = { 
    show: () => this.show(), 
    close: () => this.close(),
  };

  show() {
    this.isShowing = true;
  }

  close() {
    this.isShowing = false;
  }

}
