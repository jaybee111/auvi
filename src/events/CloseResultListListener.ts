import EventListenerBase from "./EventListenerBase";

export class CloseResultListListener extends EventListenerBase {
    register() {
        this.store.events.subscribe('closeResultList', () => {
            if(this.store.components.resultList) {
                this.store.components.resultList.classList.remove('is-open');
            }
        });
    }
}
