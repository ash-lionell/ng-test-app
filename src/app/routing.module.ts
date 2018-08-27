import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { HwTextComponent } from './hw-text/hw-text.component'

const routes: Routes = [
  { path: 'test', component: HwTextComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
