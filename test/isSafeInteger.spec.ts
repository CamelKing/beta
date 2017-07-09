import { should } from 'chai';
import { isSafeInteger } from '../src/isSafeInteger';

should();

describe(`isSafeInteger() - @category Language`, () => {

  describe(`should return true for integer within safe range`, () => {

    it(`3 => true`, () => {
      isSafeInteger(3).should.be.true;
    });

    it(`9007199254740991 => true`, () => {
      isSafeInteger(9007199254740991).should.be.true;
    });

    it(`-9007199254740991 => true`, () => {
      isSafeInteger(-9007199254740991).should.be.true;
    });

  });

  describe(`should return false for non integers`, () => {

    it(`Number.MIN_VALUE => false`, () => {
      isSafeInteger(Number.MIN_VALUE).should.be.false;
    });

    it(`123.456 => false`, () => {
      isSafeInteger(123.456).should.be.false;
    });

  });

  describe(`should return false for numbers out of range`, () => {

    it(`9007199254740992 => false`, () => {
      isSafeInteger(9007199254740992).should.be.false;
    });

    it(`-9007199254740992 => false`, () => {
      isSafeInteger(-9007199254740992).should.be.false;
    });

    it(`Infinity => false`, () => {
      isSafeInteger(Infinity).should.be.false;
    });

    it(`-Infinity => false`, () => {
      isSafeInteger(-Infinity).should.be.false;
    });

  });

  describe(`should return false for null/undefined/NaN`, () => {

    it(`null => false`, () => {
      isSafeInteger(null).should.be.false;
    });

    it(`undefined => false`, () => {
      isSafeInteger(undefined).should.be.false;
    });

    it(`NaN => false`, () => {
      isSafeInteger(NaN).should.be.false;
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`123 => true`, () => {

      const orig: any = 123;
      const input: any = orig;
      isSafeInteger(input).should.be.true;
      input.should.be.deep.equal(orig);

    });

  });

});
