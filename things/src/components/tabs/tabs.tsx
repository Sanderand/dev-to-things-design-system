import { Component, ComponentInterface, Element, h, Host, JSX, Method } from '@stencil/core';
import { transformTagName } from '../../util/transform-tag-name';

@Component({
  tag: 'th-tabs',
  styleUrl: 'tabs.css',
  shadow: true,
})
export class TabsComponent implements ComponentInterface {
  @Element()
  public el: HTMLThTabsElement;

  @Method()
  public async setActiveTab(activeTab: HTMLThTabElement): Promise<void> {
    const ThTab = transformTagName('th-tab', 'th-tabs', this.el);
    const tabEls = this.el.querySelectorAll<HTMLThTabElement>(ThTab);
    tabEls.forEach(tabEl => (tabEl.active = activeTab === tabEl));
  }

  public render(): JSX.Element {
    return (
      <Host role="tablist">
        <slot />
      </Host>
    );
  }
}
