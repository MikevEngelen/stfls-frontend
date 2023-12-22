var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let InfoPanel = class InfoPanel extends LitElement {
    static { this.styles = css `
  
  `; }
    connectedCallback() {
        super.connectedCallback();
        if (this.data == undefined)
            this.fetchData();
    }
    updated(changedProperties) {
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
            const options = {
                method: 'GET',
                headers: headers,
            };
            const response = await fetch(this.api + '/' + this.selectedIndex, options);
            const result = await response.json();
            console.log(result);
            this.data = result;
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    render() {
        return html `
      <div>
        <h2>Info-panel</h2>
        <p>${this.selectedIndex}</p>
        <p>${JSON.stringify(this.data)}</p>
      </div>
    `;
    }
};
__decorate([
    property({ type: Number })
], InfoPanel.prototype, "selectedIndex", void 0);
__decorate([
    property({ type: Object })
], InfoPanel.prototype, "data", void 0);
__decorate([
    property({ type: String })
], InfoPanel.prototype, "api", void 0);
InfoPanel = __decorate([
    customElement('info-panel')
], InfoPanel);
