import { should } from 'chai';
import { isLength } from '../src/isLength';

should();

describe(`isLength() - @category Language`, () => {

  describe(`should return true for valid length`, () => {

    it(`0 => true`, () => {
      isLength(0).should.equal(true);
    });

    it(`3 => true`, () => {
      isLength(0).should.equal(true);
    });

    it(`Number.MAX_SAFE_INTEGER => true`, () => {
      isLength(Number.MAX_SAFE_INTEGER).should.equal(true);
    });

  });

  describe(`should return false for invalid length`, () => {

    it(`Number.MIN_SAFE_INTEGER => false`, () => {
      isLength(Number.MIN_SAFE_INTEGER).should.equal(false);
    });

    it(`Number.MIN_VALUE => false`, () => {
      isLength(Number.MIN_VALUE).should.equal(false);
    });

    it(`Number.MAX_VALUE => false`, () => {
      isLength(Number.MAX_VALUE).should.equal(false);
    });

    it(`Infinity => false`, () => {
      isLength(Infinity).should.equal(false);
    });

    it(`-1 => false`, () => {
      isLength(-1).should.equal(false);
    });

    it(`3.3 => false`, () => {
      isLength(3.3).should.equal(false);
    });

  });

  describe(`should return false for non number`, () => {

    it(`'3' => false`, () => {
      isLength('3').should.equal(false);
    });

    it(`true => false`, () => {
      isLength(true).should.equal(false);
    });

    it(`{a:1} => false`, () => {
      isLength({ a: 1 }).should.equal(false);
    });

  });

  describe(`should return false for null/undefined/NaN`, () => {

    it(`null => false`, () => {
      isLength(null).should.equal(false);
    });

    it(`undefined => false`, () => {
      isLength(undefined).should.equal(false);
    });

    it(`NaN => false`, () => {
      isLength(NaN).should.equal(false);
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`123 => true`, () => {

      const orig: any = 123;
      const input: any = orig;
      isLength(input).should.equal(true);
      input.should.be.deep.equal(orig);

    });

  });

});
