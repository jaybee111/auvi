import AppStore from "../store/AppStore";
import EventListenerInterface from "../interfaces/EventListenerInterface";

export default class EventListenerBase implements EventListenerInterface {
    protected store: AppStore;

    public constructor(store: AppStore) {
        this.store = store;
    }

    register(): void {}

}
