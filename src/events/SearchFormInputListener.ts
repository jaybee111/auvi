import EventListenerBase from "./EventListenerBase";
import SearchService from "../services/SearchService";

export class SearchFormInputListener extends EventListenerBase {
    register() {
        if (this.store.components.searchForm) {
            this.store.components.searchForm.addEventListener('input', async (e) => {
                e.preventDefault();
                const searchPhrase = (e.target as HTMLInputElement).value;

                this.store.events.publish('closeResultList');

                if (searchPhrase.length >= this.store.options.minInputLength) {
                    this.store.events.publish('showLoadingIndicator');
                    const options = await (new SearchService(this.store).search(searchPhrase));
                    this.store.events.publish('hideLoadingIndicator');

                    this.store.events.publish('fillResultList', options);
                }
            });
        }
    }
}
