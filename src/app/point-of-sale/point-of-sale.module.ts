import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { PointOfSaleRoutingModule } from './point-of-sale-routing.module'
import { PointOfSaleComponent } from './point-of-sale.component'

@NgModule({
  declarations: [PointOfSaleComponent],
  imports: [CommonModule, PointOfSaleRoutingModule],
})
export class PointOfSaleModule {}
