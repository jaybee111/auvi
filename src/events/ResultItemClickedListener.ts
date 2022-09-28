import ResultOptionsItemInterface from "../interfaces/ResultOptionsItemInterface";
import EventListenerBase from "./EventListenerBase";

export class ResultItemClickedListener extends EventListenerBase {
    register() {
        this.store.events.subscribe('resultItemClicked', (item: ResultOptionsItemInterface) => {
            if(this.store.components.searchForm) {
                this.store.components.searchForm.value = item.value;
                this.store.components.searchForm?.focus();
                this.store.events.publish('closeResultList');
            }
        });
    }
}
