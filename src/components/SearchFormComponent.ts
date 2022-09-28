class SearchFormComponent {
    private readonly searchFormEl: HTMLInputElement | undefined;

    constructor(searchFormEl: HTMLInputElement) {
        this.searchFormEl = searchFormEl;

        // Clone el and store it to , because old el instance will be replaced (New child is ancestor of parent)
        this.searchFormEl = this.searchFormEl.cloneNode(true) as HTMLInputElement;
    }

    render(): HTMLElement | undefined {
        return this.searchFormEl;
    }

}

export default SearchFormComponent;
