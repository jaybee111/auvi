import EventListenerBase from "./EventListenerBase";

export class ResultListTabListener extends EventListenerBase {
    register() {
        this.store.components.resultList?.addEventListener('keydown', (e) => {
            if (e.keyCode === 9) {
                this.store.events.publish('closeResultList');
            }
        });
    }
}
