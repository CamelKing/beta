import { CloneOptions } from './constant';
import { isPlainObject } from './isPlainObject';

// tslint:disable-next-line:cyclomatic-complexity
function _clone({ source, memory, goDeep }: CloneOptions): any {

  // quick handling of primitives and types which can not be cloned

  const sourceType: string = typeof source;
  if (source == null || sourceType === 'number' || sourceType === 'boolean')
    return source;
  else if (sourceType === 'string')
    return source.slice(0);
  else if (sourceType === 'symbol' || sourceType === 'function')
    return {};

  // memory to store cyclical references

  if (memory == null) memory = new Map();
  else if (memory.has(source)) return memory.get(source);

  // setup default & constants value

  goDeep = goDeep || false;            // goDeep default is false
  const CloneShallow: number = 0b000; // no recursive cloning
  const CloneMap: number = 0b001;     // recursive clone as map
  const CloneSet: number = 0b010;     // recursive clone as set
  const CloneKeys: number = 0b100;    // recursive clone object keys
  let deepCloneAction: number = CloneShallow;

  let output: object = {};

  if (source instanceof Boolean
    || source instanceof Number
    || source instanceof String) {

    output = new (source as any).constructor(source.valueOf());

  } else if (source instanceof Date) {

    output = new Date(source.getTime());

  } else if (source instanceof RegExp) {

    output = new RegExp(source.source, source.flags);

  } else if (source instanceof ArrayBuffer) {

    output = source.slice(0);

  } else if (ArrayBuffer.isView(source)) {

    // clone the buffer here is needed for view cloning,
    // this is not deep cloning
    const outputBuffer: ArrayBuffer
      = _clone({ source: source.buffer, memory, goDeep });

    if (source instanceof DataView) {

      output = new DataView(
        outputBuffer,
        source.byteOffset,
        source.byteLength);

    } else {

      // source is one of the typed array
      output = new (source as any).constructor(
        outputBuffer,
        source.byteOffset,
        (source as any).length);

    }

  } else if (source instanceof Map) {

    output = new Map();
    deepCloneAction = CloneMap;

  } else if (source instanceof Set) {

    output = new Set();
    deepCloneAction = CloneSet;

  } else if (typeof Blob !== 'undefined' && source instanceof Blob) {

    // TODO: Blob not supported in node js, can't test for now
    output = source.slice(0, source.size, source.type);

  } else if (Array.isArray(source)) {

    output = new Array(source.length);
    deepCloneAction = CloneKeys;

  } else if (!isPlainObject(source)) {

    return {};

  } else {

    deepCloneAction = CloneKeys;

  }

  // store object for future reference when recursive call
  memory.set(source, output);

  if (deepCloneAction === CloneMap) {

    // setup map cloning function based on goDeep
    type FnCloneMap = (v: any, k: any) => Map<any, any>;

    const FnCloneMap: FnCloneMap = goDeep ?
      (v: any, k: any) => (output as any).set(
        _clone({ source: k, memory, goDeep }),
        _clone({ source: v, memory, goDeep })) :
      (v: any, k: any) => (output as any).set(k, v);

    // clone the entire map
    (source as Map<any, any>).forEach(FnCloneMap);

  } else if (deepCloneAction === CloneSet) {

    // setup set cloning function based on goDeep
    type FnCloneSet = (v: any) => Set<any>;

    const fnCloneSet: FnCloneSet = goDeep ?
      (v: any) => (output as Set<any>)
        .add(_clone({ source: v, memory, goDeep })) :
      (v: any) => (output as Set<any>).add(v);

    // clone the entire set
    (source as Set<any>).forEach(fnCloneSet);

  } else if (deepCloneAction === CloneKeys) {

    type FnCloneKeys = (k: any) => void;

    const fnCloneKeys: FnCloneKeys = goDeep ?
      (k: any) => output[k] = _clone({ source: source[k], memory, goDeep }) :
      (k: any) => output[k] = source[k];

    let key: string;
    for (key in source) {
      if (source.hasOwnProperty(key)) fnCloneKeys(key);
    }

  }

  return output;

}

// tslint:disable-next-line:no-namespace
export namespace clone {

  export const shallow: <T> (source: T) => any
    = (source: any) => _clone({ source, goDeep: false });

  export const deep: <T> (source: T) => any
    = (source: any) => _clone({ source, goDeep: true });

}
