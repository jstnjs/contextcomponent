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

  show() {
    this.isShowing = true;
  }

  close() {
    console.log('wordt aangeroepen..')
    console.log(this.isShowing);
  }


}
