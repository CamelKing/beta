import { expect, should } from 'chai';
import { log } from 'util';
import { drop } from '../src/drop';

should();

describe(`drop() - @category Array`, () => {

  describe(`should handle nested array appropriately`, () => {

    it(`([[1],[2],[3]],1)=>[[2],[3]]`, () => {
      drop([[1], [2], [3]], 1).should.deep.equal([[2], [3]]);
    });

    it(`([[1],[2,3]],1)=>[[2,3]]`, () => {
      drop([[1], [2, 3]], 1).should.deep.equal([[2, 3]]);
    });

  });

  describe(`should return [] if drop more than entire array`, () => {

    it(`([1,2,3],4)=>[]`, () => {
      drop([1, 2, 3], 4).should.deep.equal([]);
    });

  });

  describe(`should drop x items on the left`, () => {

    it(`([1,2,3],1)=>[2,3]`, () => {
      drop([1, 2, 3], 1).should.deep.equal([2, 3]);
    });

    it(`([1,2,3],2)=>[3]`, () => {
      drop([1, 2, 3], 2).should.deep.equal([3]);
    });

    it(`([1,2,3],3)=>[]`, () => {
      drop([1, 2, 3], 3).should.deep.equal([]);
    });

  });

  describe(`should drop first item by default`, () => {

    it(`[1,2,3]=>[2,3]`, () => {
      drop([1, 2, 3]).should.deep.equal([2, 3]);
    });

  });

  describe(`should return [] for empty array`, () => {

    it(`([],2)=>[]`, () => {
      drop([], 2).should.deep.equal([]);
    });

    it(`[]=>[]`, () => {
      drop([]).should.deep.equal([]);
    });

  });

  describe(`should return [] for null/undefined`, () => {

    it(`undefined=>[]`, () => {
      drop(undefined).should.deep.equal([]);
    });

    it(`null=>[]`, () => {
      drop(null).should.deep.equal([]);
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`([1,2,3],1)=>[2,3]`, () => {

      const orig: number[] = [1, 2, 3];
      const input: number[] = orig.slice(0);
      drop(input, 1).should.deep.equal([2, 3]);
      input.should.be.deep.equal(orig);

    });

  });

});
