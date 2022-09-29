import EventListenerBase from "./EventListenerBase";

export class ResultListCloseListener extends EventListenerBase {
    register() {
        this.store.events.subscribe('closeResultList', () => {
            if(this.store.components.resultList) {
                this.store.components.resultList.classList.remove('is-open');
            }
        });
    }
}
