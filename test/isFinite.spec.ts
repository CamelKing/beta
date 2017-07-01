import { expect, should } from 'chai';
import { isFinite } from '../src/isFinite';

should();

describe(`isFinite() - @category Language`, () => {

  describe(`.isFinite() should check for finite number`, () => {

    it(`3 => true`, () => {
      isFinite(3).should.equal(true);
    });

    it(`Number.MIN_VALUE => true`, () => {
      isFinite(Number.MIN_VALUE).should.equal(true);
    });

    it(`Infinity => false`, () => {
      isFinite(Infinity).should.equal(false);
    });

    it(`-Infinity => false`, () => {
      isFinite(-Infinity).should.equal(false);
    });

    it(`'3' => false`, () => {
      isFinite('3').should.equal(false);
    });

    it(`null => false`, () => {
      isFinite(null).should.equal(false);
    });

    it(`NaN => false`, () => {
      isFinite(NaN).should.equal(false);
    });

    it(`undefined => false`, () => {
      isFinite(undefined).should.equal(false);
    });

  });

});
