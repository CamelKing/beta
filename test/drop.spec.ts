import { expect, should } from 'chai';
import { drop } from '../src/drop';

should();

describe(`drop() - @category Array`, () => {

  describe(`should handle nested array appropriately`, () => {

    it(`([[1],[2],[3]],1)=>[[2],[3]]`, () => {

      const orig: number[][] = [[1], [2], [3]];
      const input: number[][] = orig.slice(0);
      const output: number[][] = drop(input, 1);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(2);
      output.should.deep.equal([[2], [3]]);

    });

    it(`([[1],[2,3]],1)=>[[2,3]]`, () => {

      const orig: number[][] = [[1], [2, 3]];
      const input: number[][] = orig.slice(0);
      const output: number[][] = drop(input, 1);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(1);
      output.should.deep.equal([[2, 3]]);

    });

  });

  describe(`should return [] if drop more than entire array`, () => {

    it(`([1,2,3],4)=>[]`, () => {

      const orig: number[] = [1, 2, 3];
      const input: number[] = orig.slice(0);
      const output: number[] = drop(input, 4);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(0);
      output.should.deep.equal([]);

    });

  });

  describe(`should drop x items on the left`, () => {

    it(`([1,2,3],1)=>[2,3]`, () => {

      const orig: number[] = [1, 2, 3];
      const input: number[] = orig.slice(0);
      const output: number[] = drop(input, 1);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(2);
      output.should.deep.equal([2, 3]);

    });

    it(`([1,2,3],2)=>[3]`, () => {

      const orig: number[] = [1, 2, 3];
      const input: number[] = orig.slice(0);
      const output: number[] = drop(input, 2);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(1);
      output.should.deep.equal([3]);

    });

    it(`([1,2,3],3)=>[]`, () => {

      const orig: number[] = [1, 2, 3];
      const input: number[] = orig.slice(0);
      const output: number[] = drop(input, 3);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(0);
      output.should.deep.equal([]);

    });

  });

  describe(`should drop first item by default`, () => {

    it(`[1,2,3]=>[2,3]`, () => {

      const orig: number[] = [1, 2, 3];
      const input: number[] = orig.slice(0);
      const output: number[] = drop(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(2);
      output.should.deep.equal([2, 3]);

    });

  });

  describe(`should return [] for empty array`, () => {

    it(`null=>[]`, () => {

      const orig: number[] = null;
      const input: number[] = orig;
      const output: number[] = drop(input);
      should().not.exist(input);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(0);
      output.should.deep.equal([]);

    });

    it(`undefined=>[]`, () => {

      const orig: number[] = undefined;
      const input: number[] = orig;
      const output: number[] = drop(input);
      should().not.exist(input);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(0);
      output.should.deep.equal([]);

    });

    it(`([],2)=>[]`, () => {

      const orig: number[] = [];
      const input: number[] = orig.slice(0);
      const output: number[] = drop(input, 1);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(0);
      output.should.deep.equal([]);

    });

    it(`[]=>[]`, () => {

      const orig: number[] = [];
      const input: number[] = orig.slice(0);
      const output: number[] = drop(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(0);
      output.should.deep.equal([]);

    });

  });

});
