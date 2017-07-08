// tslint:disable:max-file-line-count

import { should } from 'chai';
import { typeOf } from '../src/typeOf';

should();

describe(`typeOf() - @category Language`, () => {

  describe(`.isArguments() should determine an Arguments object correctly`, () => {

    it(`function arguments => true`, () => {
      typeOf.isArguments(arguments).should.deep.equal(true);
    });

    it(`{a:1} => false`, () => {
      typeOf.isArguments({ a: 1 }).should.deep.equal(false);
    });

    it(`[1,2,3] => false`, () => {
      typeOf.isArguments([1, 2, 3]).should.deep.equal(false);
    });

  });

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
      typeOf(new Float64Array(2)).should.deep.equal('float64array');
    });

  });

  describe(`should return the type of Float32Array`, () => {

    it(`new Float32Array() => uint32array`, () => {
      typeOf(new Float32Array(2)).should.deep.equal('float32array');
    });

  });

  describe(`should return the type of Uint32Array`, () => {

    it(`new Uint32Array() => uint32array`, () => {
      typeOf(new Uint32Array(2)).should.deep.equal('uint32array');
    });

  });

  describe(`should return the type of Int32Array`, () => {

    it(`new Int32Array() => int32array`, () => {
      typeOf(new Int32Array(2)).should.deep.equal('int32array');
    });

  });

  describe(`should return the type of Uint16Array`, () => {

    it(`new Uint16Array() => uint16array`, () => {
      typeOf(new Uint16Array(2)).should.deep.equal('uint16array');
    });

  });

  describe(`should return the type of Int16Array`, () => {

    it(`new Int16Array() => int16array`, () => {
      typeOf(new Int16Array(2)).should.deep.equal('int16array');
    });

  });

  describe(`should return the type of Uint8ClampedArray`, () => {

    it(`new Uint8ClampedArray() => uint8clampedarray`, () => {
      typeOf(new Uint8ClampedArray(2)).should.deep.equal('uint8clampedarray');
    });

  });

  describe(`should return the type of Uint8Array`, () => {

    it(`new Uint8Array() => uint8array`, () => {
      typeOf(new Uint8Array(2)).should.deep.equal('uint8array');
    });

  });

  describe(`should return the type of Int8Array`, () => {

    it(`new Int8Array() => int8array`, () => {
      typeOf(new Int8Array(2)).should.deep.equal('int8array');
    });

  });

  describe(`should return the type of Reg Exp`, () => {

    it(`/abc/ => regexp`, () => {
      typeOf(/abc/).should.deep.equal('regexp');
    });

  });

  describe(`should return the type of Buffer`, () => {

    it(`new Buffer() => buffer`, () => {
      typeOf(new Buffer(2)).should.deep.equal('buffer');
    });

  });

  describe(`should return the type of ArrayBuffer`, () => {

    it(`new ArrayBuffer() => arraybuffer`, () => {
      typeOf(new ArrayBuffer(2)).should.deep.equal('arraybuffer');
    });

  });

  describe(`should return the type of map`, () => {

    it(`new Map() => map`, () => {
      typeOf(new Map()).should.deep.equal('map');
    });

  });

  describe(`should return the type of weak map`, () => {

    it(`new WeakMap() => weakmap`, () => {
      typeOf(new WeakMap()).should.deep.equal('weakmap');
    });

  });

  describe(`should return the type of promise`, () => {

    type pmNumber = Promise<number>;
    const pm: pmNumber = Promise.resolve(123);

    it(`pm => promise`, () => {
      typeOf(pm).should.deep.equal('promise');
    });

    it(`Promise.resolve(123) => promise`, () => {
      typeOf(Promise.resolve(123)).should.deep.equal('promise');
    });

  });

  describe(`should return the type of function`, () => {

    const fn: () => number = () => 123;

    it(`fn => function`, () => {
      typeOf(fn).should.deep.equal('function');
    });

    it(`fn() => number`, () => {
      typeOf(fn()).should.deep.equal('number');
    });

  });

  describe(`should return the type of error`, () => {

    it(`Error() => error`, () => {
      typeOf(Error()).should.deep.equal('error');
    });

    it(`new Error() => error`, () => {
      typeOf(new Error()).should.deep.equal('error');
    });

    it(`new Error(‘test') => error`, () => {
      typeOf(new Error('test')).should.deep.equal('error');
    });

  });

  describe(`should return the type of set`, () => {

    it(`new Set([1,2,3]) => set`, () => {
      typeOf(new Set([1, 2, 3])).should.deep.equal('set');
    });

  });

  describe(`should return the type of weak set`, () => {

    it(`new WeakSet() => weakset`, () => {
      typeOf(new WeakSet()).should.deep.equal('weakset');
    });

  });

  describe(`should return the type of date`, () => {

    it(`new Date() => date`, () => {
      typeOf(new Date()).should.deep.equal('date');
    });

    it(`Date.now() => number`, () => {
      typeOf(Date.now()).should.deep.equal('number');
    });

    it(`Date() => string`, () => {
      typeOf(Date()).should.deep.equal('string');
    });

  });

  describe(`should return the type of object`, () => {

    it(`{} => object`, () => {
      typeOf({}).should.deep.equal('object');
    });

    it(`{a:1} => object`, () => {
      typeOf({ a: 1 }).should.deep.equal('object');
    });

    it(`Object({a:1}) => object`, () => {
      typeOf(Object({ a: 1 })).should.deep.equal('object');
    });

    it(`Object({}) => object`, () => {
      typeOf(Object({})).should.deep.equal('object');
    });

    it(`Object(undefined) => object`, () => {
      typeOf(Object(undefined)).should.deep.equal('object');
    });

    it(`Object(null) => object`, () => {
      typeOf(Object(null)).should.deep.equal('object');
    });

  });

  describe(`should return the type of array`, () => {

    it(`[1,2,3] => array`, () => {
      typeOf([1, 2, 3]).should.deep.equal('array');
    });

    it(`[1,[2,3]] => array`, () => {
      typeOf([1, [2, 3]]).should.deep.equal('array');
    });

    it(`[1,'a',true] => array`, () => {
      typeOf([1, 'a', true]).should.deep.equal('array');
    });

    it(`[{a:1},Symbol(),[1,2,3]] => array`, () => {
      typeOf([{ a: 1 }, Symbol(), [1, 2, 3]]).should.deep.equal('array');
    });

  });

  describe(`should return the type of number`, () => {

    it(`-Infinity => number`, () => {
      typeOf(-Infinity).should.deep.equal('number');
    });

    it(`Infinity => number`, () => {
      typeOf(Infinity).should.deep.equal('number');
    });

    it(`-0 => number`, () => {
      typeOf(-0).should.deep.equal('number');
    });

    it(`+0 => number`, () => {
      typeOf(+0).should.deep.equal('number');
    });

    it(`0 => number`, () => {
      typeOf(0).should.deep.equal('number');
    });

    it(`123 => number`, () => {
      typeOf(123).should.deep.equal('number');
    });

    it(`123.456 => number`, () => {
      typeOf(123.456).should.deep.equal('number');
    });

    it(`-123 => number`, () => {
      typeOf(-123).should.deep.equal('number');
    });

    it(`-123.456 => number`, () => {
      typeOf(-123.456).should.deep.equal('number');
    });

    it(`Number.MAX_SAFE_INTEGER => number`, () => {
      typeOf(Number.MAX_SAFE_INTEGER).should.deep.equal('number');
    });

  });

  describe(`should return the type of string`, () => {

    it(`"hello" => string`, () => {
      typeOf('hello').should.deep.equal('string');
    });

    it(`"true" => string`, () => {
      typeOf('true').should.deep.equal('string');
    });

    it(`"123" => string`, () => {
      typeOf('123').should.deep.equal('string');
    });

    it(`"null" => string`, () => {
      typeOf('null').should.deep.equal('string');
    });

    it(`"" => string`, () => {
      typeOf('').should.deep.equal('string');
    });

  });

  describe(`should return the type of symbol`, () => {

    it(`Symbol() => symbol`, () => {
      typeOf(Symbol()).should.deep.equal('symbol');
    });

  });

  describe(`should return the type of boolean`, () => {

    it(`true => boolean`, () => {
      typeOf(true).should.deep.equal('boolean');
    });

    it(`false => boolean`, () => {
      typeOf(false).should.deep.equal('boolean');
    });

  });

  describe(`should return the type of the NaN/null/undefined`, () => {

    it(`NaN => nan`, () => {
      typeOf(NaN).should.deep.equal('nan');
    });

    it(`null => null`, () => {
      typeOf(null).should.deep.equal('null');
    });

    it(`undefined => undefined`, () => {
      typeOf(undefined).should.deep.equal('undefined');
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`"hello" => string`, () => {

      const orig: string = 'hello';
      const input: string = orig.slice(0);
      typeOf(input).should.deep.equal('string');
      input.should.be.deep.equal(orig);

    });

  });

});
