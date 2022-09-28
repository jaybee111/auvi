import PubSub from "../services/PubSubService";
import AuviOptionsInterface from "../interfaces/AuviOptionsInterface";
import AuviOptionsService from "../services/AuviOptionsService";

class AppStore {
    public events: PubSub;
    public components: {
        searchForm: HTMLInputElement | undefined;
        resultList: HTMLElement | undefined;
        loadingIndicator: HTMLElement | undefined;
    };
    public currentRequestAbortController: AbortController | undefined;
    public options: AuviOptionsInterface;

    constructor() {
        this.events = new PubSub();
        this.components = {
            searchForm: undefined,
            resultList: undefined,
            loadingIndicator: undefined,
        };
        this.currentRequestAbortController = undefined;
        this.options = new AuviOptionsService(this).getDefaultOptions();
    }

    setComponentEl(key: "searchForm" | "resultList" | "loadingIndicator", componentEl: Element) {
        // @ts-ignore
        this.components[key] = componentEl;
    }

    setOptions(options: AuviOptionsInterface) {
        this.options = options;
    }

    setAbortController(controller: AbortController | undefined) {
        this.currentRequestAbortController = controller;
    }
}

export default AppStore;
