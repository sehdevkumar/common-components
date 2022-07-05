import { Inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationComponent } from '@components/confirmation/confirmation.component';
import { MessageType, ConfirmationMessageType } from '@typings/common-typing';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SingletonService {
  constructor(private matDialog: MatDialog) {}

  public askConfirmationMessageDialogBox(
    confimationMessage: ConfirmationMessageType,
    dismisable = true
  ): Observable<any> {
    return this.matDialog
      .open(ConfirmationComponent, {
        panelClass: 'confimation-overlay',
        autoFocus: false,
        disableClose: !dismisable,
        data: confimationMessage,
        minWidth: '30%',
      })
      .afterClosed();
  }
}
