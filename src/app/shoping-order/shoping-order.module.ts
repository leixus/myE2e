import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SharedModule } from '../shares/shares.module';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { ShopingOrderRoutingModule } from './shoping-order-routing.module';
import { ShopingOrderComponent } from './shoping-order.component';

@NgModule({
    imports: [
        CommonModule,
        ShopingOrderRoutingModule,
        NgZorroAntdModule,
        SharedModule,
        AgGridModule.withComponents([]),
        HttpClientModule
    ],
    providers: [],
    declarations: [
        ShopingOrderComponent
    ]
})

export class ShopingOrderModule { }
