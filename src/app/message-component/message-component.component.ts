import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message-service.service';

@Component({
  selector: 'app-message-component',
  templateUrl: './message-component.component.html',
  styleUrls: ['./message-component.component.css']
})
export class MessageComponentComponent implements OnInit {

  constructor(public messagesService: MessageService) { }

  ngOnInit(): void {
  }

  clear(){
    this.messagesService.clear();
  }
}
