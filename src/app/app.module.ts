import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverlayComponent } from './overlay/overlay.component';
import { ContextComponentComponent } from './context-component/context-component.component';
import { CardComponent } from './card/card.component';
import { IconComponent } from './icon/icon.component';
import { ButtonComponent } from './button/button.component';
import { HeadingComponent } from './heading/heading.component';

@NgModule({
  declarations: [
    AppComponent,
    OverlayComponent,
    ContextComponentComponent,
    CardComponent,
    IconComponent,
    ButtonComponent,
    HeadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
