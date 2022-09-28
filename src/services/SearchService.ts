import AppStore from "../store/AppStore";
import ResultOptionsItemInterface from "../interfaces/ResultOptionsItemInterface";
import {isArray, isString} from "../helpers/TypeHelper";

class SearchService {
    private readonly store: AppStore;

    constructor(store: AppStore) {
        this.store = store;
    }

    async search(searchPhrase: string): Promise<ResultOptionsItemInterface[]> {
        let options: Array<ResultOptionsItemInterface> = [];
        if(isArray(this.store.options?.options)) {
            options = this.searchArray(searchPhrase);
        } else if (isString(this.store.options.options)) {
            options = await this.searchByUrl(searchPhrase);
        }

        return options;
    }

    searchArray(searchPhrase: string): ResultOptionsItemInterface[] {
        return (this.store.options?.options as ResultOptionsItemInterface[]).filter((item) => item.value?.indexOf(searchPhrase) !== -1);
    }

    async searchByUrl(searchPhrase: string): Promise<ResultOptionsItemInterface[]> {
        let options: Array<ResultOptionsItemInterface> = [];
        this.store.events.publish('stopCurrentRequest');
        const url = (this.store.options.options as String).replace('{term}', encodeURIComponent(searchPhrase));
        const controller = new AbortController();
        this.store.setAbortController(controller);
        const signal = controller.signal;
        try {
            options = await(await fetch(url, {signal})).json();
        } catch (error) {
            // @ts-ignore
            if (error.name != "AbortError") {
                throw new Error(`Request failed for ${url}: ${error}`);
            }
        }

        return options;
    }
}

export default SearchService;
