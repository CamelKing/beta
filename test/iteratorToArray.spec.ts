import { expect, should } from 'chai';
import { iteratorToArray } from '../src/iteratorToArray';

should();

describe(`iteratorToArray() - @category Language`, () => {

  describe(`should convert iterator into an array`, () => {

    it(`[1,2,3][Symbol.iterator]=>[1,2,3]`, () => {

      const array: number[] = [1, 2, 3];
      const orig: number[] = array.slice(0);
      const input: IterableIterator<number> = orig[Symbol.iterator]();
      const output: number[] = iteratorToArray(input);
      orig.should.be.deep.equal(array);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(3);
      output.should.deep.equal([1, 2, 3]);

    });

    it(`'hello'[Symbol.iterator]=>['h','e','l','l','o']`, () => {

      const array: string = 'hello';
      const orig: string = array.slice(0);
      const input: IterableIterator<string> = orig[Symbol.iterator]();
      const output: string[] = iteratorToArray(input);
      orig.should.be.deep.equal(array);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(5);
      output.should.deep.equal(['h', 'e', 'l', 'l', 'o']);

    });

    it(`Set([1,2,3])[Symbol.iterator]=>['h','e','l','l','o']`, () => {

      const array: Set<number> = new Set([1, 2, 3]);
      const orig: Set<number> = array;
      const input: IterableIterator<number> = orig[Symbol.iterator]();
      const output: number[] = iteratorToArray(input);
      orig.should.be.deep.equal(array);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(3);
      output.should.deep.equal([1, 2, 3]);

    });

    it(`Map()[Symbol.iterator]=>[1,2,3]`, () => {

      const array: Map<string, number> = new Map([['a', 1], ['b', 2], ['c', 3]]);
      const orig: Map<string, number> = array;
      const input: IterableIterator<[string, number]> = orig[Symbol.iterator]();
      const output: Array<[string, number]> = iteratorToArray(input);
      orig.should.be.deep.equal(array);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(3);
      output.should.deep.equal([['a', 1], ['b', 2], ['c', 3]]);

    });

    it(`[][Symbol.iterator]=>[]`, () => {

      const array: number[] = [];
      const orig: number[] = array.slice(0);
      const input: IterableIterator<number> = orig[Symbol.iterator]();
      const output: number[] = iteratorToArray(input);
      orig.should.be.deep.equal(array);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(0);
      output.should.deep.equal([]);

    });

  });

});
