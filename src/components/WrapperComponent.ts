import ResultListComponent from "./ResultListComponent";
import SearchFormComponent from "./SearchFormComponent";
import AppStore from "../store/AppStore";
import LoadingIndicatorComponent from "./LoadingIndicatorComponent";

class WrapperComponent {
    private readonly store: AppStore;
    private readonly formEl: HTMLInputElement;
    private wrapperEl: HTMLElement | undefined;

    constructor(formEl: HTMLInputElement, store: AppStore) {
        this.store = store;
        this.formEl = formEl;
    }

    render(): HTMLElement | undefined {
        this.createElement();

        return this.wrapperEl;
    }

    createElement() {
        this.wrapperEl = document.createElement('div');
        this.wrapperEl.classList.add('auvi-wrapper');

        // Result list component
        const resultList = new ResultListComponent(this.store);
        const resultListEl = resultList.render();
        if(resultListEl) {
            this.store.setComponentEl('resultList', resultListEl);
        }

        // Build Form component
        const searchForm = new SearchFormComponent(this.formEl);
        const searchFormEl = searchForm.render();
        if(searchFormEl) {
            this.store.setComponentEl('searchForm', searchFormEl);
        }

        // Loading indicator component
        const loadingIndicator = new LoadingIndicatorComponent(this.store);
        const loadingIndicatorEl = loadingIndicator.render();
        if(loadingIndicatorEl) {
            this.store.setComponentEl('loadingIndicator', loadingIndicatorEl);
        }

        // Append elements to wrapper
        if(searchFormEl) {
            this.wrapperEl.appendChild(searchFormEl);
        }

        if(loadingIndicatorEl) {
            this.wrapperEl.appendChild(loadingIndicatorEl);
        }

        // Append only in tooltip mode -> external mode = result_list has already been added to DOM
        if(resultListEl && this.store.options?.mode == 'tooltip') {
            this.wrapperEl.appendChild(resultListEl);
        }
    }

}

export default WrapperComponent;
