import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { ContactusComponent } from './contactus.component';
import { FacebookComponent } from './facebook/facebook.component';
import { PhoneComponent } from './phone/phone.component';

const routes: Routes = [
  { path: '', component: ContactusComponent,
    children:[
      { path: 'address', component: AddressComponent },
      { path: 'phone', component: PhoneComponent },
      { path: '', component: FacebookComponent },
    ]

  },
  // { path: 'address', component: AddressComponent },
  // { path: 'phone', component: PhoneComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactusRoutingModule { }
