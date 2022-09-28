import EventListenerBase from "./EventListenerBase";

export class SearchFormFocusListener extends EventListenerBase {
    register() {
        this.store.events.subscribe('focusSearchForm', () => {
            this.store.components.searchForm?.focus();
        });
    }
}
