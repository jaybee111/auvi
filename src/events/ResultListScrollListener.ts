import EventListenerBase from "./EventListenerBase";
import {debounce} from "../helpers/EventHelper";
import {getPositionToPageHeight} from "../helpers/CssHelper";

export class ResultListScrollListener extends EventListenerBase {
    register() {
        document.addEventListener('scroll',  debounce(() => {
            if(this.store.options.mode === 'tooltip' && this.store.components.resultList?.classList.contains('is-open')) {
                const position = getPositionToPageHeight(this.store.components.resultList);
                this.store.components.resultList?.setAttribute('style', `${position.position}: ${position.value};`);
            }
        }));
    }
}
