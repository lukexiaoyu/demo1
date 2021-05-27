import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//首页路由组件
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {
    path:'demo',component:DemoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
