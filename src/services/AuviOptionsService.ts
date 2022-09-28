import ResultOptionsItemInterface from "../interfaces/ResultOptionsItemInterface";
import {isObject, isString} from "../helpers/TypeHelper";
import AuviOptionsInterface from "../interfaces/AuviOptionsInterface";
import AppStore from "../store/AppStore";

class AuviOptionsService {
    private store: AppStore;
    private defaultOptions: AuviOptionsInterface;

    constructor(store: AppStore) {
        this.store = store;
        this.defaultOptions = {
            minInputLength: 3,
            resultItemTemplate(optionsItem: ResultOptionsItemInterface) {
                // Prevent xss-injection
                const tempWrapperItem = document.createElement('span');
                tempWrapperItem.textContent = optionsItem.value;
                return `${tempWrapperItem.textContent}`;
            },
            loader() {
                return `<div class="auvi-loading-indicator"><div></div><div></div><div></div><div></div></div>`;
            },
            options: [],
            resultListTarget: undefined,
            mode: 'tooltip'
        };
    }

    getDefaultOptions() : AuviOptionsInterface {
        return this.defaultOptions;
    }

    parse(options?: AuviOptionsInterface): AuviOptionsInterface {
        let newOptions = this.getDefaultOptions();

        // Merge default options with individual options
        if(options) {
            newOptions = this.getOptionsByParameters(options);
        }

        // Merge default options with individual options by data-attributes
        if(options) {
            newOptions = this.getOptionsByDataAttributes(newOptions);
        }

        return newOptions;
    }

    getOptionsByParameters(options: AuviOptionsInterface) {
        let newOptions: AuviOptionsInterface;
        if(isObject(options)) {
            newOptions = {...this.defaultOptions, ...options};
        } else {
            newOptions = this.defaultOptions;
        }

        return newOptions;
    }

    getOptionsByDataAttributes(options: AuviOptionsInterface) {
        if(this.store.components.searchForm?.hasAttribute('data-min-input-length')) {
            options.minInputLength = Number(this.store.components.searchForm?.getAttribute('data-min-input-length'));
        }

        if(this.store.components.searchForm?.hasAttribute('data-options') && isString(this.store.components.searchForm?.getAttribute('data-options'))) {
            options.options = this.store.components.searchForm?.getAttribute('data-options') ?? this.defaultOptions.options;
        }

        if(this.store.components.searchForm?.hasAttribute('data-mode')) {
            // @ts-ignore
            options.mode = this.store.components.searchForm?.getAttribute('data-mode') ?? this.defaultOptions.mode;
        }

        return options;
    }
}

export default AuviOptionsService;
