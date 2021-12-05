import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../message-service.service';
import { Owoc } from '../owocki/owoc'
import { OwockiDataService } from '../owocki/owocki-data.service';
import { ActivatedRoute, NavigationStart, Router, Event } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-owocek-details',
  templateUrl: './owocek-details.component.html',
  styleUrls: ['./owocek-details.component.css']
})
export class OwocekDetailsComponent implements OnInit {
  owocek: Owoc | undefined;
  loading: Boolean = true;

  constructor(
    private messagesService: MessageService, 
    private owockiData: OwockiDataService,
    private route: ActivatedRoute,
    private location: Location,
    private activeRoute: ActivatedRoute  ) { 

      this.activeRoute.url.subscribe( _ =>{
        this.loading = true;
        this.getOwocek();
      })

    } 
  ngOnInit(): void {
      this.getOwocek(); 
  }

  getOwocek(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.owockiData.getOwocek(id).subscribe(o => {
      this.owocek = o;
      this.loading = false;
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if(this.owocek){
      this.owockiData.updateOwocek(this.owocek).subscribe(()=>this.goBack());
    }
  }
}
