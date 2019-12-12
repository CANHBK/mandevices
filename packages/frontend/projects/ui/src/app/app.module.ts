import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertDangerComponent } from './alert/alert-danger/alert-danger.component';
import { ModalContentComponent, NgbdModalContent } from './modal/modal-content/modal-content.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertDangerComponent,
    ModalContentComponent,
    NgbdModalContent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [
    AlertDangerComponent,
    ModalContentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
