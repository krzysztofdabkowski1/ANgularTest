import { Injectable } from '@angular/core';
import { Message } from './message'

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: Message[] = [];
  
  constructor() { }

  add(message: string){
    this.messages.push({
      content: message,
      date:new Date()
    });
  }

  clear(){
    this.messages = [];
  }
}
