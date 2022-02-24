import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent implements OnInit {

  createCardForm: FormGroup

  constructor(private _dialogRef: MatDialogRef<CreateCardComponent>, private _formBuilder: FormBuilder) { 
    this.createCardForm = this._formBuilder.group({
      cardTitle: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  get f(){
    return this.createCardForm.controls;
  }

  closeModel() {
    this._dialogRef.close(false);
  }

  onConfirm() {
    if(this.createCardForm.valid) {
    this._dialogRef.close(this.createCardForm.controls.cardTitle.value);
    }
  }

  onDismiss() {
    this._dialogRef.close(false);
  }

}
