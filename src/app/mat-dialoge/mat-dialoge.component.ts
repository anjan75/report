import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-dialoge',
  templateUrl: './mat-dialoge.component.html',
  styleUrls: ['./mat-dialoge.component.scss']
})
export class MatDialogeComponent implements OnInit {

  title: string;
  message: string;

  constructor(private _dialogRef: MatDialogRef<MatDialogeComponent>,  @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel) {
    this.title = data != null ? data.title : "";
    this.message = data != null ? data.messgae : ""
   }

  ngOnInit(): void {
  }

  closeModel() {
    this._dialogRef.close(false);
  }

  onConfirm() {
    this._dialogRef.close(true);
  }

  onDismiss() {
    this._dialogRef.close(false);
  }

}

export class ConfirmDialogModel {
  constructor(public title: string, public messgae: string){

  }
}
