import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'context-menu-demo';
  menu = [
    {
      icon: 'fa fa-sign-in-alt',
      name: '登录',
      actionFn: () => { window.alert('hi'); }
    },
    {
      icon: 'fa fa-sign-in-alt',
      name: '注册',
      actionFn: () => { window.alert('hi'); }
    },
    {
      icon: 'fa fa-sign-in-alt',
      name: '更改密码',
      actionFn: () => { window.alert('hi'); }
    }
  ];
}
