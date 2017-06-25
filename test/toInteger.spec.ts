import { expect, should } from 'chai';
import { toInteger } from '../src/toInteger';

should();

describe(`toInteger() - @category Language`, () => {

  describe(`should convert input to an integer`, () => {

    it(`3 => 3`, () => {

      const orig: number = 3;
      const input: number = orig;
      const output: number = toInteger(input);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(3);

    });

    it(`3.2 => 3`, () => {

      const orig: number = 3.2;
      const input: number = orig;
      const output: number = toInteger(input);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(3);

    });

    it(`NaN => 0`, () => {

      const orig: number = NaN;
      const input: number = orig;
      const output: number = toInteger(input);
      input.should.not.equal(input);
      input.should.not.equal(orig);
      orig.should.not.equal(orig);
      output.should.equal(0);

    });

    it(`"3.2" => 3`, () => {

      const orig: string = '3.2';
      const input: string = orig.slice(0);
      const output: number = toInteger(input);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(3);

    });

    it(`"Hello" => 0`, () => {

      const orig: string = 'Hello';
      const input: string = orig.slice(0);
      const output: number = toInteger(input);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(0);

    });

    it(`Number.MIN_VALUE => 5e-324`, () => {

      const orig: number = Number.MIN_VALUE;
      const input: number = orig;
      const output: number = toInteger(input);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(0);

    });

    it(`Infinity => Infinity`, () => {

      const orig: number = Infinity;
      const input: number = orig;
      const output: number = toInteger(input);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(1.7976931348623157e+308);

    });

    it(`+Infinity => Infinity`, () => {

      const orig: number = +Infinity;
      const input: number = orig;
      const output: number = toInteger(input);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(1.7976931348623157e+308);

    });

    it(`-Infinity => Infinity`, () => {

      const orig: number = -Infinity;
      const input: number = orig;
      const output: number = toInteger(input);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(-1.7976931348623157e+308);

    });


  });

  describe(`should convert null and undefined to 0`, () => {

    it(`Null => 0`, () => {

      const orig: number = null;
      const input: number = orig;
      const output: number = toInteger(input);
      should().equal(input, orig);
      output.should.not.equal(input);
      output.should.equal(0);

    });

    it(`Undefined => 0`, () => {

      const orig: number = undefined;
      const input: number = orig;
      const output: number = toInteger(input);
      should().equal(input, orig);
      output.should.not.equal(input);
      output.should.equal(0);

    });

  });



});
