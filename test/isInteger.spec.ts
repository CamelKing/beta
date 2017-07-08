import { should } from 'chai';
import { isInteger } from '../src/isInteger';

should();

describe(`isInteger() - @category Language`, () => {

  describe(`should return true if integer number`, () => {

    it(`3 => true`, () => {
      isInteger(3).should.equal(true);
    });

    it(`Number.MIN_VALUE => false`, () => {
      isInteger(Number.MIN_VALUE).should.equal(false);
    });

    it(`Infinity => false`, () => {
      isInteger(Infinity).should.equal(false);
    });

    it(`-Infinity => false`, () => {
      isInteger(-Infinity).should.equal(false);
    });

  });

  /*
  July 08 2017
  Taken care of by StrictNullChecks

    describe(`should return false for null/undefined`, () => {

      it(`null => false`, () => {
        isInteger(null).should.equal(false);
      });

      it(`undefined => false`, () => {
        isInteger(undefined).should.equal(false);
      });

    });

  */

  describe(`should return false for NaN`, () => {

    it(`NaN => false`, () => {
      isInteger(NaN).should.equal(false);
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`123 => true`, () => {

      const orig: any = 123;
      const input: any = orig;
      isInteger(input).should.equal(true);
      input.should.be.deep.equal(orig);

    });

  });

});
