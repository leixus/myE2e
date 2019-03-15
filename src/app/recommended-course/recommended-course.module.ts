import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SharedModule } from '../shares/shares.module';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecommendedCourseComponent } from './recommended-course.component';
import { RecommendedCourseRoutingModule } from './recommended-course-routing.module';

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        RecommendedCourseRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        AgGridModule.withComponents([]),
        HttpClientModule
    ],
    providers: [],
    declarations: [
        RecommendedCourseComponent
    ]
})

export class RecommendedCourseModule { }
