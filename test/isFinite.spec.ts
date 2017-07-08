import { should } from 'chai';
import { isFinite } from '../src/isFinite';

should();

describe(`isFinite() - @category Language`, () => {

  describe(`should return true if number is finite`, () => {

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

  });

  describe(`should return true for date.getTime()`, () => {

    it(`new Date().getTime() => true`, () => {
      isFinite(new Date().getTime()).should.equal(true);
    });

  });

  describe(`should return false for null/undefined/NaN`, () => {

    it(`null => false`, () => {
      isFinite(null).should.equal(false);
    });

    it(`undefined => false`, () => {
      isFinite(undefined).should.equal(false);
    });

    it(`NaN => false`, () => {
      isFinite(NaN).should.equal(false);
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`123 => true`, () => {

      const orig: any = 123;
      const input: any = orig;
      isFinite(input).should.equal(true);
      input.should.be.deep.equal(orig);

    });

  });

});
