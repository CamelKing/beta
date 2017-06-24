import { expect, should } from 'chai';
import { toNumber } from '../src/toNumber';

should();

describe(`toNumber() - @category Language`, () => {

  describe(`should convert a number to number`, () => {

    it(`Infinity => Infinity`, () => {

      const orig: number = Infinity;
      const input: number = orig;
      const output: number = toNumber(input);
      input.should.be.deep.equal(orig);
      output.should.equal(Infinity);

    });


    it(`Number.MAX_VALUE => 1.7976931348623157e+308`, () => {

      const orig: number = Number.MAX_VALUE;
      const input: number = orig;
      const output: number = toNumber(input);
      input.should.be.deep.equal(orig);
      output.should.equal(1.7976931348623157e+308);

    });

    it(`Number.MIN_VALUE => 5e-324`, () => {

      const orig: number = Number.MIN_VALUE;
      const input: number = orig;
      const output: number = toNumber(input);
      input.should.be.deep.equal(orig);
      output.should.equal(5e-324);

    });

    it(`Number.MAX_SAFE_INTEGER => 9007199254740991`, () => {

      const orig: number = Number.MAX_SAFE_INTEGER;
      const input: number = orig;
      const output: number = toNumber(input);
      input.should.be.deep.equal(orig);
      output.should.equal(9007199254740991);

    });

    it(`Number.MIN_SAFE_INTEGER => -9007199254740991`, () => {

      const orig: number = Number.MIN_SAFE_INTEGER;
      const input: number = orig;
      const output: number = toNumber(input);
      input.should.be.deep.equal(orig);
      output.should.equal(-9007199254740991);

    });

    it(`1e3 => 1e3`, () => {

      const orig: number = 1e3;
      const input: number = orig;
      const output: number = toNumber(input);
      input.should.be.deep.equal(orig);
      output.should.equal(1e3);

    });

    it(`3.2 => 3.2`, () => {

      const orig: number = 3.2;
      const input: number = orig;
      const output: number = toNumber(input);
      input.should.be.deep.equal(orig);
      output.should.equal(3.2);

    });

    it(`3 => 3`, () => {

      const orig: number = 3;
      const input: number = orig;
      const output: number = toNumber(input);
      input.should.be.deep.equal(orig);
      output.should.equal(3);

    });


  });

});
