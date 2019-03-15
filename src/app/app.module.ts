import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Module
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { AppRoutingModule } from './app.routing';

// Component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { LayoutComponent } from './layout/layout.component';
import { RegisterComponent } from './register/register.component';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
