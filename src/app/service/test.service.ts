import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  cardDummyData: any = [
    { id: 111, title: "Member", firstName: "Sandeep", img: "../assets/images/sandeep" },
    { id: 112, title: "Member", firstName: "Radha" },
    { id: 113, title: "Member", firstName: "Monika" },
    { id: 114, title: "Member", firstName: "Priyanka" },
    { id: 115, title: "Member", firstName: "Ganesh" },
  ]

  constructor() { }
  getCardData(){
    return this.cardDummyData;
  }
}
