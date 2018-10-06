import { Component, OnInit, Renderer2, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent implements OnInit {
  menuItems: {
    icon: string;
    name: string;
    actionFn: Function;
  };
  constructor(
    private rd2: Renderer2,
    private viewContainer: ViewContainerRef
  ) {

  }

  ngOnInit() {
  }
  setLocation(loaction) {
    const el = this.viewContainer.element.nativeElement;
    this.rd2.setStyle(el, 'top', loaction.top);
    this.rd2.setStyle(el, 'left', loaction.left);
  }

}
