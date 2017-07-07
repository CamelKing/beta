import { expect, should } from 'chai';
import { isArrayLike } from '../src/isArrayLike';

should();

describe(`isArrayLike() - @category Language`, () => {

  describe(`should check for array-like object`, () => {

    it(`[1,2,3] => true`, () => {
      isArrayLike([1, 2, 3]).should.deep.equal(true);
    });

    it(`[] => true`, () => {
      isArrayLike([]).should.deep.equal(true);
    });

    it(`'hello' => true`, () => {
      isArrayLike('hello').should.deep.equal(true);
    });
    it(`'' => true`, () => {
      isArrayLike('').should.deep.equal(true);
    });

    it(`123 => false`, () => {
      isArrayLike(123).should.deep.equal(false);
    });

    it(`true => false`, () => {
      isArrayLike(true).should.deep.equal(false);
    });

    it(`f() => false`, () => {
      const fn: () => number = () => 123;
      isArrayLike(fn).should.deep.equal(false);
    });

    it(`new Set([1,2]) => false`, () => {
      isArrayLike(new Set([1, 2])).should.deep.equal(false);
    });

  });

  describe(`should return false for null/undefined/NaN`, () => {

    it(`null => false`, () => {
      isArrayLike(null).should.deep.equal(false);
    });

    it(`undefine => false`, () => {
      isArrayLike(undefined).should.deep.equal(false);
    });

    it(`NaN => false`, () => {
      isArrayLike(NaN).should.deep.equal(false);
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`[1,2,3] => true`, () => {

      const orig: number[] = [1, 2, 3];
      const input: number[] = orig.slice(0);
      isArrayLike(input).should.equal(true);
      input.should.be.deep.equal(orig);

    });

  });

});
