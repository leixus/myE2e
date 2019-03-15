import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecommendedCourseComponent } from './recommended-course.component';



const routes: Routes = [
    {
        path: '',
        component: RecommendedCourseComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecommendedCourseRoutingModule {}