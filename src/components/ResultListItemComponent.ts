import ResultOptionsItemInterface from "../interfaces/ResultOptionsItemInterface";
import {isFunction} from "../helpers/TypeHelper";
import AppStore from "../store/AppStore";

class ResultListItemComponent {
    private readonly item: ResultOptionsItemInterface;
    private readonly store: AppStore;
    private resultListItem: HTMLElement | undefined;

    constructor(item: ResultOptionsItemInterface, store: AppStore) {
        this.item = item;
        this.store = store;
    }

    render() {
        this.createElement();
        this.renderTemplate();
        this.registerClickListener();

        return this.resultListItem;
    }

    createElement() {
        this.resultListItem = document.createElement('a');
        if(this.item.url) {
            this.resultListItem.setAttribute('href', this.item.url);
        } else {
            this.resultListItem.setAttribute('href', '#');
        }
        this.resultListItem.classList.add('auvi-result-list-item');
        this.resultListItem.setAttribute('tabindex', '-1');
    }

    renderTemplate() {
        if(this.resultListItem) {
            if(isFunction(this.store.options.resultItemTemplate)) {
                this.resultListItem.innerHTML = this.store.options.resultItemTemplate(this.item);
            } else {
                this.resultListItem.innerText = this.item.value;
            }
        }
    }

    registerClickListener() {
        this.resultListItem?.addEventListener('click', (e) => {
            if(!this.item.url) {
                e.preventDefault();
            }
            this.store.events.publish('resultItemClicked', {
                ...this.item
            });
        });
    }
}

export default ResultListItemComponent;
