import EventListenerBase from "./EventListenerBase";

export class ResultListCloseListener extends EventListenerBase {
    register() {
        this.store.events.subscribe('closeResultList', () => {
            this.store.components.resultList?.classList.remove('is-open');
            this.store.components.wrapper?.classList.remove('is-open');
        });
    }
}
