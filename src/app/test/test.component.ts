import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, MatDialogeComponent } from '../mat-dialoge/mat-dialoge.component';
import { TestService } from '../service/test.service';
import { CreateCardComponent } from './create-card/create-card.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  cardsList: any = [];
  cardsListSample: any = [];
  isSandeep: boolean = false;
  isRadha: boolean = false;
  isMonika: boolean = false;
  isPriyanka: boolean = false;
  isGanesh: boolean = false;

  constructor(private _dialog: MatDialog, private _testService: TestService) { }

  ngOnInit(): void {
    // this.getCardData();
  }

  // getCardData() {
  //   this.cardsListSample = this._testService.getCardData();
  //   this.isSandeep = this.cardsListSample.some(e => e.firstName == "sandeep");
  //   this.isRadha = this.cardsListSample.some(e => e.firstName == "radha");
  //   this.isMonika= this.cardsListSample.some(e => e.firstName == "monika");
  //   this.isPriyanka = this.cardsListSample.some(e => e.firstName == "priyanka");
  //   this.isGanesh = this.cardsListSample.some(e => e.firstName == "ganesh");
  // }

  addCard() {
    const dialogRef = this._dialog.open(CreateCardComponent, {
      width: '800px',
      disableClose: true
    });
    dialogRef.afterClosed().toPromise().then((data: any) => {
      if (data) {
        // let cardTitle = "SAMPLE ANGULAR";
        this.cardsList.push(data);
      }
    });

  }

  deleteCard(index: number) {
    const message = "Are You Sure To Remove This Card";
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef = this._dialog.open(MatDialogeComponent, {
      width: '800px',
      data: dialogData, disableClose: true
    });
    dialogRef.afterClosed().toPromise().then((data) => {
      if (data) {
        this.cardsList.splice(index, 1);
      }
    })

  }

}
