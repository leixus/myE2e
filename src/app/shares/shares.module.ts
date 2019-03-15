import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HomeDataTableService } from './service/homesData/homeDataTable.service';
import { InputSearchComponent } from './component/input-search/input-search.component';
import { FullCourseComponent } from './component/full-course/full-course.component';
import { FormSearchComponent } from './component/form-search/form-search.component';

@NgModule({
    imports:
    [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgZorroAntdModule,
        HttpClientInMemoryWebApiModule.forRoot(
            HomeDataTableService, { dataEncapsulation: false }
        )
    ],
    declarations: [
        InputSearchComponent,
        FullCourseComponent,
        FormSearchComponent
    ],
    exports: [
        InputSearchComponent,
        FullCourseComponent,
        FormSearchComponent
    ],
    providers: [
        HomeDataTableService
    ],
    entryComponents: [
    ]
})

/** 共享模块 */
export class SharedModule { }
