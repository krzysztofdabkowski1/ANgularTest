import { Component, OnInit } from '@angular/core';
import {Owoc} from './owoc';
import { OwockiDataService } from './owocki-data.service';

@Component({
  selector: 'app-owocki',
  templateUrl: './owocki.component.html',
  styleUrls: ['./owocki.component.css']
})
export class OwockiComponent implements OnInit {
  selected?: Owoc;
  owocki: Owoc[]= [];

  constructor(private owockiService: OwockiDataService) {}

  ngOnInit(): void {}
  

  

}
