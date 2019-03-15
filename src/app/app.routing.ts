import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { LayoutComponent } from './layout/layout.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: LayoutComponent,
    children:
        [
            {
                // 主页
                path: 'homes',
                loadChildren: './homes/homes.module#HomesModule'
            },
            {
                // 云数据
                path: 'datatable',
                loadChildren: './data-table/data-table.module#DataTableModule'
            },
            {
                // 推荐课程
                path: 'recommended',
                loadChildren: './recommended-course/recommended-course.module#RecommendedCourseModule'
            },
            {
                // 所有课程
                path: 'courses',
                loadChildren: './my-courses/my-courses.module#MyCoursesModule'
            },
            {
                // 购物订单
                path: 'shoping',
                loadChildren: './shoping-order/shoping-order.module#ShopingOrderModule'
            },
            {
                // 宠物小精灵
                path: 'pokemon',
                loadChildren: './pokemon/pokemon.module#PokemonModule'
            }
        ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
