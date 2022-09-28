function isObject(obj: any): Boolean {
    return obj !== undefined && obj !== null && obj.constructor === Object;
}

function isElement(el: any): Boolean {
    return el instanceof Element;
}

function isArray(arr: any): Boolean {
    return arr !== undefined && arr !== null && arr.constructor === Array;
}

function isPromise(p: any): Boolean {
    return typeof p === 'object' && typeof p.then === 'function';
}

function returnsPromise(f: any): Boolean {
    return f.constructor.name === 'AsyncFunction' || (typeof f === 'function' && isPromise(f()));
}

function isFunction(f: any): Boolean {
    return f instanceof Function;
}

function isString(s: any): Boolean {
    return typeof s === 'string' || s instanceof String;
}

function isset(obj: any): boolean {
    return obj !== undefined;
}

export { isObject, isElement, isArray, returnsPromise, isFunction, isset, isString};
