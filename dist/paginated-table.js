var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let PaginatedTable = class PaginatedTable extends LitElement {
    static { this.styles = css `
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
  `; }
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
            const options = {
                method: 'GET',
                headers: headers,
            };
            const response = await fetch(this.api, options);
            const result = await response.json();
            this.data = result;
        }
        catch (error) {
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
            return html `<code>${this.data}</code><p>No data available.</p>`;
        }
        return html `
      <table>
        <thead>
          <tr>
            ${Object.keys(this.data.data[0]).map((label) => html `<th>${label}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.data.data.map((item) => html `
              <tr>
                <td>${item.DeviceId}</td>
                <td>${item.DeviceType}</td>
                <td>${item.TimeStamp}</td>
                <td>${item.Location}</td>
              </tr>
            `)}
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
};
__decorate([
    property({ type: Object })
], PaginatedTable.prototype, "data", void 0);
__decorate([
    property({ type: String })
], PaginatedTable.prototype, "api", void 0);
__decorate([
    property({ type: Object })
], PaginatedTable.prototype, "filterOptions", void 0);
PaginatedTable = __decorate([
    customElement('paginated-table')
], PaginatedTable);
// customElements.define('paginated-table', PaginatedTable);
