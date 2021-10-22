import { Component, ComponentInterface, h, Host, JSX } from '@stencil/core';

@Component({
  tag: 'th-icon',
  styleUrl: 'icon.css',
  shadow: true,
})
export class IconComponent implements ComponentInterface {
  public render(): JSX.Element {
    return <Host>⌘</Host>;
  }
}
