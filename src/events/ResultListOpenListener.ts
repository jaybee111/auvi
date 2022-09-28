import EventListenerBase from "./EventListenerBase";
import {getPositionToPageHeight} from "../helpers/CssHelper";

export class ResultListOpenListener extends EventListenerBase {
    register() {
        this.store.events.subscribe('openResultList', () => {
            if(this.store.components.resultList) {
                this.store.components.resultList.classList.add('is-open');
                if(this.store.options.mode === 'tooltip') {
                    // Workarund, doesnt get height after setting "is-open" immediately
                    setTimeout(() => {
                        const position = getPositionToPageHeight(this.store.components.resultList as HTMLElement);
                        this.store.components.resultList?.setAttribute('style', `${position.position}: ${position.value};`);
                    }, 1);
                }
            }
        });
    }
}
