import { should } from 'chai';
import { toSafeInteger } from '../src/toSafeInteger';

should();

describe(`toSafeInteger() - @category Language`, () => {

  describe(`should convert an input into a safe integer`, () => {

    it(`3.2 => 3`, () => {

      const orig: number = 3.2;
      const input: number = orig;
      const output: number = toSafeInteger(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(3);

    });

    it(`3 => 3`, () => {

      const orig: number = 3;
      const input: number = orig;
      const output: number = toSafeInteger(input);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(3);

    });

    it(`"3.2" => 3`, () => {

      const orig: string = '3.2';
      const input: string = orig.slice(0);
      const output: number = toSafeInteger(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(3);

    });

    it(`"3" => 3`, () => {

      const orig: string = '3';
      const input: string = orig.slice(0);
      const output: number = toSafeInteger(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(3);

    });

  });

  describe(`should return 0 for invalid input`, () => {

    it(`"hello" => 0`, () => {

      const orig: string = 'hello';
      const input: string = orig.slice(0);
      const output: number = toSafeInteger(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(0);

    });

    it(`NaN => 0`, () => {

      const orig: number = NaN;
      const input: number = orig;
      const output: number = toSafeInteger(input);
      input.should.not.equal(input);
      orig.should.not.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(0);

    });

    /*
        it(`null => 0`, () => {

          const orig: number = null;
          const input: number = orig;
          const output: number = toSafeInteger(input);
          should().equal(input, orig);
          output.should.not.be.equal(input);
          output.should.deep.equal(0);

        });

        it(`undefined => 0`, () => {

          const orig: number = undefined;
          const input: number = orig;
          const output: number = toSafeInteger(input);
          should().equal(input, orig);
          output.should.not.be.equal(input);
          output.should.deep.equal(0);

        });
    */

  });

  describe(`should handle extreme boundaries`, () => {

    it(`Number.MIN_VALUE => 0`, () => {

      const orig: number = Number.MIN_VALUE;
      const input: number = orig;
      const output: number = toSafeInteger(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(0);

    });

    it(`Number.MAX_VALUE => 9007199254740991`, () => {

      const orig: number = Number.MAX_VALUE;
      const input: number = orig;
      const output: number = toSafeInteger(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(Number.MAX_SAFE_INTEGER);

    });

    it(`-Infinity => -9007199254740991`, () => {

      const orig: number = -Infinity;
      const input: number = orig;
      const output: number = toSafeInteger(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(Number.MIN_SAFE_INTEGER);

    });

    it(`Infinity => 9007199254740991`, () => {

      const orig: number = Infinity;
      const input: number = orig;
      const output: number = toSafeInteger(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(Number.MAX_SAFE_INTEGER);

    });

  });

});
