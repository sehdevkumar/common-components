import { Component } from '@angular/core';
import { SingletonService } from '@services/singleton.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private ss: SingletonService) {}

  public askUserConfimation() {
    this.ss
      .askConfirmationMessageDialogBox({
        message: 'Do You Want to Delete Job?',
        title: 'Confimation',
        backgroundColor: '#262829',
        okButtonColor: '#cf3636',
        cancelButtonColor: '#a7b0b5',
        okButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        dismissAllowed: false,
      })
      .subscribe((res) => {});
  }
}
