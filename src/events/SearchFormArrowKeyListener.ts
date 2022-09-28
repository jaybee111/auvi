import EventListenerBase from "./EventListenerBase";

export class SearchFormArrowKeyListener extends EventListenerBase {
    register() {
        this.store.components.searchForm?.addEventListener('keydown', (e) => {
            if (e.keyCode === 38) {
                const activeElement = document.activeElement;
                const lastChild = this.store.components.resultList?.querySelector('.auvi-result-list-item:last-child') as HTMLElement;
                if(activeElement === this.store.components.searchForm) {
                    lastChild?.focus();
                }
            }
            else if (e.keyCode === 40) {
                const activeElement = document.activeElement;
                const firstChild = this.store.components.resultList?.querySelector('.auvi-result-list-item:first-child') as HTMLElement;
                if(activeElement === this.store.components.searchForm) {
                    firstChild?.focus();
                }
            }
        });
    }
}
