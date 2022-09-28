import AppStore from "../store/AppStore";
import {isFunction} from "../helpers/TypeHelper";

class LoadingIndicatorComponent {
    private readonly store: AppStore;
    private loadingIndicatorEl: HTMLElement | undefined;

    constructor(store: AppStore) {
        this.store = store;
    }

    render(): HTMLElement | undefined {
        this.createElement();

        return this.loadingIndicatorEl;
    }

    createElement() {
        if(isFunction(this.store.options.loader)) {
            this.loadingIndicatorEl = document.createElement('div');
            this.loadingIndicatorEl.classList.add('auvi-loading-indicator-wrapper');
            this.loadingIndicatorEl.innerHTML = this.store.options.loader();
        }
    }

}

export default LoadingIndicatorComponent;
