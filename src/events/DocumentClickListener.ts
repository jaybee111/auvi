import EventListenerBase from "./EventListenerBase";

export class DocumentClickListener extends EventListenerBase {
    register() {
        document.addEventListener('click', () => {
            this.store.events.publish('closeResultList');
        });
    }
}
