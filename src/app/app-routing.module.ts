import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

// import { HomeComponent } from './home/home.component'
import { HomeComponent } from './home/home.component.simple'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'manager',
    loadChildren: () =>
      import('./manager/manager.module').then((module) => module.ManagerModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((module) => module.UserModule),
  },
  {
    path: 'pos',
    loadChildren: () =>
      import('./point-of-sale/point-of-sale.module').then(
        (module) => module.PointOfSaleModule
      ),
  },
  {
    path: 'inventory',
    loadChildren: () =>
      import('./inventory/inventory.module').then((module) => module.InventoryModule),
  },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
