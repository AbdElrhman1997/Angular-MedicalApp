import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  Links:{name:string,link:string}[];
  constructor() {
    this.Links=[
      {name:'Home',link:'Home'},
      {name:'About',link:'About'},
      {name:'Services',link:'Services'},
      {name:'Reviews',link:'Reviews'},
      {name:'Our Doctors',link:'Doctors'},
      {name:'Blog',link:'Blog'},
      {name:'Book Appointment',link:'Appointment'},
    ]
  }

  ngOnInit(): void {
  }
  openNavMobile(nav:any){
    nav.classList.toggle('hidden')
  }

}
