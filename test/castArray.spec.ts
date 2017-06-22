import { expect, should } from 'chai';
import { castArray } from '../src/castArray';

should();

describe(`castArray() - @category Language`, () => {

  describe(`should turn multiple arguments (mixed types) into array`, () => {

    it(`(1,2,3)=>[1,2,3]`, () => {

      const output: number[] = castArray(1, 2, 3);
      output.should.have.lengthOf(3);
      output.should.deep.equal([1, 2, 3]);

    });

    it(`(false,'2',3)=>[false,'2',3]`, () => {

      const output: any[] = castArray(false, '2', 3);
      output.should.have.lengthOf(3);
      output.should.deep.equal([false, '2', 3]);

    });

  });

  describe(`should return array being passed in as is`, () => {

    it(`[1,2,3]=>[1,2,3]`, () => {

      const orig: number[] = [1, 2, 3];
      const input: number[] = orig.slice(0);
      const output: number[] = castArray(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(3);
      output.should.deep.equal([1, 2, 3]);

    });

  });

  describe(`should cast all non-array items into an array`, () => {

    it(`({a:1})=>[{a:1}]`, () => {

      const orig: object = { a: 1 };
      const input: object = { a: 1 };
      const output: object[] = castArray(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(1);
      output.should.deep.equal([{ a: 1 }]);

    });

    it(`(1)=>[1]`, () => {

      const orig: number = 1;
      const input: number = orig;
      const output: number[] = castArray(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(1);
      output.should.deep.equal([1]);

    });

    it(`('hello')=>['hello']`, () => {

      const orig: string = 'hello';
      const input: string = orig.slice(0);
      const output: string[] = castArray(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(1);
      output.should.deep.equal(['hello']);

    });

    it(`(true)=>[true]`, () => {

      const orig: boolean = true;
      const input: boolean = orig;
      const output: boolean[] = castArray(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(1);
      output.should.deep.equal([true]);

    });

  });

  describe(`should return [] if no param passed`, () => {

    it(`()=>[]`, () => {

      const output: any[] = castArray();
      output.should.have.lengthOf(0);
      output.should.deep.equal([]);

    });

  });

  describe(`should cast null and undefined into an array`, () => {

    it(`(null)=>[null]`, () => {

      const input: number = null;
      const output: number[] = castArray(input);
      should().not.exist(input);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(1);
      output.should.deep.equal([null]);

    });

    it(`(undefined)=>[undefined]`, () => {

      const input: number = undefined;
      const output: number[] = castArray(input);
      should().not.exist(input);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(1);
      output.should.deep.equal([undefined]);

    });

  });

});
