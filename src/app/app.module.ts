import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SingletonService } from '@services/singleton.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmationModule } from './components/confirmation/confirmation.module';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatusBarModule } from '@components/status-bar/status-bar.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    // Common Modules
    ConfirmationModule,
    StatusBarModule,
  ],
  providers: [SingletonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
