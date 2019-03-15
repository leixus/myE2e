import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HomesRoutingModule } from './homes-routing.module';
import { HomesComponent } from './homes.component';
import { SharedModule } from '../shares/shares.module';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        HomesRoutingModule,
        NgZorroAntdModule,
        SharedModule,
        AgGridModule.withComponents([]),
        HttpClientModule
    ],
    providers: [],
    declarations: [
        HomesComponent
    ]
})

export class HomesModule { }
