import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopingOrderComponent } from './shoping-order.component';


const routes: Routes = [
    {
        path: '',
        component: ShopingOrderComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShopingOrderRoutingModule {}