import { Inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationComponent } from '@components/confirmation/confirmation.component';
import { StatusBarComponent } from '@components/status-bar/status-bar.component';
import { MessageType, ConfirmationMessageType } from '@typings/common-typing';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SingletonService {
  statusBar!: StatusBarComponent;

  constructor(private matDialog: MatDialog) {}

  public askConfirmationMessageDialogBox(
    confimationMessage: ConfirmationMessageType
  ): Observable<any> {
    return this.matDialog
      .open(ConfirmationComponent, {
        panelClass: 'confimation-overlay',
        autoFocus: false,
        disableClose: !confimationMessage?.dismissAllowed,
        data: confimationMessage,
        minWidth: '30%',
      })
      .afterClosed();
  }
}
