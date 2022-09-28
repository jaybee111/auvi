import EventListenerBase from "./EventListenerBase";

export class ResultListArrowKeyListener extends EventListenerBase {
    register() {
        this.store.components.resultList?.addEventListener('keydown', (e) => {
            if (e.keyCode === 38) {
                const activeElement = document.activeElement;
                const lastChild = this.store.components.resultList?.querySelector('.auvi-result-list-item:last-child') as HTMLElement;
                if(activeElement?.classList.contains('auvi-result-list-item')) {
                    const previousElementSibling = document.activeElement?.previousElementSibling as HTMLElement;
                    if(previousElementSibling?.classList.contains('auvi-result-list-item')) {
                        previousElementSibling.focus();
                    } else {
                        lastChild?.focus();
                    }
                }

            } else if (e.keyCode === 40) {
                const activeElement = document.activeElement;
                const firstChild = this.store.components.resultList?.querySelector('.auvi-result-list-item:first-child') as HTMLElement;
                if(activeElement?.classList.contains('auvi-result-list-item')) {
                    const nextElementSibling = document.activeElement?.nextElementSibling as HTMLElement;
                    if(nextElementSibling?.classList.contains('auvi-result-list-item')) {
                        nextElementSibling.focus();
                    } else {
                        firstChild?.focus();
                    }
                }
            }
        });
    }
}
