import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class SERVICESComponent implements OnInit {
  Boxs:{title:string,img:string,aos:number}[];
  constructor() {
    this.Boxs=[
      {title:'Neurology',img:'../../../assets/Images/services1.png',aos:1},
      {title:'Eyes care',img:'../../../assets/Images/services2.png',aos:2},
      {title:'Pulomonary',img:'../../../assets/Images/services3.png',aos:3},
      {title:'Cardiology',img:'../../../assets/Images/services4.png',aos:4},
      {title:'Dental Care',img:'../../../assets/Images/services5.png',aos:5},
      {title:'Hepatology',img:'../../../assets/Images/services6.png',aos:6},
    ]
  }

  ngOnInit(): void {
  }

  handleLoad(box:any,aos:number){
    // if(aos/2===0){
    //   console.log("box.attributes.getNamedItem('class')")
    // }
    console.log("box.attributes.getNamedItem('class')")

    // else {

    // }
  }

}
