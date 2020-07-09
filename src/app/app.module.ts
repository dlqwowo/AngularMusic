import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import {CoreModule} from './core/core.module';




//装饰器，装饰class AppModule 
@NgModule({
  //项目用到的组件
  declarations: [
    AppComponent
  ],
  //到导入的服务
  imports: [
    CoreModule
  ],
  //自定义的服务
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  //首页的组件
  bootstrap: [AppComponent]
})
export class AppModule { }
