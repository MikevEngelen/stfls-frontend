import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('info-panel')
class InfoPanel extends LitElement {
  static styles = css`
  
  `;

  @property({ type: Number })
  selectedIndex: Number | undefined;

  render() {
    return html`
      <div>
        <h2>Info-panel</h2>
        <p>${this.selectedIndex}</p>
      </div>
    `;
  }
}
