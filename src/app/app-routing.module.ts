import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MobileRepairComponent } from './Mobile-Repair/mobile-repair/mobile-repair.component';
import { MobileRepairDevicesComponent } from './Mobile-Repair/mobile-repair-devices/mobile-repair-devices.component';
import { MobileRepairPartsComponent } from './Mobile-Repair/mobile-repair-parts/mobile-repair-parts.component';
import { LaptopRepairComponent } from './Laptop-Repair/laptop-repair/laptop-repair.component';
import { LaptopRepairDevicesComponent } from './Laptop-Repair/laptop-repair-devices/laptop-repair-devices.component';
import { LaptopRepairPartsComponent } from './Laptop-Repair/laptop-repair-parts/laptop-repair-parts.component';
import { AccessoriesComponent } from './Accessories/accessories/accessories.component';
import { AccessoriesListviewComponent } from './Accessories/accessories-listview/accessories-listview.component';
import { AccessoriesSingleComponent } from './Accessories/accessories-single/accessories-single.component';
import { ClientCartComponent } from './Cart/client-cart/client-cart.component';
import { SoonComponent } from './Shared/soon/soon.component';
import { OrderCheckoutComponent } from './Cart/order-checkout/order-checkout.component';
import { TermsConditionsComponent } from './About/terms-conditions/terms-conditions.component';
import { AboutUsComponent } from './About/about-us/about-us.component';
import { RepairOrderCheckoutComponent } from './Cart/repair-order-checkout/repair-order-checkout.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'soon', component: SoonComponent },
  { path: 'terms', component: TermsConditionsComponent },
  { path: 'about', component: AboutUsComponent },

  { path: 'cart', component: ClientCartComponent },
  { path: 'order-checkout', component: OrderCheckoutComponent },
  { path: 'repair-checkout/:WayId', component: RepairOrderCheckoutComponent },


  { path: 'mobile-repair', component: MobileRepairComponent },
  { path: 'mobile-repair-devices/:BrandId', component: MobileRepairDevicesComponent },
  { path: 'mobile-repair-parts/:ItemId', component: MobileRepairPartsComponent},

  { path: 'laptop-repair', component: LaptopRepairComponent },
  { path: 'laptop-repair-devices/:BrandId',component: LaptopRepairDevicesComponent},
  { path: 'laptop-repair-parts/:ItemId', component: LaptopRepairPartsComponent},

  { path: 'accessories', component: AccessoriesComponent },
  { path: 'accessories-listview', component: AccessoriesListviewComponent },
  { path: 'accessories-single/:ProductId', component: AccessoriesSingleComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
