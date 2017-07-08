import { should } from 'chai';
import { toFinite } from '../src/toFinite';

should();

describe(`toFinite() - @category Language`, () => {

  describe(`should return number as finite number`, () => {

    it(`3 => 3`, () => {
      toFinite(3).should.deep.equal(3);
    });

    it(`3.2 => 3.2`, () => {
      toFinite(3.2).should.deep.equal(3.2);
    });

  });

  describe(`should return finite number for numerical string`, () => {

    it(`"3" => 3`, () => {
      toFinite('3').should.deep.equal(3);
    });

    it(`"3.2" => 3.2`, () => {
      toFinite('3.2').should.deep.equal(3.2);
    });

  });

  describe(`should return 0 for non numerical string`, () => {

    it(`"Hello" => 0`, () => {
      toFinite('Hello').should.deep.equal(0);
    });

  });

  describe(`should return between -1.7976931348623157e+308 and 1.7976931348623157e+308`, () => {

    it(`Number.MIN_VALUE => 5e-324`, () => {
      toFinite(Number.MIN_VALUE).should.equal(5e-324);
    });

    it(`Infinity => 1.7976931348623157e+308`, () => {
      toFinite(Infinity).should.equal(1.7976931348623157e+308);
    });

    it(`+Infinity => +1.7976931348623157e+308`, () => {
      toFinite(+Infinity).should.equal(+1.7976931348623157e+308);
    });

    it(`-Infinity => -1.7976931348623157e+308`, () => {
      toFinite(-Infinity).should.equal(-1.7976931348623157e+308);
    });

  });

  describe(`should return 0 for NaN`, () => {

    it(`NaN => 0`, () => {
      toFinite(NaN).should.equal(0);
    });

  });

  /*

    July 08 2017
    Taken care of by StrictNullChecks

    describe(`should return 0 for null/undefined`, () => {

      it(`null => 0`, () => {
       toFinite(null).should.equal(0);
      });

      it(`undefined => 0`, () => {
        toFinite(undefined).should.equal(0);
      });

    });

  */

  describe(`should be functional and not mutating any input`, () => {

    it(`3.2 => 3.2`, () => {

      const orig: number = 3.2;
      const input: number = orig;
      toFinite(input).should.equal(3.2);
      input.should.equal(orig);

    });

  });

});
