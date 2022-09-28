import EventListenerBase from "./EventListenerBase";
import ResultOptionsItemInterface from "../interfaces/ResultOptionsItemInterface";
import ResultListItemComponent from "../components/ResultListItemComponent";

export class ResultListFillListener extends EventListenerBase {
    register() {
        this.store.events.subscribe('fillResultList', (options: ResultOptionsItemInterface[]) => {
            if(this.store.components.resultList) {
                this.store.events.publish('clearResultList');
                if(options.length) {
                    this.store.events.publish('openResultList');

                    options.forEach((item) => {
                        // @ts-ignore
                        const resultListItem = new ResultListItemComponent(item, this.store).render();
                        if(resultListItem) {
                            this.store.components.resultList?.appendChild(resultListItem);
                        }
                    });
                }
            }
        });
    }
}
