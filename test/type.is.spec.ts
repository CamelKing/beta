// tslint:disable:max-file-line-count

import { should } from 'chai';
import { type } from '../src/type';

should();

describe(`type.is<T>() - @category Language`, () => {

  describe(`should return true if type matches`, () => {

    it(`.isGenerator(generator()) => true`, () => {

      function* idMaker(): IterableIterator<any> {
        let index: number = 0;
        while (true)
          yield index++;
      }

      const gen: IterableIterator<any> = idMaker();

      type.isGenerator(gen).should.deep.equal(true);

    });

    it(`.AsyncFunction(fn) => true`, () => {

      function resolveAfter2Seconds(x: number): Promise<number> {
        return new Promise((resolve: (x: number) => void) => {
          setTimeout(() => { resolve(x); }, 2000);
        });
      }

      async function add1(x: number): Promise<number> {
        const a: Promise<number> = resolveAfter2Seconds(20);
        const b: Promise<number> = resolveAfter2Seconds(30);
        return x + await a + await b;
      }

      type.isAsyncFunction(add1).should.deep.equal(true);

    });

    it(`.isDataView(new DataView(new ArrayBuffer(1))) => true`, () => {
      type.isDataView(new DataView(new ArrayBuffer(1))).should.deep.equal(true);
    });

    it(`function arguments => true`, () => {
      type.isArguments(arguments).should.deep.equal(true);
    });

    it(`{a:1} => false`, () => {
      type.isArguments({ a: 1 }).should.deep.equal(false);
    });

    it(`[1,2,3] => false`, () => {
      type.isArguments([1, 2, 3]).should.deep.equal(false);
    });

    it(`.isFloat64Array(new Float64Array()) => true`, () => {
      type.isFloat64Array(new Float64Array(2)).should.equal(true);
    });

    it(`.isFloat32Array(new Float32Array()) => true`, () => {
      type.isFloat32Array(new Float32Array(2)).should.equal(true);
    });

    it(`.isUint32Array(new Uint32Array()) => true`, () => {
      type.isUint32Array(new Uint32Array(2)).should.equal(true);
    });

    it(`.isInt32Array(new Int32Array()) => true`, () => {
      type.isInt32Array(new Int32Array(2)).should.equal(true);
    });

    it(`.isUint16Array(new Uint16Array()) => true`, () => {
      type.isUint16Array(new Uint16Array(2)).should.equal(true);
    });

    it(`.isInt16Array(new Int16Array()) => true`, () => {
      type.isInt16Array(new Int16Array(2)).should.equal(true);
    });

    it(`.isUint8ClampedArray(new Uint8ClampedArray()) => true`, () => {
      type.isUint8ClampedArray(new Uint8ClampedArray(2)).should.equal(true);
    });

    it(`.isUint8Array(new Uint8Array()) => true`, () => {
      type.isUint8Array(new Uint8Array(2)).should.equal(true);
    });

    it(`.isInt8Array(new Int8Array()) => true`, () => {
      type.isInt8Array(new Int8Array(2)).should.equal(true);
    });

    it(`.isRegExp(/abc/) => true`, () => {
      type.isRegExp(/abc/).should.equal(true);
    });

    it(`.isBuffer(new Buffer()) => true`, () => {
      type.isBuffer(new Buffer(2)).should.equal(true);
    });

    it(`.isArrayBuffer(new ArrayBuffer()) => true`, () => {
      type.isArrayBuffer(new ArrayBuffer(2)).should.equal(true);
    });

    it(`.isMap(new Map()) => true`, () => {
      type.isMap(new Map()).should.equal(true);
    });

    it(`.isWeakMap(new WeakMap()) => true`, () => {
      type.isWeakMap(new WeakMap()).should.equal(true);
    });

    it(`.isPromise(Promise.resolve(123)) => true`, () => {
      type.isPromise(Promise.resolve(123)).should.equal(true);
    });

    it(`.isFunction(()=>123) => true`, () => {
      type.isFunction(() => 123).should.equal(true);
    });

    it(`.isError(new Error()) => true`, () => {
      type.isError(new Error()).should.equal(true);
    });

    it(`.isSet(new Set()) => true`, () => {
      type.isSet(new Set()).should.equal(true);
    });

    it(`.isWeakSet(new WeakSet()) => true`, () => {
      type.isWeakSet(new WeakSet()).should.equal(true);
    });

    it(`.isDate(new Date()) => true`, () => {
      type.isDate(new Date()).should.equal(true);
    });

    it(`.isObject({a:1}) => true`, () => {
      type.isObject({ a: 1 }).should.equal(true);
    });

    it(`.isArray([1,2,3]) => true`, () => {
      type.isArray([1, 2, 3]).should.equal(true);
    });

    it(`.isSymbol(Symbol()) => true`, () => {
      type.isSymbol(Symbol()).should.equal(true);
    });

    it(`.isNumber(123) => true`, () => {
      type.isNumber(123).should.equal(true);
    });

    it(`.isString('hello') => true`, () => {
      type.isString('hello').should.equal(true);
    });

    it(`.isBoolean(true) => true`, () => {
      type.isBoolean(true).should.equal(true);
    });

    it(`.isNaN(NaN) => true`, () => {
      type.isNaN(NaN).should.equal(true);
    });

    it(`.isNull(null) => true`, () => {
      type.isNull(null).should.equal(true);
    });

    it(`.isUndefined(undefined) => true`, () => {
      type.isUndefined(undefined).should.equal(true);
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`"hello" => String`, () => {

      const orig: string = 'hello';
      const input: string = orig.slice(0);
      type.isString(input).should.equal(true);
      input.should.be.deep.equal(orig);

    });

  });

});
