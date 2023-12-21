import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
    static styles = css`p { color: blue }`;

    @property({ type: Object })
    filters: Object | undefined;


    render() {
        return html`
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
}