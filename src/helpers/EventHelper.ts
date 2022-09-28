import EventListenerInterface from "../interfaces/EventListenerInterface";

function registerListeners(listeners: EventListenerInterface[]) {
    listeners.forEach((listener: EventListenerInterface) => {
        listener.register();
    });
}

function debounce(func: { (): void; apply?: any; }, timeout = 300){
    // @ts-ignore
    let timer;
    return (...args: any) => {
        // @ts-ignore
        clearTimeout(timer);
        timer = setTimeout(() => {
            // @ts-ignore
            func.apply(this, args); }
        , timeout);
    };
}

export {registerListeners, debounce};
