import { should } from 'chai';
import { isArrayLike } from '../src/isArrayLike';

should();

describe(`isArrayLike() - @category Language`, () => {

  describe(`should check for array-like value`, () => {

    it(`[1,2,3] => true`, () => {
      isArrayLike([1, 2, 3]).should.be.true;
    });

    it(`[] => true`, () => {
      isArrayLike([]).should.be.true;
    });

    it(`'hello' => true`, () => {
      isArrayLike('hello').should.be.true;
    });
    it(`'' => true`, () => {
      isArrayLike('').should.be.true;
    });

    it(`123 => false`, () => {
      isArrayLike(123).should.be.false;
    });

    it(`true => false`, () => {
      isArrayLike(true).should.be.false;
    });

    it(`f() => false`, () => {
      const fn: () => number = () => 123;
      isArrayLike(fn).should.be.false;
    });

    it(`new Set([1,2]) => false`, () => {
      isArrayLike(new Set([1, 2])).should.be.false;
    });

  });

  describe(`should return false for null/undefined/NaN`, () => {

    it(`null => false`, () => {
      isArrayLike(null).should.be.false;
    });

    it(`undefine => false`, () => {
      isArrayLike(undefined).should.be.false;
    });

    it(`NaN => false`, () => {
      isArrayLike(NaN).should.be.false;
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`[1,2,3] => true`, () => {

      const orig: number[] = [1, 2, 3];
      const input: number[] = orig.slice(0);
      isArrayLike(input).should.be.true;
      input.should.be.deep.equal(orig);

    });

  });

});
