import { expect, should } from 'chai';
import { isInteger } from '../src/isInteger';

should();

describe(`isInteger() - @category Language`, () => {

  describe(`should check for integer number`, () => {

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

    it(`'3' => false`, () => {
      isInteger('3').should.equal(false);
    });

    it(`null => false`, () => {
      isInteger(null).should.equal(false);
    });

    it(`NaN => false`, () => {
      isInteger(NaN).should.equal(false);
    });

    it(`undefined => false`, () => {
      isInteger(undefined).should.equal(false);
    });

  });

});
