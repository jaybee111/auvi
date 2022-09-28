import EventListenerBase from "./EventListenerBase";

export class ResultListClearListener extends EventListenerBase {
    register() {
        this.store.events.subscribe('clearResultList', () => {
            if(this.store.components.resultList) {
                this.store.components.resultList.innerHTML = '';
            }
        });
    }
}
