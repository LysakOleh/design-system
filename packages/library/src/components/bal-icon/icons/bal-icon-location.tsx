import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'bal-icon-location',
  styleUrl: '../bal-icon-svg.scss',
  shadow: false,
  scoped: true,
})
export class IconLocation {
  /**
   * Defines the size of the icon.
   */
  @Prop() size: 'xsmall' | 'small' | 'medium' | 'large' | '' = ''

  render() {
    return (
      <Host class={{ [`is-size-${this.size}`]: !!this.size }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M23 7.5C23 3.333 19.667 0 15.5 0A7.469 7.469 0 008 7.5c0 3.833 3 7 6.667 7.333v14.334c0 .5.333.833.833.833.5 0 .833-.333.833-.833V14.833C20 14.5 23 11.333 23 7.5zm-7.5 5.833c-3.167 0-5.833-2.666-5.833-5.833 0-3.167 2.666-5.833 5.833-5.833 3.167 0 5.833 2.666 5.833 5.833 0 3.167-2.666 5.833-5.833 5.833z"/><path d="M18.833 8.333C18.333 8.333 18 8 18 7.5 18 6.167 16.833 5 15.5 5c-.5 0-.833-.333-.833-.833 0-.5.333-.834.833-.834A4.126 4.126 0 0119.667 7.5c0 .5-.334.833-.834.833z"/></svg>
      </Host>
    );
  }
}