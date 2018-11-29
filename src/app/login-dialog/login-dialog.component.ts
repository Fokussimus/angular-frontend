import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from '../data.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {

  private username: string;
  private password: string;

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>, private ds: DataService) { }

  CloseDialog(): void {
  this.dialogRef.close();
  }

  Login() {
    this.ds.login(this.username, this.password).subscribe(res => {
      if (res.status === 200) {
        this.CloseDialog();
      }
    });
    
  }
  keyDownFunction(event) {
    if(event.keyCode == 13) {
      this.Login();
      // rest of your code
    }
  }

}
