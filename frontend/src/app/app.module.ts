import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingBoxComponent } from './landing-box/landing-box.component';
import { ContactComponent } from './contact/contact.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SectionPageComponent } from './section-page/section-page.component';
import { ServiceItemComponent } from './service-item/service-item.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { AutoFocus } from './helpers/auto-focus.directive';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingBoxComponent,
    ContactComponent,
    AboutPageComponent,
    SectionPageComponent,
    ServiceItemComponent,
    OrderPageComponent,
    DetailsPageComponent,
    OrderFormComponent,
    AutoFocus,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
