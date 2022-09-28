import EventListenerBase from "./EventListenerBase";

export class LoadingIndicatorShowListener extends EventListenerBase {
    register() {
        this.store.events.subscribe('showLoadingIndicator', () => {
            this.store.components.loadingIndicator?.classList.add('is-shown');
        });
    }
}
