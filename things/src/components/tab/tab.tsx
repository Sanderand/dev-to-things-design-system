import { Component, ComponentInterface, Element, h, Host, JSX, Listen, Prop, Watch } from '@stencil/core';
import { transformTagName } from '../../util/transform-tag-name';

@Component({
  tag: 'th-tab',
  styleUrl: 'tab.css',
  shadow: true,
})
export class TabComponent implements ComponentInterface {
  @Element()
  public el: HTMLThTabElement;

  @Prop({ reflect: true })
  public active: boolean = false;

  private tabsEl: HTMLThTabsElement;

  @Listen('click')
  public onClick(): void {
    this.activateTab();
  }

  @Watch('active')
  public onActiveChange(): void {
    if (this.active) {
      this.activateTab();
    }
  }

  public connectedCallback(): void {
    const ThTabs = transformTagName('th-tabs', 'th-tab', this.el);
    this.tabsEl = this.el.closest<HTMLThTabsElement>(ThTabs);
  }

  private activateTab(): void {
    this.tabsEl.setActiveTab(this.el);
  }


  @Listen('keydown')
  public handleKeyDown(ev: KeyboardEvent): void {
    if (document.activeElement === this.el && (ev.key === ' ' || ev.key === 'Enter')) {
      ev.preventDefault();
      this.el.click();
    }
  }

  public render(): JSX.Element {
    const ThIcon = transformTagName('th-icon', 'th-tab', this.el);

    return (
      <Host tabindex="0" role="tab">
        <ThIcon class="icon" />
        <slot />
        <div class="underline" />
      </Host>
    );
  }
}
