import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from '../message-service.service';
import { Owoc } from '../owocki/owoc';
import { OwockiDataService } from '../owocki/owocki-data.service';

@Component({
  selector: 'app-owocki-list',
  templateUrl: './owocki-list.component.html',
  styleUrls: ['./owocki-list.component.css']
})
export class OwockiListComponent implements OnInit {

  @Input() canDelete?: boolean;
  @Input() listLength?: number;
  @Input() searchBar?: boolean;
  selected?: Owoc;
  owocki: Owoc[]= [];
  _canDelete?: boolean;
  _searchbar?: boolean;

  constructor(private owockiService: OwockiDataService, private messagesService: MessageService) {
    
   }

  ngOnInit(): void {
    this.owockiService.getOwocki().subscribe(owocki => {
      this.owocki = owocki
      if(this.listLength !== undefined){
        this.owocki = this.owocki.slice(0, this.listLength);
      }
    });
    if(this.canDelete === undefined){
      this._canDelete = true;
    }
    else{
      this._canDelete = this.canDelete; 
    }

    if(this.searchBar === undefined){
      this._searchbar = true;
    }
    else{
      this._searchbar = this.searchBar; 
    }
    this.messagesService.add('Wczytano owocki');
  }


  deleteOwocek(owocek : Owoc): void{
    this.owocki = this.owocki.filter( o => o!== owocek);
    this.owockiService.deleteOwocek(owocek.id);
    
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.owockiService.addOwocek({ name } as Owoc)
      .subscribe(owocek => {
        this.owocki.push(owocek);
      });
  }
}

