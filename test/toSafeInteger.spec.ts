import { should } from 'chai';
import { toSafeInteger } from '../src/toSafeInteger';

should();

describe(`toSafeInteger() - @category Language`, () => {

  describe(`should return number as integer`, () => {

    it(`3 => 3`, () => {
      toSafeInteger(3).should.equal(3);
    });

    it(`3.2 => 3`, () => {
      toSafeInteger(3.2).should.equal(3);
    });

  });

  describe(`should return valid integer for numerical string`, () => {

    it(`"3" => 3`, () => {
      toSafeInteger('3').should.equal(3);
    });

    it(`"3.2" => 3`, () => {
      toSafeInteger('3.2').should.equal(3);
    });

  });

  describe(`should return 0 for non numerical string`, () => {

    it(`"Hello" => 0`, () => {
      toSafeInteger('hello').should.equal(0);
    });

  });

  describe(`should return between -9007199254740991 and 9007199254740991`, () => {

    it(`Number.MAX_VALUE => 9007199254740991`, () => {
      toSafeInteger(Number.MAX_VALUE).should.equal(9007199254740991);
    });

    it(`Number.MIN_VALUE => 0`, () => {
      toSafeInteger(Number.MIN_VALUE).should.equal(0);
    });

    it(`Infinity => 9007199254740991`, () => {
      toSafeInteger(Infinity).should.equal(9007199254740991);
    });

    it(`+Infinity => +9007199254740991`, () => {
      toSafeInteger(+Infinity).should.equal(+9007199254740991);
    });

    it(`-Infinity => -9007199254740991`, () => {
      toSafeInteger(-Infinity).should.equal(-9007199254740991);
    });

  });

  describe(`should return 0 for NaN`, () => {

    it(`NaN => 0`, () => {
      toSafeInteger(NaN).should.equal(0);
    });

  });

  /*

    July 08 2017
    Taken care of by StrictNullChecks

    describe(`should return 0 for null/undefined`, () => {

      it(`null => 0`, () => {
       toSafeInteger(null).should.equal(0);
      });

      it(`undefined => 0`, () => {
        toSafeInteger(undefined).should.equal(0);
      });

    });

  */

  describe(`should be functional and not mutating any input`, () => {

    it(`3.2 => 3`, () => {

      const orig: number = 3.2;
      const input: number = orig;
      const output: number = toSafeInteger(input);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(3);

    });

  });

});
