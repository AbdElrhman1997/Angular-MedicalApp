import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  handleReview1(review1:any,review2:any,btn1:any,btn2:any){
    review1.style.display='flex'
    review2.style.display='=none'
    btn1.style.backgroundColor='white';
    btn2.style.backgroundColor='#ffffff80';
  }
  handleReview2(review1:any,review2:any,btn1:any,btn2:any){
    review1.style.display='none'
    review2.style.display='=flex'
    btn1.style.backgroundColor='#ffffff80';
    btn2.style.backgroundColor='white';
  }
  handleReview3(review1:any,review2:any,btn1:any,btn2:any){
    review1.style.display='none'
    review2.style.display='=none'
    btn1.style.backgroundColor='#ffffff80';
    btn2.style.backgroundColor='#ffffff80';
  }

}
