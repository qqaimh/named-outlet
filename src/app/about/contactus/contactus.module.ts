import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactusRoutingModule } from './contactus-routing.module';
import { AddressComponent } from './address/address.component';
import { ContactusComponent } from './contactus.component';
import { PhoneComponent } from './phone/phone.component';


@NgModule({
  declarations: [ContactusComponent, AddressComponent, PhoneComponent],
  imports: [
    CommonModule,
    ContactusRoutingModule
  ]
})
export class ContactusModule { }
