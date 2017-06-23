import { expect, should } from 'chai';
import { isArray } from '../src/isArray';

should();

describe(`isArray() - @category Language`, () => {

  describe(`should identify an array`, () => {

    it(`['a','b','c'] => true`, () => {

      const orig: string[] = ['a', 'b', 'c'];
      const input: string[] = orig.slice(0);
      const output: boolean = isArray(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.equal(true);

    });

    it(`[1,2,3] => true`, () => {

      const orig: number[] = [1, 2, 3];
      const input: number[] = orig.slice(0);
      const output: boolean = isArray(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.equal(true);

    });

    it(`[1,[2,3]] => true`, () => {

      const orig: Array<number | number[]> = [1, [2, 3]];
      const input: Array<number | number[]> = orig.slice(0);
      const output: boolean = isArray(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.equal(true);

    });

  });

  describe(`should identify non array`, () => {

    it(`'hello world' => false`, () => {

      const orig: string = 'hello world';
      const input: string = orig.slice(0);
      const output: boolean = isArray(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.equal(false);

    });

    it(`123 => false`, () => {

      const orig: number = 123;
      const input: number = orig;
      const output: boolean = isArray(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.equal(false);

    });

    it(`true => false`, () => {

      const orig: boolean = true;
      const input: boolean = orig;
      const output: boolean = isArray(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.equal(false);

    });

  });

});
