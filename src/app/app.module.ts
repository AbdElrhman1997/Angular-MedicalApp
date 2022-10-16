import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { AboutComponent } from './Components/about/about.component';
import { SERVICESComponent } from './Components/services/services.component';
import { ReviewsComponent } from './Components/reviews/reviews.component';
import { OurDoctorsComponent } from './Components/our-doctors/our-doctors.component';
import { BLOGComponent } from './Components/blog/blog.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { BookAppointmentComponent } from './Components/book-appointment/book-appointment.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainLayOutComponent } from './Components/main-lay-out/main-lay-out.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    SERVICESComponent,
    ReviewsComponent,
    OurDoctorsComponent,
    BLOGComponent,
    FooterComponent,
    HomeComponent,
    BookAppointmentComponent,
    MainLayOutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
