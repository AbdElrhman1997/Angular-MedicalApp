import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-doctors',
  templateUrl: './our-doctors.component.html',
  styleUrls: ['./our-doctors.component.scss']
})
export class OurDoctorsComponent implements OnInit {
  Boxs:{name:string,img:string}[];
  constructor() {
    this.Boxs=[
      {name:'Mohamed Sied',img:'../../../assets/Images/doctor1.jpg'},
      {name:'Michel Johnathan',img:'../../../assets/Images/doctor2.jpg'},
      {name:'James Doe',img:'../../../assets/Images/about.jpg'},
      {name:'John James',img:'../../../assets/Images/doctor3.jpg'},
    ]
  }

  ngOnInit(): void {
  }

}
