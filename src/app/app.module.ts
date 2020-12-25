import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopMenuComponent } from './Shared/top-menu/top-menu.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { MobileRepairComponent } from './Mobile-Repair/mobile-repair/mobile-repair.component';
import { MobileRepairDevicesComponent } from './Mobile-Repair/mobile-repair-devices/mobile-repair-devices.component';
import { MobileRepairPartsComponent } from './Mobile-Repair/mobile-repair-parts/mobile-repair-parts.component';
import { AccessoriesComponent } from './Accessories/accessories/accessories.component';
import { AccessoriesListviewComponent } from './Accessories/accessories-listview/accessories-listview.component';
import { LaptopRepairComponent } from './Laptop-Repair/laptop-repair/laptop-repair.component';
import { LaptopRepairDevicesComponent } from './Laptop-Repair/laptop-repair-devices/laptop-repair-devices.component';
import { LaptopRepairPartsComponent } from './Laptop-Repair/laptop-repair-parts/laptop-repair-parts.component';
import { AccessoriesSingleComponent } from './Accessories/accessories-single/accessories-single.component';
import { ClientCartComponent } from './Cart/client-cart/client-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopSliderComponent } from './Shared/top-slider/top-slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SoonComponent } from './Shared/soon/soon.component';
import { ToastrModule } from 'ngx-toastr';
import { OrderCheckoutComponent } from './Cart/order-checkout/order-checkout.component';
import { TermsConditionsComponent } from './About/terms-conditions/terms-conditions.component';
import { AboutUsComponent } from './About/about-us/about-us.component';
import { RepairOrderCheckoutComponent } from './Cart/repair-order-checkout/repair-order-checkout.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    ToastrModule.forRoot()
  ],

  declarations: [
    AppComponent,
    HomeComponent,
    TopMenuComponent,
    FooterComponent,
    MobileRepairComponent,
    MobileRepairDevicesComponent,
    MobileRepairPartsComponent,
    AccessoriesComponent,
    AccessoriesListviewComponent,
    LaptopRepairComponent,
    LaptopRepairDevicesComponent,
    LaptopRepairPartsComponent,
    AccessoriesSingleComponent,
    ClientCartComponent,
    TopSliderComponent,
    SoonComponent,
    OrderCheckoutComponent,
    TermsConditionsComponent,
    AboutUsComponent,
    RepairOrderCheckoutComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
