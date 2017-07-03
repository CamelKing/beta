import { expect, should } from 'chai';
import { isSafeInteger } from '../src/isSafeInteger';

should();

describe(`isSafeInteger() - @category Language`, () => {

  describe(`should check for integer number`, () => {

    it(`3 => true`, () => {
      isSafeInteger(3).should.equal(true);
    });

    it(`Number.MIN_VALUE => false`, () => {
      isSafeInteger(Number.MIN_VALUE).should.equal(false);
    });

    it(`9007199254740991 => true`, () => {
      isSafeInteger(9007199254740991).should.equal(true);
    });

    it(`9007199254740992 => false`, () => {
      isSafeInteger(9007199254740992).should.equal(false);
    });

    it(`-9007199254740991 => true`, () => {
      isSafeInteger(-9007199254740991).should.equal(true);
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

    it(`'3' => false`, () => {
      isSafeInteger('3').should.equal(false);
    });

    it(`null => false`, () => {
      isSafeInteger(null).should.equal(false);
    });

    it(`NaN => false`, () => {
      isSafeInteger(NaN).should.equal(false);
    });

    it(`undefined => false`, () => {
      isSafeInteger(undefined).should.equal(false);
    });

  });

});
