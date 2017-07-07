import { expect, should } from 'chai';
import { isPlainObject } from '../src/isPlainObject';

should();

describe(`isPlainObject() - @category Language`, () => {

  describe(`should return true for plain object`, () => {

    it(`{} => true`, () => {
      isPlainObject({}).should.equal(true);
    });

    it(`{a:1} => true`, () => {
      isPlainObject({ a: 1 }).should.equal(true);
    });

    it(`Object.create(null) => true`, () => {
      isPlainObject(Object.create(null)).should.equal(true);
    });

    it(`Object(null) => true`, () => {
      isPlainObject(Object(null)).should.equal(true);
    });

  });

  describe(`should return false for non plain object`, () => {

    it(`()=>123 => false`, () => {
      isPlainObject(() => 123).should.equal(false);
    });

    it(`new Date() => false`, () => {
      isPlainObject(new Date()).should.equal(false);
    });

    it(`[1,2,3] => false`, () => {
      isPlainObject([1, 2, 3]).should.equal(false);
    });

  });

  describe(`should return false for null and undefined`, () => {

    it(`null => false`, () => {
      isPlainObject(null).should.equal(false);
    });

    it(`undefined => false`, () => {
      isPlainObject(undefined).should.equal(false);
    });

    it(`NaN => false`, () => {
      isPlainObject(NaN).should.equal(false);
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`{a:1} => true`, () => {

      const orig: any = { a: 1 };
      const input: any = Object(orig);
      isPlainObject(input).should.equal(true);
      input.should.be.deep.equal(orig);

    });

  });


});
