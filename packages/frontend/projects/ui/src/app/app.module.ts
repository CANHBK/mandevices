import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertDangerComponent } from './alert/alert-danger/alert-danger.component';

@NgModule({
    declarations: [
        AppComponent,
        AlertDangerComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    exports: [
        AlertDangerComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
