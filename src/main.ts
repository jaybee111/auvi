import './assets/css/style.scss';
import AuviOptionsInterface from "./interfaces/AuviOptionsInterface";
import {isElement} from "./helpers/TypeHelper";
import WrapperComponent from "./components/WrapperComponent";
import AuviInterface from "./interfaces/AuviInterface";
import EventListenerItemInterface from "./interfaces/EventListenerItemInterface";
import AppStore from "./store/AppStore";
import AuviOptionsService from "./services/AuviOptionsService";
import {registerListeners} from "./helpers/EventHelper";
import {ResultItemClickedListener} from "./events/ResultItemClickedListener";
import {SearchFormInputListener} from "./events/SearchFormInputListener";
import {CloseResultListListener} from "./events/CloseResultListListener";
import {SearchFormArrowKeyListener} from "./events/SearchFormArrowKeyListener";
import {DocumentClickListener} from "./events/DocumentClickListener";
import {LoadingIndicatorHideListener} from "./events/LoadingIndicatorHideListener";
import {LoadingIndicatorShowListener} from "./events/LoadingIndicatorShowListener";
import {ResultListArrowKeyListener} from "./events/ResultListArrowKeyListener";
import {ResultListClearListener} from "./events/ResultListClearListener";
import {ResultListEscListener} from "./events/ResultListEscListener";
import {ResultListFillListener} from "./events/ResultListFillListener";
import {ResultListOpenListener} from "./events/ResultListOpenListener";
import {ResultListTabListener} from "./events/ResultListTabListener";
import {SearchFormEscListener} from "./events/SearchFormEscListener";
import {SearchFormFocusListener} from "./events/SearchFormFocusListener";
import {SearchFormTabListener} from "./events/SearchFormTabListener";
import {StopCurrentRequestListener} from "./events/StopCurrentRequestListener";
import {ResultListScrollListener} from "./events/ResultListScrollListener";

// eslint-disable-next-line no-unused-vars
export default class Auvi implements AuviInterface {
    public options: AuviOptionsInterface;
    public el: HTMLInputElement;
    public eventListeners: EventListenerItemInterface[] = [];
    private store: AppStore;

    public constructor(el: HTMLInputElement, options?: AuviOptionsInterface) {
        if(!isElement(el)) {
            throw new Error('Selected element is not type of Element. Current type: '+ typeof el);
        }

        // Initialize global store
        this.store = new AppStore();

        this.el = el;

        // Parse options and add to global store
        this.options = new AuviOptionsService(this.store).parse(options);
        this.store.setOptions(this.options);
    }

    init() {
        // Build Wrapper for input
        const wrapperEl = new WrapperComponent(this.el, this.store).render();

        // Replace input with wrapper
        if(this.el.parentNode) {
            this.el.parentNode.replaceChild(wrapperEl as Node, this.el);
        }

        // Refresh element instance, because old instance cloned and appended to wrapper
        if(wrapperEl) {
            this.el = wrapperEl.querySelector(this.el.tagName) as HTMLInputElement;
        }

        // Register Listeners
        registerListeners([
            new CloseResultListListener(this.store),
            new DocumentClickListener(this.store),
            new LoadingIndicatorHideListener(this.store),
            new LoadingIndicatorShowListener(this.store),
            new ResultItemClickedListener(this.store),
            new ResultListArrowKeyListener(this.store),
            new ResultListClearListener(this.store),
            new ResultListEscListener(this.store),
            new ResultListFillListener(this.store),
            new ResultListOpenListener(this.store),
            new ResultListScrollListener(this.store),
            new ResultListTabListener(this.store),
            new SearchFormArrowKeyListener(this.store),
            new SearchFormEscListener(this.store),
            new SearchFormFocusListener(this.store),
            new SearchFormInputListener(this.store),
            new SearchFormTabListener(this.store),
            new StopCurrentRequestListener(this.store),
        ]);

        return this;
    }

    on(eventName: string, listener: () => void) {
        this.store.events.subscribe(eventName, listener);

        return this;
    }

    destroy() {
        this.eventListeners.forEach((eventListenerItem) => {
            this.el.removeEventListener(eventListenerItem.eventName, eventListenerItem.listener);
        });
    }
}
