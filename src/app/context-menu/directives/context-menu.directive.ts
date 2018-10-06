import { Directive, HostListener, ComponentFactoryResolver, ViewContainerRef, ComponentRef, Input } from '@angular/core';
import { ContextMenuComponent } from '../components/context-menu/context-menu.component';

@Directive({
  selector: '[appContextMenu]',
})
export class ContextMenuDirective {
  component: ComponentRef<ContextMenuComponent>;
  loaction;
  @Input('appContextMenu') appContextMenu;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {
    window.document.body.addEventListener('click', () => {
      if (this.component) {
        this.component.destroy();
        this.component = null;
        return;
      }
    });
  }
  @HostListener('click', ['$event'])
  openMenu(event: Event) {
    event.stopPropagation();
    if (this.component) {
      this.component.destroy();
      this.component = null;
      return;
    }
    this.loaction = {
      top: event['clientY'] + 'px',
      left: event['clientX'] + 'px'
    };
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ContextMenuComponent);
    this.component = this.viewContainerRef.createComponent(componentFactory);
    this.component.instance.menuItems = this.appContextMenu;
    this.component.instance.setLocation(this.loaction);
  }
}
