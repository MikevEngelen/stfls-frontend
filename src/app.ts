// src/app.ts
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './paginated-table';
import './filter';
import './info-panel';

@customElement('my-app')
export class MyApp extends LitElement {
  @property({ type: String })
  apiEndpoint: string = "http://localhost:3000/gps";


  static styles = css`
    /* Add your styling here */
  `;

  @property({ type: Number })
  selectedIndex: Number | undefined;
  handleRowClicked(event: CustomEvent) {
    console.log(event.detail.index);
    this.selectedIndex = event.detail.index;
  }

  render() {
      return html`
      <simple-greeting></simple-greeting>
      <paginated-table .api=${this.apiEndpoint} @row-clicked=${this.handleRowClicked}></paginated-table>
      <info-panel .api=${this.apiEndpoint} .selectedIndex=${this.selectedIndex}></info-panel>
  `;
  }
}

// Add this line at the end to start the application
const app = document.createElement('my-app');
document.body.appendChild(app);