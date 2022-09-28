function getPositionToPageHeight(el: HTMLElement) {
    const heightEl = el.offsetHeight ?? 0;
    //const heightInput = this.store.components.searchForm?.offsetHeight ?? 0;
    const pageHeight = window.innerHeight ?? 0;
    const positionEl = el.getBoundingClientRect().y ?? 0;

    if((heightEl + positionEl) >= pageHeight) {
        return {
            position : 'top',
            value: `-${heightEl}px`
        }
    } else {
        return {
            position : 'bottom',
            value: `-${heightEl}px`
        }
    }
}

export {getPositionToPageHeight};
