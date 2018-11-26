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
    console.log(this.ds.login(this.username, this.password));
    
  }

}
