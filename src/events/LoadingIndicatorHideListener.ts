import EventListenerBase from "./EventListenerBase";

export class LoadingIndicatorHideListener extends EventListenerBase {
    register() {
        this.store.events.subscribe('hideLoadingIndicator', () => {
            this.store.components.loadingIndicator?.classList.remove('is-shown');
        });
    }
}
