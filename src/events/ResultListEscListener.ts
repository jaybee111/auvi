import EventListenerBase from "./EventListenerBase";

export class ResultListEscListener extends EventListenerBase {
    register() {
        this.store.components.resultList?.addEventListener('keydown', (e) => {
            if (e.keyCode === 27) {
                this.store.events.publish('closeResultList');
                this.store.events.publish('focusSearchForm');
            }
        });
    }
}
