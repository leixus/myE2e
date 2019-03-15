import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shares/shares.module';
import { AgGridModule } from 'ag-grid-angular';
import { DataTableRoutingModule } from './data-table-routing.module';
import { DataTableComponent } from './data-table.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DataTableRoutingModule,
        NgZorroAntdModule,
        SharedModule,
        HttpClientModule,
        AgGridModule.withComponents([])
    ],
    providers: [],
    declarations: [
        DataTableComponent
    ]
})

export class DataTableModule { }
