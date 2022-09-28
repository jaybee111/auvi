import EventListenerBase from "./EventListenerBase";

export class StopCurrentRequestListener extends EventListenerBase {
    register() {
        this.store.events.subscribe('stopCurrentRequest', () => {
            if(this.store.currentRequestAbortController) {
                this.store.currentRequestAbortController.abort();
                this.store.setAbortController(undefined);
            }
        });
    }
}
