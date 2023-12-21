// src/app.ts
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './paginated-table';
import './filter';

@customElement('my-app')
export class MyApp extends LitElement {
    @property({ type: String })
    apiEndpoint: string = "http://localhost:3000/gps";


    static styles = css`
    /* Add your styling here */
  `;

    render() {
        return html`
      <simple-greeting></simple-greeting>
      <paginated-table .api=${this.apiEndpoint}></paginated-table>
    `;
    }
}

// Add this line at the end to start the application
const app = document.createElement('my-app');
document.body.appendChild(app);