import AppStore from "../store/AppStore";
import {isElement} from "../helpers/TypeHelper";

class ResultListComponent {
    private readonly store: AppStore;
    private resultListEl: HTMLElement | undefined;

    constructor(store: AppStore) {
        this.store = store;
    }

    render(): HTMLElement {
        this.createElement();

        // @ts-ignore
        return this.resultListEl;
    }

    createElement() {
        if(this.store.options?.resultListTarget && isElement(this.store.options.resultListTarget)) {
            this.resultListEl = this.store.options.resultListTarget;
            if(this.resultListEl === undefined || !isElement(this.resultListEl)) {
                throw new Error(`Cant find resultListTarget "${this.store.options.resultListTarget}"`);
            }
        } else {
            this.resultListEl = document.createElement('div');
        }

        if(this.resultListEl) {
            this.resultListEl.classList.add('auvi-result-list');

            if(this.store.options?.mode === 'tooltip') {
                this.resultListEl.classList.add('is-tooltip');
            } else {
                this.resultListEl.classList.add('is-external');
            }
        }

    }

}

export default ResultListComponent;
