import { should } from 'chai';
import { isArrayLikeObject } from '../src/isArrayLikeObject';

should();

describe(`isArrayLikeObject() - @category Language`, () => {

  describe(`should return true for array-like object`, () => {

    it(`{length:2} => true`, () => {
      isArrayLikeObject({ length: 2 }).should.be.true;
    });

  });

  describe(`should return false for array-like object w/ invalid length`, () => {

    it(`{length:-1} => false`, () => {
      isArrayLikeObject({ length: -1 }).should.be.false;
    });

  });

  describe(`should return false for non array-like object`, () => {

    it(`[1,2,3] => false`, () => {
      isArrayLikeObject([1, 2, 3]).should.be.false;
    });

    it(`[] => false`, () => {
      isArrayLikeObject([]).should.be.false;
    });

    it(`'hello' => false`, () => {
      isArrayLikeObject('hello').should.be.false;
    });
    it(`'' => false`, () => {
      isArrayLikeObject('').should.be.false;
    });

    it(`123 => false`, () => {
      isArrayLikeObject(123).should.be.false;
    });

    it(`true => false`, () => {
      isArrayLikeObject(true).should.be.false;
    });

    it(`f() => false`, () => {
      const fn: () => number = () => 123;
      isArrayLikeObject(fn).should.be.false;
    });

    it(`new Set([1,2]) => false`, () => {
      isArrayLikeObject(new Set([1, 2])).should.be.false;
    });

  });

  describe(`should return false for null/undefined/NaN`, () => {

    it(`null => false`, () => {
      isArrayLikeObject(null).should.be.false;
    });

    it(`undefine => false`, () => {
      isArrayLikeObject(undefined).should.be.false;
    });

    it(`NaN => false`, () => {
      isArrayLikeObject(NaN).should.be.false;
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`[1,2,3] => false`, () => {

      const orig: number[] = [1, 2, 3];
      const input: number[] = orig.slice(0);
      isArrayLikeObject(input).should.be.false;
      input.should.be.deep.equal(orig);

    });

  });

});
