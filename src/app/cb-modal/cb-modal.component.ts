import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-cb-modal',
  templateUrl: './cb-modal.component.html',
  styleUrls: ['./cb-modal.component.scss']
})
export class CbModalComponent implements OnInit {
  @Input() on = true;

  @ContentChild(TemplateRef)
  layoutTemplate!: TemplateRef<any>;
  
  constructor() { }

  ngOnInit(): void {
  }

  fire() {
    console.log('it does fire...');
  }
}
