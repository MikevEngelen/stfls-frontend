var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let SimpleGreeting = class SimpleGreeting extends LitElement {
    static { this.styles = css `p { color: blue }`; }
    render() {
        return html `
            <div class="o-sidebar">
                <form (submit)="applyFilters($event)">
                    <div>
                        <span for="sortBy">Sort by</span>
                        <select id="sortBy" name="SortBy">
                            <option default value="">None</option>
                            <option value="DeviceId">Device ID</option>
                            <option value="DeviceType">Device Type</option>
                            <option value="Timestamp">Timestamp</option>
                            <option value="Location">Location</option>
                        </select>
                        <div>
                            <input type="radio" name="Ascending" value="true" id="orderAscending" checked>
                            <label for="orderAscending">Ascending</label>
                        </div>
                        <div>
                            <input type="radio" name="Ascending" value="false" id="orderDescending">
                            <label for="orderDescending">Descending</label>
                        </div>
                    </div>
                    
                    <div>
                        <span>Search</span>
                        <input name="deviceId" type="text" placeholder="Device ID...">
                        <input name="deviceType" type="text" placeholder="Device Type...">
                    </div>

                    <div>
                        <span>Items per page</span>
                        <input name="PageSize" type="number" value="5" min="5" max="10">
                    </div>

                    <button type="submit">Apply filters</button>
                </form>
            </div>
            >`;
    }
};
__decorate([
    property({ type: Object })
], SimpleGreeting.prototype, "filters", void 0);
SimpleGreeting = __decorate([
    customElement('simple-greeting')
], SimpleGreeting);
export { SimpleGreeting };
