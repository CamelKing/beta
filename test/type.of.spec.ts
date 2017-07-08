// tslint:disable:max-file-line-count

import { should } from 'chai';
import { type } from '../src/type';

should();

describe(`type.of() - @category Language`, () => {

  describe(`should return the type of Generator`, () => {

    it(`generator() => 'Generator'`, () => {

      function* idMaker(): IterableIterator<any> {
        let index: number = 0;
        while (true)
          yield index++;
      }

      const gen: IterableIterator<any> = idMaker();

      type.of(gen).should.deep.equal('Generator');

    });

  });

  describe(`should return the type of AsyncFunction`, () => {

    it(`async function => 'AsyncFunction'`, () => {

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

      type.of(add1).should.deep.equal('AsyncFunction');
    });

  });

  describe(`should return the type of DataView`, () => {

    it(`new DataView(new ArrayBuffer(1)) => 'DataView'`, () => {
      type.of(new DataView(new ArrayBuffer(1))).should.deep.equal('DataView');
    });

  });

  describe(`should return the type of Float64Array`, () => {

    it(`new Float64Array() => Float64Array`, () => {
      type.of(new Float64Array(2)).should.deep.equal('Float64Array');
    });

  });

  describe(`should return the type of Float32Array`, () => {

    it(`new Float32Array() => Float32Array`, () => {
      type.of(new Float32Array(2)).should.deep.equal('Float32Array');
    });

  });

  describe(`should return the type of Uint32Array`, () => {

    it(`new Uint32Array() => Uint32Array`, () => {
      type.of(new Uint32Array(2)).should.deep.equal('Uint32Array');
    });

  });

  describe(`should return the type of Int32Array`, () => {

    it(`new Int32Array() => Int32Array`, () => {
      type.of(new Int32Array(2)).should.deep.equal('Int32Array');
    });

  });

  describe(`should return the type of Uint16Array`, () => {

    it(`new Uint16Array() => Uint16Array`, () => {
      type.of(new Uint16Array(2)).should.deep.equal('Uint16Array');
    });

  });

  describe(`should return the type of Int16Array`, () => {

    it(`new Int16Array() => Int16Array`, () => {
      type.of(new Int16Array(2)).should.deep.equal('Int16Array');
    });

  });

  describe(`should return the type of Uint8ClampedArray`, () => {

    it(`new Uint8ClampedArray() => Uint8ClampedArray`, () => {
      type.of(new Uint8ClampedArray(2)).should.deep.equal('Uint8ClampedArray');
    });

  });

  describe(`should return the type of Uint8Array`, () => {

    it(`new Uint8Array() => Uint8Array`, () => {
      type.of(new Uint8Array(2)).should.deep.equal('Uint8Array');
    });

  });

  describe(`should return the type of Int8Array`, () => {

    it(`new Int8Array() => Int8Array`, () => {
      type.of(new Int8Array(2)).should.deep.equal('Int8Array');
    });

  });

  describe(`should return the type of Reg Exp`, () => {

    it(`/abc/ => RegExp`, () => {
      type.of(/abc/).should.deep.equal('RegExp');
    });

  });

  describe(`should return the type of Buffer`, () => {

    it(`new Buffer() => Buffer`, () => {
      type.of(new Buffer(2)).should.deep.equal('Buffer');
    });

  });

  describe(`should return the type of ArrayBuffer`, () => {

    it(`new ArrayBuffer() => ArrayBuffer`, () => {
      type.of(new ArrayBuffer(2)).should.deep.equal('ArrayBuffer');
    });

  });

  describe(`should return the type of Map`, () => {

    it(`new Map() => Map`, () => {
      type.of(new Map()).should.deep.equal('Map');
    });

  });

  describe(`should return the type of WeakMap`, () => {

    it(`new WeakMap() => WeakMap`, () => {
      type.of(new WeakMap()).should.deep.equal('WeakMap');
    });

  });

  describe(`should return the type of Promise`, () => {

    type pmNumber = Promise<number>;
    const pm: pmNumber = Promise.resolve(123);

    it(`pm => Promise`, () => {
      type.of(pm).should.deep.equal('Promise');
    });

    it(`Promise.resolve(123) => Promise`, () => {
      type.of(Promise.resolve(123)).should.deep.equal('Promise');
    });

  });

  describe(`should return the type of Function`, () => {

    const fn: () => number = () => 123;

    it(`fn => Function`, () => {
      type.of(fn).should.deep.equal('Function');
    });

    it(`fn() => Number`, () => {
      type.of(fn()).should.deep.equal('Number');
    });

  });

  describe(`should return the type of Error`, () => {

    it(`Error() => Error`, () => {
      type.of(Error()).should.deep.equal('Error');
    });

    it(`new Error() => Error`, () => {
      type.of(new Error()).should.deep.equal('Error');
    });

    it(`new Error(‘test') => Error`, () => {
      type.of(new Error('test')).should.deep.equal('Error');
    });

  });

  describe(`should return the type of Set`, () => {

    it(`new Set([1,2,3]) => Set`, () => {
      type.of(new Set([1, 2, 3])).should.deep.equal('Set');
    });

  });

  describe(`should return the type of weak Set`, () => {

    it(`new WeakSet() => WeakSet`, () => {
      type.of(new WeakSet()).should.deep.equal('WeakSet');
    });

  });

  describe(`should return the type of Date`, () => {

    it(`new Date() => Date`, () => {
      type.of(new Date()).should.deep.equal('Date');
    });

    it(`Date.now() => Number`, () => {
      type.of(Date.now()).should.deep.equal('Number');
    });

    it(`Date() => String`, () => {
      type.of(Date()).should.deep.equal('String');
    });

  });

  describe(`should return the type of Object`, () => {

    it(`{} => Object`, () => {
      type.of({}).should.deep.equal('Object');
    });

    it(`{a:1} => Object`, () => {
      type.of({ a: 1 }).should.deep.equal('Object');
    });

    it(`Object({a:1}) => Object`, () => {
      type.of(Object({ a: 1 })).should.deep.equal('Object');
    });

    it(`Object({}) => Object`, () => {
      type.of(Object({})).should.deep.equal('Object');
    });

    it(`Object(undefined) => Object`, () => {
      type.of(Object(undefined)).should.deep.equal('Object');
    });

    it(`Object(null) => Object`, () => {
      type.of(Object(null)).should.deep.equal('Object');
    });

  });

  describe(`should return the type of Array`, () => {

    it(`[1,2,3] => Array`, () => {
      type.of([1, 2, 3]).should.deep.equal('Array');
    });

    it(`[1,[2,3]] => Array`, () => {
      type.of([1, [2, 3]]).should.deep.equal('Array');
    });

    it(`[1,'a',true] => Array`, () => {
      type.of([1, 'a', true]).should.deep.equal('Array');
    });

    it(`[{a:1},Symbol(),[1,2,3]] => Array`, () => {
      type.of([{ a: 1 }, Symbol(), [1, 2, 3]]).should.deep.equal('Array');
    });

  });

  describe(`should return the type of Number`, () => {

    it(`-Infinity => Number`, () => {
      type.of(-Infinity).should.deep.equal('Number');
    });

    it(`Infinity => Number`, () => {
      type.of(Infinity).should.deep.equal('Number');
    });

    it(`-0 => Number`, () => {
      type.of(-0).should.deep.equal('Number');
    });

    it(`+0 => Number`, () => {
      type.of(+0).should.deep.equal('Number');
    });

    it(`0 => Number`, () => {
      type.of(0).should.deep.equal('Number');
    });

    it(`123 => Number`, () => {
      type.of(123).should.deep.equal('Number');
    });

    it(`123.456 => Number`, () => {
      type.of(123.456).should.deep.equal('Number');
    });

    it(`-123 => Number`, () => {
      type.of(-123).should.deep.equal('Number');
    });

    it(`-123.456 => Number`, () => {
      type.of(-123.456).should.deep.equal('Number');
    });

    it(`Number.MAX_SAFE_INTEGER => Number`, () => {
      type.of(Number.MAX_SAFE_INTEGER).should.deep.equal('Number');
    });

  });

  describe(`should return the type of String`, () => {

    it(`"hello" => String`, () => {
      type.of('hello').should.deep.equal('String');
    });

    it(`"true" => String`, () => {
      type.of('true').should.deep.equal('String');
    });

    it(`"123" => String`, () => {
      type.of('123').should.deep.equal('String');
    });

    it(`"null" => String`, () => {
      type.of('null').should.deep.equal('String');
    });

    it(`"" => String`, () => {
      type.of('').should.deep.equal('String');
    });

  });

  describe(`should return the type of Symbol`, () => {

    it(`Symbol() => Symbol`, () => {
      type.of(Symbol()).should.deep.equal('Symbol');
    });

  });

  describe(`should return the type of Boolean`, () => {

    it(`true => Boolean`, () => {
      type.of(true).should.deep.equal('Boolean');
    });

    it(`false => Boolean`, () => {
      type.of(false).should.deep.equal('Boolean');
    });

  });

  describe(`should return the type of the NaN/null/undefined`, () => {

    it(`NaN => NaN`, () => {
      type.of(NaN).should.deep.equal('NaN');
    });

    it(`null => Null`, () => {
      type.of(null).should.deep.equal('Null');
    });

    it(`undefined => Undefined`, () => {
      type.of(undefined).should.deep.equal('Undefined');
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`"hello" => String`, () => {

      const orig: string = 'hello';
      const input: string = orig.slice(0);
      type.of(input).should.deep.equal('String');
      input.should.be.deep.equal(orig);

    });

  });

});
