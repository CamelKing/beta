import { expect, should } from 'chai';
import { toArray } from '../src/toArray';

should();

describe(`toArray() - @category Language`, () => {

  describe(`should convert an object (values) into an array`, () => {

    it(`({a:1, b:2})[Symbol.iterator]=>[1,2]`, () => {

      const orig: object = { a: 1, b: 2 };
      const input: object = orig;
      const output: number[] = toArray(input);
      orig.should.be.deep.equal(input);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(2);
      output.should.deep.equal([1, 2]);

    });

  });

  describe(`should convert iterator into an array`, () => {

    it(`[1,2,3][Symbol.iterator]=>[1,2,3]`, () => {

      const array: number[] = [1, 2, 3];
      const orig: number[] = array.slice(0);
      const input: IterableIterator<number> = orig[Symbol.iterator]();
      const output: number[] = toArray(input);
      orig.should.be.deep.equal(array);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(3);
      output.should.deep.equal([1, 2, 3]);

    });

    it(`'hello'[Symbol.iterator]=>['h','e','l','l','o']`, () => {

      const array: string = 'hello';
      const orig: string = array.slice(0);
      const input: IterableIterator<string> = orig[Symbol.iterator]();
      const output: string[] = toArray(input);
      orig.should.be.deep.equal(array);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(5);
      output.should.deep.equal(['h', 'e', 'l', 'l', 'o']);

    });

    it(`Set([1,2,3])[Symbol.iterator]=>['h','e','l','l','o']`, () => {

      const array: Set<number> = new Set([1, 2, 3]);
      const orig: Set<number> = array;
      const input: IterableIterator<number> = orig[Symbol.iterator]();
      const output: number[] = toArray(input);
      orig.should.be.deep.equal(array);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(3);
      output.should.deep.equal([1, 2, 3]);

    });

    it(`Map()[Symbol.iterator]=>[1,2,3]`, () => {

      const array: Map<string, number> = new Map([['a', 1], ['b', 2], ['c', 3]]);
      const orig: Map<string, number> = array;
      const input: IterableIterator<[string, number]> = orig[Symbol.iterator]();
      const output: Array<[string, number]> = toArray(input);
      orig.should.be.deep.equal(array);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(3);
      output.should.deep.equal([['a', 1], ['b', 2], ['c', 3]]);

    });

    it(`[][Symbol.iterator]=>[]`, () => {

      const array: number[] = [];
      const orig: number[] = array.slice(0);
      const input: IterableIterator<number> = orig[Symbol.iterator]();
      const output: number[] = toArray(input);
      orig.should.be.deep.equal(array);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(0);
      output.should.deep.equal([]);

    });

  });

  describe(`should convert a string containing unicode to an array`, () => {

    it(`'💣💣💣' => ['💣','💣','💣']`, () => {

      const orig: string = '💣💣💣';
      const input: string = orig.slice(0);
      const output: string[] = toArray(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(3);
      output.should.deep.equal(['💣', '💣', '💣']);

    });

    it(`'' => []`, () => {

      const orig: string = '';
      const input: string = orig.slice(0);
      const output: string[] = toArray(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(0);
      output.should.deep.equal([]);

    });

  });

  describe(`should handle non unicode string just fine`, () => {

    it(`'hello' => ['h','e','l','l','o']`, () => {

      const orig: string = 'hello';
      const input: string = orig.slice(0);
      const output: string[] = toArray(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(5);
      output.should.deep.equal(['h', 'e', 'l', 'l', 'o']);

    });

    it(`'  ' => [' ',' ']`, () => {

      const orig: string = '  ';
      const input: string = orig.slice(0);
      const output: string[] = toArray(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.have.lengthOf(2);
      output.should.deep.equal([' ', ' ']);

    });

  });

  describe(`should return empty array for null and undefined input`, () => {

    it(`null => []`, () => {

      const orig: string = null;
      const input: string = orig;
      const output: string[] = toArray(input);
      should().equal(input, orig);
      output.should.have.lengthOf(0);
      output.should.deep.equal([]);

    });

    it(`undefined => []`, () => {

      const orig: string = undefined;
      const input: string = orig;
      const output: string[] = toArray(input);
      should().equal(input, orig);
      output.should.have.lengthOf(0);
      output.should.deep.equal([]);

    });


  });

});
