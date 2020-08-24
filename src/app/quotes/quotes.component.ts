import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote [] =[
    new Quote(1,'Abdi@99','Education is your life, guard it well','Ali'),
    new Quote(2,'Ali-254','Say the truth even if it i bitter','Prophet Muhammad'),
    new Quote(3,'Fekir-11','Better late than  never','Englis Wiseman')
  ]
  addLike(index){
    this.quotes[index].likes=+1;
  }
  addDislike(index){
    this.quotes[index].dislikes=+1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
