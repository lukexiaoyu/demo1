import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  fl=['品优购欢迎你！','请登录','免费注册']
  fr=['我的订单','我的品优购','品优购会员','企业采购','关注品优购','客户服务','网站导航']

  constructor() { }

  ngOnInit(): void {
  }

}
