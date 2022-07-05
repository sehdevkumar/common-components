import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationComponent } from './confirmation.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ConfirmationComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  exports: [ConfirmationComponent],
  entryComponents: [ConfirmationComponent],
})
export class ConfirmationModule {}
