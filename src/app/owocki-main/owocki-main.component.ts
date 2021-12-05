import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owocki-main',
  templateUrl: './owocki-main.component.html',
  styleUrls: ['./owocki-main.component.css']
})
export class OwockiMainComponent implements OnInit {

  showDeleteButtons: boolean = false;
  showSearchBar: boolean = false;
  setListLength: number = 5;

  constructor() { }

  ngOnInit(): void {
  }

}
