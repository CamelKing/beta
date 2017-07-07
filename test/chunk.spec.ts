import { expect, should } from 'chai';
import { chunk } from '../src/chunk';

should();

describe('chunk() - @category Array', () => {

  describe(`should handle 'whole' chunk size`, () => {

    it(`(['a','b','c','d'], 4) => [['a','b','c','d']]`, () => {
      chunk(['a', 'b', 'c', 'd'], 4).should.deep.equal([['a', 'b', 'c', 'd']]);
    });

  });

  describe(`should handle 'not evenly split' chunk size`, () => {

    it(`([true,false,true], 2) => [[true,false], [true]]`, () => {
      chunk([true, false, true], 2).should.deep.equal([[true, false], [true]]);
    });

    it(`(['a','b','c','d'], 3) => [['a','b','c'],['d']]`, () => {
      chunk(['a', 'b', 'c', 'd'], 3).should.deep.equal([['a', 'b', 'c'], ['d']]);
    });

    it(`([1,2,3,4,5,6], 4) => [[1,2,3,4],[5,6]]`, () => {
      chunk([1, 2, 3, 4, 5, 6], 4).should.deep.equal([[1, 2, 3, 4], [5, 6]]);
    });

  });

  describe(`should optionally make the chunk whole`, () => {

    it(`([1,2,3,4], 3) => [[1,2,3],[4, , ]]`, () => {
      // tslint:disable-next-line:whitespace
      chunk([1, 2, 3, 4], 3, true).should.deep.equal([[1, 2, 3], [4, ,]]);
    });

  });


  describe(`should handle 'evenly split' chunk size`, () => {

    it(`([true,false], 2) => [[true,false]]`, () => {
      chunk([true, false], 2).should.deep.equal([[true, false]]);
    });

    it(`(['a','b','c','d'], 2) => [['a','b'],['c','d']]`, () => {

      chunk(['a', 'b', 'c', 'd'], 2).should.deep.equal([['a', 'b'], ['c', 'd']]);
    });

    it(`([1,2,3,4,5,6], 3) => [[1,2,3],[4,5,6]]`, () => {
      chunk([1, 2, 3, 4, 5, 6], 3).should.deep.equal([[1, 2, 3], [4, 5, 6]]);
    });

  });

  describe(`should use 1 as default chunk size`, () => {

    it(`([1,2,3,4]) => [[1],[2],[3],[4]]`, () => {
      chunk([1, 2, 3, 4]).should.deep.equal([[1], [2], [3], [4]]);
    });

  });

  describe(`should return original array as chunk 0 if chunk size too big`, () => {

    it(`([1,2], 3) => [[1,2]]`, () => {
      chunk([1, 2], 3).should.deep.equal([[1, 2]]);
    });

  });

  describe(`should return [] with invalid parameters`, () => {

    it(`([1,2],-1)=>[]`, () => {
      chunk([1, 2], -1).should.deep.equal([]);
    });

    it(`[]=>[]`, () => {
      chunk([], 2).should.deep.equal([]);
    });

    it(`null=>[]`, () => {
      chunk(null, 2).should.deep.equal([]);
    });

    it(`undefined=>[]`, () => {
      chunk(undefined, 2).should.deep.equal([]);
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`(['a','b','c','d'], 2) => [['a','b'],['c','d']]`, () => {

      const orig: string[] = ['a', 'b', 'c', 'd'];
      const input: string[] = orig.slice(0);
      chunk(input, 2).should.deep.equal([['a', 'b'], ['c', 'd']]);
      input.should.deep.equal(orig);

    });

    it(`([{a:'b'},{c:'d'}], 1) => [[{a:'b'}],[{c:'d'}]]`, () => {

      const orig: object[] = [{ a: 'b' }, { c: 'd' }];
      const input: object[] = orig.slice(0);
      chunk(input, 1).should.deep.equal([[{ a: 'b' }], [{ c: 'd' }]]);
      input.should.deep.equal(orig);

    });

  });

});
