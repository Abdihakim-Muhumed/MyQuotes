import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote [] =[
    new Quote(1,'Abdi@99','Education is your life, guard it well','Ali',new Date(2018,4,13)),
    new Quote(2,'Ali-254','Say the truth even if it i bitter','Prophet Muhammad',new Date()),
    new Quote(3,'Fekir-11','Better late than  never','Englis Wiseman',new Date())
  ]
  addLike(index){
    this.quotes[index].likes=+1;
  }
  addDislike(index){
    this.quotes[index].dislikes=+1;
  }
  viewDetails(index){
    this.quotes[index].showDetails=!this.quotes[index].showDetails
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.quoteDate = new Date(quote.quoteDate);
    this.quotes.push(quote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
