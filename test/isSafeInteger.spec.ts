import { should } from 'chai';
import { isSafeInteger } from '../src/isSafeInteger';

should();

describe(`isSafeInteger() - @category Language`, () => {

  describe(`should return true for integer within safe range`, () => {

    it(`3 => true`, () => {
      isSafeInteger(3).should.equal(true);
    });

    it(`9007199254740991 => true`, () => {
      isSafeInteger(9007199254740991).should.equal(true);
    });

    it(`-9007199254740991 => true`, () => {
      isSafeInteger(-9007199254740991).should.equal(true);
    });

  });

  describe(`should return false for non integers`, () => {

    it(`Number.MIN_VALUE => false`, () => {
      isSafeInteger(Number.MIN_VALUE).should.equal(false);
    });

    it(`123.456 => false`, () => {
      isSafeInteger(123.456).should.equal(false);
    });

  });

  describe(`should return false for numbers out of range`, () => {

    it(`9007199254740992 => false`, () => {
      isSafeInteger(9007199254740992).should.equal(false);
    });

    it(`-9007199254740992 => false`, () => {
      isSafeInteger(-9007199254740992).should.equal(false);
    });

    it(`Infinity => false`, () => {
      isSafeInteger(Infinity).should.equal(false);
    });

    it(`-Infinity => false`, () => {
      isSafeInteger(-Infinity).should.equal(false);
    });

  });

  /*
  July 08 2017
  Taken care of by StrichNullChecks

    describe(`should return false for null/undefined`, () => {

      it(`null => false`, () => {
        isSafeInteger(null).should.equal(false);
      });

      it(`undefined => false`, () => {
        isSafeInteger(undefined).should.equal(false);
      });

    });

  */

  describe(`should return false for NaN`, () => {

    it(`NaN => false`, () => {
      isSafeInteger(NaN).should.equal(false);
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`123 => true`, () => {

      const orig: any = 123;
      const input: any = orig;
      isSafeInteger(input).should.equal(true);
      input.should.be.deep.equal(orig);

    });

  });

});
