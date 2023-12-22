import { LitElement } from 'lit';
import './paginated-table';
import './filter';
import './info-panel';
export declare class MyApp extends LitElement {
    apiEndpoint: string;
    static styles: import("lit").CSSResult;
    selectedIndex: Number | undefined;
    handleRowClicked(event: CustomEvent): void;
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=app.d.ts.map