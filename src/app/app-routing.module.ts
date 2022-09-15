import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { BLOGComponent } from './Components/blog/blog.component';
import { BookAppointmentComponent } from './Components/book-appointment/book-appointment.component';
import { HomeComponent } from './Components/home/home.component';
import { MainLayOutComponent } from './Components/main-lay-out/main-lay-out.component';
import { OurDoctorsComponent } from './Components/our-doctors/our-doctors.component';
import { ReviewsComponent } from './Components/reviews/reviews.component';
import { SERVICESComponent } from './Components/services/services.component';

const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:'',component:MainLayOutComponent,children:[
    {path:'About',component:AboutComponent},
    {path:'Reviews',component:ReviewsComponent},
    {path:'Services',component:SERVICESComponent},
    {path:'Doctors',component:OurDoctorsComponent},
    {path:'Blog',component:BLOGComponent},
    {path:'Appointment',component:BookAppointmentComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
