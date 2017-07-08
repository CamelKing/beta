import { should } from 'chai';
import { toString } from '../src/toString';

should();

describe(`toString() - @category Language`, () => {

  describe(`should return string representation of primitives`, () => {

    it(`123 => '123'`, () => {
      toString(123).should.deep.equal('123');
    });

    it(`'hello' => 'hello'`, () => {
      toString('hello').should.deep.equal('hello');
    });

    it(`true => 'true'`, () => {
      toString(true).should.deep.equal('true');
    });

    it(`-0 => '-0'`, () => {
      toString(-0).should.deep.equal('-0');
    });

  });

  describe(`should return string representation of the function`, () => {

    it(`()=>-123 => '() => -123'`, () => {
      const f: () => number = () => -123;
      toString(f).should.deep.equal('() => -123');
    });

    it(`(x)=>Math.abs(x) => '(x) => Math.abs(x)'`, () => {
      const f: (x: number) => number = (x: number) => Math.abs(x);
      toString(f).should.deep.equal('(x) => Math.abs(x)');
    });

    it(`Math.abs => 'function abs() { [native code] }'`, () => {
      toString(Math.abs).should.deep.equal(Math.abs.toString());
    });

  });

  describe(`should return date string for date objects`, () => {

    it(`Date() => '{"a":1}'`, () => {
      const d: Date = new Date();
      toString(d).should.deep.equal(d.toString());
    });

  });

  describe(`should return contents in string for objects`, () => {

    it(`new Object(1) => '1'`, () => {
      toString(new Object(1)).should.deep.equal('1');
    });

    it(`{a:1} => '{"a":1}'`, () => {
      toString({ a: 1 }).should.deep.equal('{"a":1}');
    });

  });

  describe(`should return name of objects for symbol/promise`, () => {

    it(`Symbol() => 'Symbol()'`, () => {
      toString(Symbol()).should.deep.equal('Symbol()');
    });

    it(`Promise.resolve('hello') => 'Promise()'`, () => {
      const p: Promise<string> = Promise.resolve('hello');
      toString(p).should.deep.equal('Promise()');
    });

    it(`Error() => 'Error Message + Error Stack'`, () => {
      const e: Error = new Error('TEST ERROR');
      toString(e).should.deep.equal(`${e.message}\n${e.stack}`);
    });

  });

  describe(`should return contents of types array in string`, () => {

    it(`new Int8Array() => '0,0'`, () => {
      toString(new Int8Array(2)).should.deep.equal('0,0');
    });

    it(`new Int16Array() => '0,0,0,0'`, () => {
      toString(new Int8Array(4)).should.deep.equal('0,0,0,0');
    });

    it(`new Float32Array() => '0,0'`, () => {
      toString(new Int8Array(2)).should.deep.equal('0,0');
    });

  });

  describe(`should return contents in string for (nested) array`, () => {

    it(`[1,2,3] => '1,2,3'`, () => {
      toString([1, 2, 3]).should.deep.equal('1,2,3');
    });

    it(`[1,[2,3]] => '1,2,3'`, () => {
      toString([1, [2, 3]]).should.deep.equal('1,2,3');
    });

  });

  describe(`should return 'NaN' for NaN`, () => {

    it(`NaN => 'NaN'`, () => {
      toString(NaN).should.deep.equal('NaN');
    });

  });

  describe(`should return 'null' for null`, () => {

    it(`null => 'null'`, () => {
      toString(null).should.deep.equal('null');
    });

  });

  describe(`should return 'undefined' for undefined`, () => {

    it(`undefined => 'undefined'`, () => {
      toString(undefined).should.deep.equal('undefined');
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`123 => '123'`, () => {

      const orig: number = 123;
      const input: number = orig;
      toString(input).should.deep.equal('123');
      input.should.be.deep.equal(orig);

    });

  });

});
