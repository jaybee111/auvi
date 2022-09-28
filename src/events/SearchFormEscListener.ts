import EventListenerBase from "./EventListenerBase";

export class SearchFormEscListener extends EventListenerBase {
    register() {
        this.store.components.searchForm?.addEventListener('keydown', (e) => {
            if (e.keyCode === 27) {
                this.store.events.publish('closeResultList');
                this.store.components.searchForm?.focus();
                this.store.events.publish('hideLoadingIndicator');
                this.store.events.publish('stopCurrentRequest');
            }
        });
    }
}
