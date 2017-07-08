import { should } from 'chai';
import { MAX_ARRAY_LENGTH } from '../src/constant';
import { toLength } from '../src/toLength';

should();

describe(`toLength() - @category Language`, () => {

  describe(`should convert an input into a valid array length`, () => {

    it(`3.2 => 3`, () => {

      const orig: number = 3.2;
      const input: number = orig;
      const output: number = toLength(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(3);

    });

    it(`3 => 3`, () => {

      const orig: number = 3;
      const input: number = orig;
      const output: number = toLength(input);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(3);

    });

    it(`"3.2" => 3`, () => {

      const orig: string = '3.2';
      const input: string = orig.slice(0);
      const output: number = toLength(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(3);

    });

    it(`"3" => 3`, () => {

      const orig: string = '3';
      const input: string = orig.slice(0);
      const output: number = toLength(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(3);

    });

  });

  describe(`should return 0 for invalid input`, () => {

    it(`"hello" => 0`, () => {

      const orig: string = 'hello';
      const input: string = orig.slice(0);
      const output: number = toLength(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(0);

    });

    it(`NaN => 0`, () => {

      const orig: number = NaN;
      const input: number = orig;
      const output: number = toLength(input);
      input.should.not.equal(input);
      orig.should.not.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(0);

    });

    /*
        it(`null => 0`, () => {

          const orig: number = null;
          const input: number = orig;
          const output: number = toLength(input);
          should().equal(input, orig);
          output.should.not.be.equal(input);
          output.should.deep.equal(0);

        });

        it(`undefined => 0`, () => {

          const orig: number = undefined;
          const input: number = orig;
          const output: number = toLength(input);
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
      const output: number = toLength(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(0);

    });

    it(`Number.MAX_VALUE => 4294967295`, () => {

      const orig: number = Number.MAX_VALUE;
      const input: number = orig;
      const output: number = toLength(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(MAX_ARRAY_LENGTH);

    });

    it(`-Infinity => 0`, () => {

      const orig: number = -Infinity;
      const input: number = orig;
      const output: number = toLength(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(0);

    });

    it(`Infinity => 4294967295`, () => {

      const orig: number = Infinity;
      const input: number = orig;
      const output: number = toLength(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(MAX_ARRAY_LENGTH);

    });

  });

});
