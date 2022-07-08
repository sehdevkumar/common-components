import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { StatusBarComponent } from '@components/status-bar/status-bar.component';
import { SingletonService } from '@services/singleton.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(StatusBarComponent) statusBar!: StatusBarComponent;

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

  ngAfterViewInit(): void {
    this.ss.statusBar = this.statusBar;
  }

  onClickedMessage() {
    let messages = [
      { message: 'She: Hi Sehdev!', duration: 5000 },
      { message: 'He: Hi Unknown!', duration: 6000 },
      { message: 'She: How Are You?', duration: 7000 },
      { message: 'He: I am Good! , You?', duration: 8000 },
      { message: 'She:I am also Good!', duration: 9000 },
      { message: 'He: Good', duration: 10000 },
      { message: 'She: Bye', duration: 11000 },
      { message: 'He: Bye', duration: 12000 },
    ];
    let index = -1;
    const timer = setInterval(() => {
      index++;
      if (index > messages?.length - 1) {
        index = 0;
        clearInterval(timer);
      } else {
        this.ss.statusBar.showStatusBar(
          messages[index]?.message,
          messages[index]?.duration
        );
      }
    }, 2000);
  }
}
