import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CbModalComponent } from './cb-modal/cb-modal.component';
import { OverlayComponent } from './overlay/overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    CbModalComponent,
    OverlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
