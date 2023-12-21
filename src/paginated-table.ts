import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface gpsModel {
  DeviceId: number;
  DeviceType: string;
  TimeStamp: string;
  Location: string;
}

interface PaginatedTableData {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalRecords: number;
  data: gpsModel[];
}

@customElement('paginated-table')
class PaginatedTable extends LitElement {
  static styles = css`
    table {
      background-color: white;
      border-radius: 20px;
      border: #BBB;
      box-shadow: 5px 5px 20px rgba(0,0,0,0.2);
      padding: 20px;
      font-family: sans-serif;
    }
    thead {
    }
    tr {

    }
    thead tr{
      background-color: #3895ff;
      color: white;
    }
    thead tr th {
      padding: .2rem 1rem;
    }
    tbody tr:nth-child(odd){
      background-color: #ddd;
    }
    tbody tr{
      border: none;
    }
    td {

    }
  `;

  @property({ type: Object })
  data: PaginatedTableData | undefined;
  @property({ type: String })
  api: string | undefined;
  @property({ type: Object })
  filterOptions: any | undefined;

  connectedCallback() {
    super.connectedCallback();
    if (this.data == undefined)
      this.fetchData();
  }

  async fetchData() {
    try {
      if (this.api === undefined) {
        console.error('API URL is undefined.');
        return;
      }

      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('page-number', this.data?.pageNumber.toString() || '1');

      const options: RequestInit = {
        method: 'GET',
        headers: headers,
      };

      const response = await fetch(this.api, options);
      const result = await response.json();

      this.data = result;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  handlePreviousClick() {
    if (this.data && this.data.pageNumber > 1) {
      this.data.pageNumber--;
      this.fetchData();
    }
  }

  handleNextClick() {
    if (this.data && this.data.pageNumber < this.data.totalPages) {
      this.data.pageNumber++;
      this.fetchData();
    }
  }

  render() {
    if (!this.data || !this.data.data || this.data.data.length === 0) {
      return html`<code>${this.data}</code><p>No data available.</p>`;
    }

    return html`
      <table>
        <thead>
          <tr>
            ${Object.keys(this.data.data[0]).map(
              (label: string) => html `<th>${label}</th>`
            )}
          </tr>
        </thead>
        <tbody>
          ${this.data.data.map(
            (item: gpsModel) => html`
              <tr>
                <td>${item.DeviceId}</td>
                <td>${item.DeviceType}</td>
                <td>${item.TimeStamp}</td>
                <td>${item.Location}</td>
              </tr>
            `
          )}
        </tbody>
      </table>
      <div>
        <p>Page ${this.data.pageNumber} of ${this.data.totalPages}</p>
        <p>Total Records: ${this.data.totalRecords}</p>
      </div>
      <div>
        <button @click=${this.handlePreviousClick}>Previous</button>
        <button @click=${this.handleNextClick}>Next</button>
      </div>
    `;
  }
}

// customElements.define('paginated-table', PaginatedTable);
