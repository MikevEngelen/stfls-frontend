var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// src/app.ts
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './paginated-table';
import './filter';
let MyApp = class MyApp extends LitElement {
    constructor() {
        super(...arguments);
        this.apiEndpoint = "http://localhost:3000/gps";
    }
    static { this.styles = css `
    /* Add your styling here */
  `; }
    render() {
        return html `
      <simple-greeting></simple-greeting>
      <paginated-table .api=${this.apiEndpoint}></paginated-table>
    `;
    }
};
__decorate([
    property({ type: String })
], MyApp.prototype, "apiEndpoint", void 0);
MyApp = __decorate([
    customElement('my-app')
], MyApp);
export { MyApp };
// Add this line at the end to start the application
const app = document.createElement('my-app');
document.body.appendChild(app);
