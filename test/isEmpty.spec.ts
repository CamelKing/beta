import { expect, should } from 'chai';
import { isEmpty } from '../src/isEmpty';

should();

describe(`isEmpty() - @category Language`, () => {
  describe(`should return true if number and boolean`, () => {

    it(`123 => true`, () => {
      isEmpty(123).should.deep.equal(true);
    });

    it(`false => true`, () => {
      isEmpty(false).should.deep.equal(true);
    });

    it(`true => true`, () => {
      isEmpty(false).should.deep.equal(true);
    });

  });

  describe(`should return true only if empty buffer`, () => {

    it(`new Buffer('hello') => false`, () => {
      isEmpty(new Buffer('hello')).should.deep.equal(false);
    });

    it(`new Buffer('') => true`, () => {
      isEmpty(new Buffer('')).should.deep.equal(true);
    });

  });

  describe(`should return true only if empty typed array`, () => {

    it(`new Uint16Array(2) => false`, () => {
      isEmpty(new Uint16Array(2)).should.deep.equal(false);
    });

    it(`new Uint16Array(0) => true`, () => {
      isEmpty(new Uint16Array(0)).should.deep.equal(true);
    });

  });

  describe(`should return true only if empty string`, () => {

    it(`'hello' => false`, () => {
      isEmpty('hello').should.deep.equal(false);
    });

    it(`'' => true`, () => {
      isEmpty('').should.deep.equal(true);
    });

  });

  describe(`should return true only if empty array`, () => {

    it(`[1,2,3] => false`, () => {
      isEmpty([1, 2, 3]).should.deep.equal(false);
    });

    it(`[] => true`, () => {
      isEmpty([]).should.deep.equal(true);
    });

  });

  describe(`should return true only if empty object/map/set`, () => {

    it(`new Map([['a', 1]]) => false`, () => {
      isEmpty(new Map([['a', 1]])).should.deep.equal(false);
    });

    it(`new Map([]) => true`, () => {
      isEmpty(new Map([])).should.equal(true);
    });

    it(`new Set([1, 2, 3]) => false`, () => {
      isEmpty(new Set([1, 2, 3])).should.equal(false);
    });

    it(`new Set([]) => false`, () => {
      isEmpty(new Set([])).should.equal(true);
    });

    it(`{a:1} => false`, () => {
      isEmpty({ a: 1 }).should.equal(false);
    });

    it(`{} => true`, () => {
      isEmpty({}).should.equal(true);
    });

  });

  describe(`should return true only if empty custom/extended object`, () => {

    class BaseClass {
      constructor() {
        return this;
      }
    }

    class ExtClass extends BaseClass {
      constructor() {
        super();
        return this;
      }
    }

    it(`Empty Class Object => true`, () => {
      isEmpty(new BaseClass).should.equal(true);
    });

    it(`Non-Empty Base Class Object => false`, () => {
      const orig: any = new BaseClass;
      orig.a = 1;
      isEmpty(Object(orig)).should.equal(false);
    });

    it(`Empty Base Class Object => true`, () => {
      isEmpty(new BaseClass).should.equal(true);
    });

    it(`Empty Extended Class Object => true`, () => {
      isEmpty(new ExtClass).should.equal(true);
    });

    it(`Nob-Empty Extended Class Object => false`, () => {

      const orig0: any = new ExtClass;
      orig0.a = 1;
      const orig1: any = Object(orig0);
      orig1.b = 1;
      isEmpty(Object(orig1)).should.equal(false);

    });

  });

  describe(`should return true for null/undefined/NaN`, () => {

    it(`null => true`, () => {
      isEmpty(null).should.deep.equal(true);
    });

    it(`undefined => true`, () => {
      isEmpty(undefined).should.deep.equal(true);
    });

    it(`NaN => true`, () => {
      isEmpty(NaN).should.deep.equal(true);
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`{} => true`, () => {

      const orig: any = {};
      const input: any = Object(orig);
      isEmpty(input).should.equal(true);
      input.should.be.deep.equal(orig);

    });

  });

});
