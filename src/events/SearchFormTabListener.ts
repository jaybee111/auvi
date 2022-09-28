import EventListenerBase from "./EventListenerBase";

export class SearchFormTabListener extends EventListenerBase {
    register() {
        this.store.components.searchForm?.addEventListener('keydown', (e) => {
            if (e.keyCode === 9) {
                this.store.events.publish('closeResultList');
                this.store.events.publish('hideLoadingIndicator');
                this.store.events.publish('stopCurrentRequest');
            }
        });
    }
}
