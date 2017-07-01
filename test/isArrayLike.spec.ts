import { expect, should } from 'chai';
import { isArrayLike } from '../src/isArrayLike';

should();

describe(`isArrayLike() - @category Language`, () => {

  describe(`should check for array-like object`, () => {

    it(`[1,2,3] => true`, () => {

      const orig: number[] = [1, 2, 3];
      const input: number[] = orig.slice(0);
      const output: boolean = isArrayLike(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(true);

    });

    it(`'hello' => true`, () => {

      const orig: string = 'hello';
      const input: string = orig.slice(0);
      const output: boolean = isArrayLike(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(true);

    });

    it(`123 => false`, () => {

      const orig: number = 123;
      const input: number = orig;
      const output: boolean = isArrayLike(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(false);

    });

    it(`true => false`, () => {

      const orig: boolean = true;
      const input: boolean = true;
      const output: boolean = isArrayLike(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(false);

    });

    it(`f() => false`, () => {

      const fn: (a: number, b: number) => number
        = (a: number, b: number) => (a + b);

      const orig: (a: number, b: number) => number = fn;
      const input: (a: number, b: number) => number = orig;
      const output: boolean = isArrayLike(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(false);

    });

  });

  describe(`should handle invalid input`, () => {

    it(`null => false`, () => {

      const orig: number[] = null;
      const input: number[] = orig;
      const output: boolean = isArrayLike(input);
      should().equal(input, orig);
      output.should.deep.equal(false);

    });

    it(`undefine => false`, () => {

      const orig: number[] = undefined;
      const input: number[] = orig;
      const output: boolean = isArrayLike(input);
      should().equal(input, orig);
      output.should.deep.equal(false);

    });

  });


});
