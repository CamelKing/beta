import { should } from 'chai';
import { toArray } from '../src/toArray';

should();

describe(`toArray() - @category Language`, () => {

  describe(`should convert an object (values) into an array`, () => {

    it(`{a:1, b:2}=>[1,2]`, () => {
      toArray({ a: 1, b: 2 }).should.deep.equal([1, 2]);
    });

    it(`{}=>[]`, () => {
      toArray({}).should.deep.equal([]);
    });

  });

  describe(` should convert iterator into an array`, () => {

    it(`[1,2,3][Symbol.iterator]=>[1,2,3]`, () => {
      toArray([1, 2, 3][Symbol.iterator]())
        .should.deep.equal([1, 2, 3]);
    });

    it(`('hello')[Symbol.iterator]=>['h','e','l','l','o']`, () => {
      toArray(('hello')[Symbol.iterator]())
        .should.deep.equal(['h', 'e', 'l', 'l', 'o']);

    });

    it(`Set([1,2,3])[Symbol.iterator]=>[1,2,3]`, () => {
      toArray((new Set([1, 2, 3]))[Symbol.iterator]())
        .should.deep.equal([1, 2, 3]);
    });

    it(`Map()[Symbol.iterator]=>[1,2,3]`, () => {
      toArray((new Map([['a', 1], ['b', 2], ['c', 3]]))[Symbol.iterator]())
        .should.deep.equal([['a', 1], ['b', 2], ['c', 3]]);
    });

    it(`[][Symbol.iterator]=>[]`, () => {
      toArray([][Symbol.iterator]()).should.deep.equal([]);
    });

  });

  describe(`should convert unicode string to array`, () => {

    it(`'💣💣💣' => ['💣','💣','💣']`, () => {
      toArray('💣💣💣').should.deep.equal(['💣', '💣', '💣']);
    });

  });

  describe(`should convert non unicode string to array`, () => {

    it(`'hello' => ['h','e','l','l','o']`, () => {
      toArray('hello').should.deep.equal(['h', 'e', 'l', 'l', 'o']);
    });

    it(`'  ' => [' ',' ']`, () => {
      toArray('  ').should.deep.equal([' ', ' ']);
    });

  });

  describe(`should convert date object to array`, () => {

    it(`new Date() => []`, () => {
      toArray(new Date()).should.deep.equal([]);
    });

  });


  describe(`should return [] for empty string`, () => {

    it(`'' => []`, () => {
      toArray('').should.deep.equal([]);
    });

  });

  describe(`should return [] for number and boolean`, () => {

    it(`1 => []`, () => {
      toArray(1).should.deep.equal([]);
    });

    it(`true => []`, () => {
      toArray(true).should.deep.equal([]);
    });

  });

  describe(`should return [] for null/undefined/NaN`, () => {

    it(`null => []`, () => {
      toArray(null).should.deep.equal([]);
    });

    it(`undefined => []`, () => {
      toArray(undefined).should.deep.equal([]);
    });

    it(`NaN => []`, () => {
      toArray(NaN).should.deep.equal([]);
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`{a:1, b:2}=>[1,2]`, () => {

      const orig: object = { a: 1, b: 2 };
      const input: object = orig;
      toArray(input).should.deep.equal([1, 2]);
      orig.should.be.deep.equal(input);

    });

  });

});
