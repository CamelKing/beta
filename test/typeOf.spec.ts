// tslint:disable:max-file-line-count

import { expect, should } from 'chai';
import { typeOf } from '../src/typeOf';

should();

describe(`typeOf() - @category Language`, () => {

  describe(`.is<data type> should check the types correctly`, () => {

    it(`.isFloat64Array(new Float64Array()) => true`, () => {
      typeOf.isFloat64Array(new Float64Array(2)).should.equal(true);
    });

    it(`.isFloat32Array(new Float32Array()) => true`, () => {
      typeOf.isFloat32Array(new Float32Array(2)).should.equal(true);
    });

    it(`.isUint32Array(new Uint32Array()) => true`, () => {
      typeOf.isUint32Array(new Uint32Array(2)).should.equal(true);
    });

    it(`.isInt32Array(new Int32Array()) => true`, () => {
      typeOf.isInt32Array(new Int32Array(2)).should.equal(true);
    });

    it(`.isUint16Array(new Uint16Array()) => true`, () => {
      typeOf.isUint16Array(new Uint16Array(2)).should.equal(true);
    });

    it(`.isInt16Array(new Int16Array()) => true`, () => {
      typeOf.isInt16Array(new Int16Array(2)).should.equal(true);
    });

    it(`.isUint8ClampedArray(new Uint8ClampedArray()) => true`, () => {
      typeOf.isUint8ClampedArray(new Uint8ClampedArray(2)).should.equal(true);
    });

    it(`.isUint8Array(new Uint8Array()) => true`, () => {
      typeOf.isUint8Array(new Uint8Array(2)).should.equal(true);
    });

    it(`.isInt8Array(new Int8Array()) => true`, () => {
      typeOf.isInt8Array(new Int8Array(2)).should.equal(true);
    });

    it(`.isRegExp(/abc/) => true`, () => {
      typeOf.isRegExp(/abc/).should.equal(true);
    });

    it(`.isBuffer(new Buffer()) => true`, () => {
      typeOf.isBuffer(new Buffer(2)).should.equal(true);
    });

    it(`.isArrayBuffer(new ArrayBuffer()) => true`, () => {
      typeOf.isArrayBuffer(new ArrayBuffer(2)).should.equal(true);
    });

    it(`.isMap(new Map()) => true`, () => {
      typeOf.isMap(new Map()).should.equal(true);
    });

    it(`.isWeakMap(new WeakMap()) => true`, () => {
      typeOf.isWeakMap(new WeakMap()).should.equal(true);
    });

    it(`.isPromise(Promise.resolve(123)) => true`, () => {
      typeOf.isPromise(Promise.resolve(123)).should.equal(true);
    });

    it(`.isFunction(()=>123) => true`, () => {
      typeOf.isFunction(() => 123).should.equal(true);
    });

    it(`.isError(new Error()) => true`, () => {
      typeOf.isError(new Error()).should.equal(true);
    });

    it(`.isSet(new Set()) => true`, () => {
      typeOf.isSet(new Set()).should.equal(true);
    });

    it(`.isWeakSet(new WeakSet()) => true`, () => {
      typeOf.isWeakSet(new WeakSet()).should.equal(true);
    });

    it(`.isDate(new Date()) => true`, () => {
      typeOf.isDate(new Date()).should.equal(true);
    });

    it(`.isObject({a:1}) => true`, () => {
      typeOf.isObject({ a: 1 }).should.equal(true);
    });

    it(`.isArray([1,2,3]) => true`, () => {
      typeOf.isArray([1, 2, 3]).should.equal(true);
    });

    it(`.isSymbol(Symbol()) => true`, () => {
      typeOf.isSymbol(Symbol()).should.equal(true);
    });

    it(`.isNumber(123) => true`, () => {
      typeOf.isNumber(123).should.equal(true);
    });

    it(`.isString('hello') => true`, () => {
      typeOf.isString('hello').should.equal(true);
    });

    it(`.isBoolean(true) => true`, () => {
      typeOf.isBoolean(true).should.equal(true);
    });

    it(`.isNaN(NaN) => true`, () => {
      typeOf.isNaN(NaN).should.equal(true);
    });

    it(`.isNull(null) => true`, () => {
      typeOf.isNull(null).should.equal(true);
    });

    it(`.isUndefined(undefined) => true`, () => {
      typeOf.isUndefined(undefined).should.equal(true);
    });

  });

  describe(`should check the types correctly by second param.`, () => {

    it(`(new Float64Array(),'float64array') => true`, () => {
      typeOf(new Float64Array(2), 'float64array').should.equal(true);
    });

    it(`(new Float32Array(),'float32array') => true`, () => {
      typeOf(new Float32Array(2), 'float32array').should.equal(true);
    });

    it(`(new Uint32Array(),'uint32array') => true`, () => {
      typeOf(new Uint32Array(2), 'uint32array').should.equal(true);
    });

    it(`(new Int32Array(),'int32array') => true`, () => {
      typeOf(new Int32Array(2), 'int32array').should.equal(true);
    });

    it(`(new Uint16Array(),'uint16array') => true`, () => {
      typeOf(new Uint16Array(2), 'uint16array').should.equal(true);
    });

    it(`(new Int16Array(),'int16array') => true`, () => {
      typeOf(new Int16Array(2), 'int16array').should.equal(true);
    });

    it(`(new Uint8ClampedArray(),'uint8clampedarray') => true`, () => {
      typeOf(new Uint8ClampedArray(2), 'uint8clampedarray').should.equal(true);
    });

    it(`(new Uint8Array(),'uint8array') => true`, () => {
      typeOf(new Uint8Array(2), 'uint8array').should.equal(true);
    });

    it(`(new Int8Array(),'int8array') => true`, () => {
      typeOf(new Int8Array(2), 'int8array').should.equal(true);
    });

    it(`(/abc/,'regexp') => true`, () => {
      typeOf(/abc/, 'regexp').should.equal(true);
    });

    it(`(new Buffer(),'buffer') => true`, () => {
      typeOf(new Buffer(2), 'buffer').should.equal(true);
    });

    it(`(new ArrayBuffer(),'arraybuffer') => true`, () => {
      typeOf(new ArrayBuffer(2), 'arraybuffer').should.equal(true);
    });

    it(`(new Map(),'map') => true`, () => {
      typeOf(new Map(), 'map').should.equal(true);
    });

    it(`(new WeakMap(),'weakmap') => true`, () => {
      typeOf(new WeakMap(), 'weakmap').should.equal(true);
    });

    it(`(Promise.resolve(123),'promise') => true`, () => {
      typeOf(Promise.resolve(123), 'promise').should.equal(true);
    });

    it(`(()=>123,'function') => true`, () => {
      typeOf(() => 123, 'function').should.equal(true);
    });

    it(`(new Error(),'error') => true`, () => {
      typeOf(new Error(), 'error').should.equal(true);
    });

    it(`(new Set(),'set') => true`, () => {
      typeOf(new Set(), 'set').should.equal(true);
    });

    it(`(new WeakSet(),'weakset') => true`, () => {
      typeOf(new WeakSet(), 'weakset').should.equal(true);
    });

    it(`(new Date(),'date') => true`, () => {
      typeOf(new Date(), 'date').should.equal(true);
    });

    it(`({a:1},'object') => true`, () => {
      typeOf({ a: 1 }, 'object').should.equal(true);
    });

    it(`([1,2,3],'array') => true`, () => {
      typeOf([1, 2, 3], 'array').should.equal(true);
    });

    it(`(Symbol(),'symbol') => true`, () => {
      typeOf(Symbol(), 'symbol').should.equal(true);
    });

    it(`(123,'number') => true`, () => {
      typeOf(123, 'number').should.equal(true);
    });

    it(`('hello','string') => true`, () => {
      typeOf('hello', 'string').should.equal(true);
    });

    it(`(true,'boolean') => true`, () => {
      typeOf(true, 'boolean').should.equal(true);
    });

    it(`(NaN,'nan') => true`, () => {
      typeOf(NaN, 'nan').should.equal(true);
    });

    it(`(null,'null') => true`, () => {
      typeOf(null, 'null').should.equal(true);
    });

    it(`(undefined,'undefined') => true`, () => {
      typeOf(undefined, 'undefined').should.equal(true);
    });


  });

  describe(`should return the type of Float64Array`, () => {

    it(`new Float64Array() => uint32array`, () => {

      const orig: Float64Array = new Float64Array(1);
      const input: Float64Array = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('float64array');

    });

  });

  describe(`should return the type of Float32Array`, () => {

    it(`new Float32Array() => uint32array`, () => {

      const orig: Float32Array = new Float32Array(1);
      const input: Float32Array = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('float32array');

    });

  });

  describe(`should return the type of Uint32Array`, () => {

    it(`new Uint32Array() => uint32array`, () => {

      const orig: Uint32Array = new Uint32Array(1);
      const input: Uint32Array = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('uint32array');

    });

  });

  describe(`should return the type of Int32Array`, () => {

    it(`new Int32Array() => int32array`, () => {

      const orig: Int32Array = new Int32Array(1);
      const input: Int32Array = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('int32array');

    });

  });

  describe(`should return the type of Uint16Array`, () => {

    it(`new Uint16Array() => uint16array`, () => {

      const orig: Uint16Array = new Uint16Array(1);
      const input: Uint16Array = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('uint16array');

    });

  });

  describe(`should return the type of Int16Array`, () => {

    it(`new Int16Array() => int16array`, () => {

      const orig: Int16Array = new Int16Array(1);
      const input: Int16Array = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('int16array');

    });

  });

  describe(`should return the type of Uint8ClampedArray`, () => {

    it(`new Uint8ClampedArray() => uint8clampedarray`, () => {

      const orig: Uint8ClampedArray = new Uint8ClampedArray(1);
      const input: Uint8ClampedArray = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('uint8clampedarray');

    });

  });

  describe(`should return the type of Uint8Array`, () => {

    it(`new Uint8Array() => uint8array`, () => {

      const orig: Uint8Array = new Uint8Array(1);
      const input: Uint8Array = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('uint8array');

    });

  });

  describe(`should return the type of Int8Array`, () => {

    it(`new Int8Array() => int8array`, () => {

      const orig: Int8Array = new Int8Array(1);
      const input: Int8Array = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('int8array');

    });

  });

  describe(`should return the type of Reg Exp`, () => {

    it(`/abc/ => regexp`, () => {

      const orig: RegExp = /123/;
      const input: RegExp = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('regexp');

    });

  });

  describe(`should return the type of Buffer`, () => {

    it(`new Buffer() => buffer`, () => {

      const orig: Buffer = new Buffer(2);
      const input: Buffer = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('buffer');

    });

  });

  describe(`should return the type of ArrayBuffer`, () => {

    it(`new ArrayBuffer() => arraybuffer`, () => {

      const orig: ArrayBuffer = new ArrayBuffer(2);
      const input: ArrayBuffer = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('arraybuffer');

    });

  });

  describe(`should return the type of map`, () => {

    it(`new Map() => map`, () => {

      const orig: Map<any, any> = new Map();
      const input: Map<any, any> = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('map');

    });

  });

  describe(`should return the type of weak map`, () => {

    it(`new WeakMap() => weakmap`, () => {

      const orig: WeakMap<any, any> = new WeakMap();
      const input: WeakMap<any, any> = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('weakmap');

    });

  });

  describe(`should return the type of promise`, () => {

    type pmNumber = Promise<number>;
    const pm: pmNumber
      = new Promise((resolve: any, reject: any) => {
        resolve(123);
      });

    it(`pm => promise`, () => {

      const orig: pmNumber = pm;
      const input: pmNumber = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('promise');

    });

    it(`Promise.resolve(123) => promise`, () => {

      const orig: pmNumber = Promise.resolve(123);
      const input: pmNumber = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('promise');

    });

  });

  describe(`should return the type of function`, () => {

    const fn: () => number = () => 123;
    type fnNumber = () => number;

    it(`fn => function`, () => {

      const orig: fnNumber = fn;
      const input: fnNumber = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('function');

    });

    it(`fn() => number`, () => {

      const orig: number = fn();
      const input: number = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('number');

    });


  });

  describe(`should return the type of error`, () => {

    it(`Error() => error`, () => {

      const orig: Error = Error();
      const input: Error = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('error');

    });

    it(`new Error() => error`, () => {

      const orig: Error = new Error();
      const input: Error = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('error');

    });

    it(`new Error(‘test') => error`, () => {

      const orig: Error = new Error('test');
      const input: Error = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('error');

    });

  });

  describe(`should return the type of set`, () => {

    it(`new Set([1,2,3]) => set`, () => {

      const orig: Set<number> = new Set([1, 2, 3]);
      const input: Set<number> = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('set');

    });

  });

  describe(`should return the type of weak set`, () => {

    it(`new WeakSet() => weakset`, () => {

      const orig: WeakSet<object> = new WeakSet();
      const input: WeakSet<object> = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('weakset');

    });

  });

  describe(`should return the type of date`, () => {

    it(`new Date() => date`, () => {

      const orig: Date = new Date();
      const input: Date = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('date');

    });

    it(`Date.now() => date`, () => {

      const orig: number = Date.now();
      const input: number = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('number');

    });

    it(`Date() => date`, () => {

      const orig: string = Date();
      const input: string = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('string');

    });

  });

  describe(`should return the type of object`, () => {

    it(`{} => object`, () => {

      const orig: object = {};
      const input: object = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('object');

    });

    it(`{a:1} => object`, () => {

      const orig: object = { a: 1 };
      const input: object = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('object');

    });

    it(`Object({a:1}) => object`, () => {

      const orig: object = Object({ a: 1 });
      const input: object = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('object');

    });

    it(`Object({}) => object`, () => {

      const orig: object = Object({});
      const input: object = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('object');

    });

    it(`Object(undefined) => object`, () => {

      const orig: object = Object(undefined);
      const input: object = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('object');

    });

    it(`Object(null) => object`, () => {

      const orig: object = Object(null);
      const input: object = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('object');

    });

  });

  describe(`should return the type of array`, () => {

    it(`[1,2,3] => array`, () => {

      const orig: number[] = [1, 2, 3];
      const input: number[] = orig.slice(0);
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('array');

    });

    it(`[1,'a',true] => array`, () => {

      const orig: any[] = [1, 'a', true];
      const input: any[] = orig.slice(0);
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('array');

    });

    it(`[{a:1},Symbol(),[1,2,3]] => array`, () => {

      const orig: any[] = [{ a: 1 }, Symbol(), [1, 2, 3]];
      const input: any[] = orig.slice(0);
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('array');

    });

  });

  describe(`should return the type of number`, () => {

    it(`-Infinity => number`, () => {

      const orig: number = -Infinity;
      const input: number = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('number');

    });

    it(`Infinity => number`, () => {

      const orig: number = Infinity;
      const input: number = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('number');

    });

    it(`-0 => number`, () => {

      const orig: number = -0;
      const input: number = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('number');

    });

    it(`+0 => number`, () => {

      const orig: number = +0;
      const input: number = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('number');

    });

    it(`0 => number`, () => {

      const orig: number = 0;
      const input: number = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('number');

    });

    it(`123 => number`, () => {

      const orig: number = 123;
      const input: number = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('number');

    });

    it(`123.456 => number`, () => {

      const orig: number = 123.456;
      const input: number = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('number');

    });

    it(`-123 => number`, () => {

      const orig: number = -123;
      const input: number = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('number');

    });

    it(`-123.456 => number`, () => {

      const orig: number = -123.456;
      const input: number = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('number');

    });

    it(`Number.MAX_SAFE_INTEGER => number`, () => {

      const orig: number = Number.MAX_SAFE_INTEGER;
      const input: number = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('number');

    });

  });

  describe(`should return the type of string`, () => {

    it(`"hello" => string`, () => {

      const orig: string = 'hello';
      const input: string = orig.slice(0);
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('string');

    });

    it(`"true" => string`, () => {

      const orig: string = 'true';
      const input: string = orig.slice(0);
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('string');

    });

    it(`"123" => string`, () => {

      const orig: string = '123';
      const input: string = orig.slice(0);
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('string');

    });

    it(`"null" => string`, () => {

      const orig: string = 'null';
      const input: string = orig.slice(0);
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('string');

    });

    it(`"" => string`, () => {

      const orig: string = '';
      const input: string = orig.slice(0);
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('string');

    });

  });

  describe(`should return the type of symbol`, () => {

    it(`Symbol() => symbol`, () => {

      const orig: symbol = Symbol();
      const input: symbol = orig;
      const output: string = typeOf(input);
      should().equal(input, orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('symbol');

    });

  });

  describe(`should return the type of boolean`, () => {

    it(`true => boolean`, () => {

      const orig: boolean = true;
      const input: boolean = orig;
      const output: string = typeOf(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('boolean');

    });

  });

  describe(`should return the type of the NaN/null/undefined`, () => {

    it(`NaN => nan`, () => {

      const orig: number = NaN;
      const input: number = NaN;
      const output: string = typeOf(input);
      should().not.equal(input, input);
      should().not.equal(orig, orig);
      should().not.equal(input, orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('nan');

    });

    it(`null => null`, () => {

      const orig: boolean = null;
      const input: boolean = orig;
      const output: string = typeOf(input);
      should().not.exist(input);
      should().equal(input, orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('null');

    });

    it(`undefined => undefined`, () => {

      const orig: boolean = undefined;
      const input: boolean = orig;
      const output: string = typeOf(input);
      should().not.exist(input);
      should().equal(input, orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('undefined');

    });

  });

});
