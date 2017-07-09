import { should } from 'chai';
import { isPlainObject } from '../src/isPlainObject';

should();

describe(`isPlainObject() - @category Language`, () => {

  describe(`should return true for plain object`, () => {

    it(`{} => true`, () => {
      isPlainObject({}).should.be.true;
    });

    it(`{a:1} => true`, () => {
      isPlainObject({ a: 1 }).should.be.true;
    });

    it(`Object.create(null) => true`, () => {
      isPlainObject(Object.create(null)).should.be.true;
    });

    it(`Object(null) => true`, () => {
      isPlainObject(Object(null)).should.be.true;
    });

  });

  describe(`should return false for non plain object`, () => {

    it(`()=>123 => false`, () => {
      isPlainObject(() => 123).should.be.false;
    });

    it(`new Date() => false`, () => {
      isPlainObject(new Date()).should.be.false;
    });

    it(`[1,2,3] => false`, () => {
      isPlainObject([1, 2, 3]).should.be.false;
    });

  });

  describe(`should return false for null and undefined`, () => {

    it(`null => false`, () => {
      isPlainObject(null).should.be.false;
    });

    it(`undefined => false`, () => {
      isPlainObject(undefined).should.be.false;
    });

    it(`NaN => false`, () => {
      isPlainObject(NaN).should.be.false;
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`{a:1} => true`, () => {

      const orig: any = { a: 1 };
      const input: any = Object(orig);
      isPlainObject(input).should.be.true;
      input.should.be.deep.equal(orig);

    });

  });


});
