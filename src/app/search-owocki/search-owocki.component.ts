
import {  Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Owoc } from '../owocki/owoc';
import { OwockiDataService} from '../owocki/owocki-data.service';

@Component({
  selector: 'app-search-owocki',
  templateUrl: './search-owocki.component.html',
  styleUrls: ['./search-owocki.component.css']
})
export class SearchOwockiComponent implements OnInit {

  owocki!: Observable<Owoc[]>;
  owockiArray: Owoc[] = [];
  private searchTerms = new Subject<string>();
  div: any ;
  suggest: any;
  selected: number = -1;
  len: number = 0;
  selectedId: number = 0;

  constructor(private owockiService: OwockiDataService,
              private router: Router ) {}
  

  // Push a search term into the observable stream.
  search(term: string): void {
    this.selected = -1;
    this.len = 0;
    this.searchTerms.next(term);
    this.div = document.querySelector('#search-box');
    
  }

  getOwocekId(): number{
    let id = 0;
    if(this.owockiArray.length>0){
      id = this.owockiArray[this.selected].id;
    }


    return id;
  }
  
  ngOnInit(): void {
    
    this.owocki = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      
      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.owockiService.searchOwocki(term)),
    );
    
    //console.log(document.activeElement );
    //console.log(this.div.focused() );
    this.div = document.querySelector('#search-box');
    this.suggest = document.querySelector('#suggestion-list');
    this.div.addEventListener('focus', () =>{
        this.suggest.style.display = 'flex'
      
      
    });
    
    this.owocki.subscribe((o)=>{
      this.len = o.length;
      this.owockiArray = o;
    })
    
    this.div.addEventListener('blur', () =>{
      setTimeout(()=>{
        this.suggest.style.display = 'none';
      }, 200)
    });

    this.div.addEventListener('keydown', (e: KeyboardEvent) =>{
      
      if(e.code === "Enter"){
        this.div.blur();
        this.selected = -1;
        this.router.navigate(['/owocki/details',this.selectedId]);
      }
      if(e.code==="ArrowDown"){
        if(this.selected==this.len-1){
          this.selected = 0;
        }
        else{
          this.selected+=1;
        }
        
      }
      if(e.code==="ArrowUp"){
        if(this.selected==0){
          this.selected = this.len-1;
        }
        else{
          this.selected-=1;
        }
      }
      
      this.selectedId = this.getOwocekId();
    });
  }
  
}