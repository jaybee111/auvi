import AuviOptionsInterface from "./AuviOptionsInterface";

interface AuviInterface {
    options?: AuviOptionsInterface,
    el: Element,
    init: () => AuviInterface,
    on?:(
        eventName: "init" | "resultItemClicked",
        listener: () => void
    ) => void,
    destroy:() => void,
}

export default AuviInterface;
