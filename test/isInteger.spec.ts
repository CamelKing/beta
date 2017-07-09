import { should } from 'chai';
import { isInteger } from '../src/isInteger';

should();

describe(`isInteger() - @category Language`, () => {

  describe(`should return true if integer number`, () => {

    it(`3 => true`, () => {
      isInteger(3).should.be.true;
    });

    it(`Number.MIN_VALUE => false`, () => {
      isInteger(Number.MIN_VALUE).should.be.false;
    });

    it(`Infinity => false`, () => {
      isInteger(Infinity).should.be.false;
    });

    it(`-Infinity => false`, () => {
      isInteger(-Infinity).should.be.false;
    });

  });

  describe(`should return false for non number`, () => {

    it(`'hello' => false`, () => {
      isInteger('hello').should.be.false;
    });

    it(`'123' => false`, () => {
      isInteger('123').should.be.false;
    });

    it(`true => false`, () => {
      isInteger(true).should.be.false;
    });

    it(`new Date() => false`, () => {
      isInteger(new Date()).should.be.false;
    });

    it(`{a:1} => false`, () => {
      isInteger({ a: 1 }).should.be.false;
    });

    it(`[1,2,3] => false`, () => {
      isInteger([1, 2, 3]).should.be.false;
    });

  });

  describe(`should return false for null/undefined/NaN`, () => {

    it(`null => false`, () => {
      isInteger(null).should.be.false;
    });

    it(`undefined => false`, () => {
      isInteger(undefined).should.be.false;
    });

    it(`NaN => false`, () => {
      isInteger(NaN).should.be.false;
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`123 => true`, () => {

      const orig: any = 123;
      const input: any = orig;
      isInteger(input).should.be.true;
      input.should.be.deep.equal(orig);

    });

  });

});
