import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('info-panel')
class InfoPanel extends LitElement {
  static styles = css`
  
  `;

  @property({ type: Number })
  selectedIndex: Number | undefined;
  @property({ type: Object })
  data: Object | undefined;
  @property({ type: String })
  api: string | undefined;

  connectedCallback() {
    super.connectedCallback();
    if (this.data == undefined)
      this.fetchData();
  }

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties);

    if (changedProperties.has('selectedIndex')) {
      this.fetchData();
    }
  }

  async fetchData() {
    try {
      if (this.api === undefined) {
        console.error('API URL is undefined.');
        return;
      }

      const headers = new Headers();
      headers.append('Content-Type', 'application/json');

      const options: RequestInit = {
        method: 'GET',
        headers: headers,
      };

      const response = await fetch(this.api+'/'+this.selectedIndex, options);
      const result = await response.json();
      console.log(result);

      this.data = result;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  render() {
    return html`
      <div>
        <h2>Info-panel</h2>
        <p>${this.selectedIndex}</p>
        <p>${JSON.stringify(this.data)}</p>
      </div>
    `;
  }
}
