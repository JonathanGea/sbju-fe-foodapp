import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMenuComponent } from '../components/dashboard/dashboard-menu/dashboard-menu.component';
import { MasterComponent } from '../components/dashboard/master/master.component';
import { RouterModule, Routes } from '@angular/router';
import { MasterCategoryComponent } from '../components/dashboard/master-category/master-category.component';
import { MenuComponent } from '../components/costumer/menu/menu.component';
import { CostumerComponent } from '../components/costumer/costumer.component';
import { SidebarComponent } from '../components/dashboard/sidebar/sidebar.component';
import { CartComponent } from '../components/costumer/cart/cart.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import {MasterTableComponent} from '../components/dashboard/master-table/master-table.component';
import { TransaksiCassierAdminComponent } from '../components/dashboard/transaksi-cassier-admin/transaksi-cassier-admin.component';

const routes: Routes = [
  { path: 'admin', component: DashboardComponent,
    children: [
      { path: '', component: DashboardMenuComponent },
      // { path: 'home', component: DashboardMenuComponent },
      { path: 'product', component: MasterComponent },
      { path: 'category', component:MasterCategoryComponent},
      { path: 'table', component:MasterTableComponent},
      { path: 'cassier-admin', component:TransaksiCassierAdminComponent},
    ]
  },
  { path: '', component: CostumerComponent, 
    children: [
      { path: 'menu', component: MenuComponent },
      { path: 'cart', component: CartComponent },
      { path: '', redirectTo: 'menu', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  declarations: [

  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  
export class AppRoutingModule { }
