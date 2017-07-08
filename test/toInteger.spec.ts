import { should } from 'chai';
import { toInteger } from '../src/toInteger';

should();

describe(`toInteger() - @category Language`, () => {

  describe(`should return number as integer`, () => {

    it(`3 => 3`, () => {
      toInteger(3).should.equal(3);
    });

    it(`3.2 => 3`, () => {
      toInteger(3.2).should.equal(3);
    });

  });

  describe(`should return valid integer for numerical string`, () => {

    it(`"3" => 3`, () => {
      toInteger('3').should.equal(3);
    });

    it(`"3.2" => 3`, () => {
      toInteger('3.2').should.equal(3);
    });

  });

  describe(`should return 0 for non numerical string`, () => {

    it(`"Hello" => 0`, () => {
      toInteger('hello').should.equal(0);
    });

  });

  describe(`should return between -1.7976931348623157e+308 and 1.7976931348623157e+308`, () => {

    it(`Number.MIN_VALUE => 0`, () => {
      toInteger(Number.MIN_VALUE).should.equal(0);
    });

    it(`Infinity => 1.7976931348623157e+308`, () => {
      toInteger(Infinity).should.equal(1.7976931348623157e+308);
    });

    it(`+Infinity => +1.7976931348623157e+308`, () => {
      toInteger(+Infinity).should.equal(+1.7976931348623157e+308);
    });

    it(`-Infinity => -1.7976931348623157e+308`, () => {
      toInteger(-Infinity).should.equal(-1.7976931348623157e+308);
    });

  });

  describe(`should return 0 for NaN`, () => {

    it(`NaN => 0`, () => {
      toInteger(NaN).should.equal(0);
    });

  });

  /*

    July 08 2017
    Taken care of by StrictNullChecks

    describe(`should return 0 for null/undefined`, () => {

      it(`null => 0`, () => {
       toInteger(null).should.equal(0);
      });

      it(`undefined => 0`, () => {
        toInteger(undefined).should.equal(0);
      });

    });

  */

  describe(`should be functional and not mutating any input`, () => {

    it(`3.2 => 3`, () => {

      const orig: number = 3.2;
      const input: number = orig;
      const output: number = toInteger(input);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(3);

    });

  });

});
