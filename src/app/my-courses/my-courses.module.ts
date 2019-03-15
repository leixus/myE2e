import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SharedModule } from '../shares/shares.module';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyCoursesRoutingModule } from './my-courses-routing.module';
import { MyCoursesComponent } from './my-courses.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        MyCoursesRoutingModule,
        NgZorroAntdModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        AgGridModule.withComponents([]),
        HttpClientModule
    ],
    providers: [],
    declarations: [
        MyCoursesComponent
    ]
})

export class MyCoursesModule { }
