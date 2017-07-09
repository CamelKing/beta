import { should } from 'chai';
import { isFinite } from '../src/isFinite';

should();

describe(`isFinite() - @category Language`, () => {

  describe(`should return true if number is finite`, () => {

    it(`3 => true`, () => {
      isFinite(3).should.be.true;
    });

    it(`Number.MIN_VALUE => true`, () => {
      isFinite(Number.MIN_VALUE).should.be.true;
    });

    it(`Infinity => false`, () => {
      isFinite(Infinity).should.be.false;
    });

    it(`-Infinity => false`, () => {
      isFinite(-Infinity).should.be.false;
    });

  });

  describe(`should return true for date.getTime()`, () => {

    it(`new Date().getTime() => true`, () => {
      isFinite(new Date().getTime()).should.be.true;
    });

  });

  describe(`should return false for null/undefined/NaN`, () => {

    it(`null => false`, () => {
      isFinite(null).should.be.false;
    });

    it(`undefined => false`, () => {
      isFinite(undefined).should.be.false;
    });

    it(`NaN => false`, () => {
      isFinite(NaN).should.be.false;
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`123 => true`, () => {

      const orig: any = 123;
      const input: any = orig;
      isFinite(input).should.be.true;
      input.should.be.deep.equal(orig);

    });

  });

});
