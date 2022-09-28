import ResultOptionsItemInterface from "./ResultOptionsItemInterface";

interface AuviOptionsInterface {
    minInputLength: Number,
    options: Array<ResultOptionsItemInterface> | string,
    resultItemTemplate: (optionsItem: ResultOptionsItemInterface) => string,
    resultListTarget: HTMLElement | undefined,
    loader: () => string,
    mode: "external" | "tooltip"
}

export default AuviOptionsInterface;
