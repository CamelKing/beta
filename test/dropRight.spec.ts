import { expect, should } from 'chai';
import { dropRight } from '../src/dropRight';

should();

describe(`dropRight() - @category Array`, () => {

  describe(`should handle nested array appropriately`, () => {

    it(`([[1],[2],[3]],1)=>[[1],[2]]`, () => {
      dropRight([[1], [2], [3]], 1).should.deep.equal([[1], [2]]);
    });

    it(`([[1],[2,3]],1)=>[[1]]`, () => {
      dropRight([[1], [2, 3]], 1).should.deep.equal([[1]]);
    });

  });

  describe(`should return [] if drop more than entire array`, () => {

    it(`([1,2,3],4)=>[]`, () => {
      dropRight([1, 2, 3], 4).should.deep.equal([]);
    });

  });

  describe(`should drop x items on the right`, () => {

    it(`([1,2,3],1)=>[1,2]`, () => {
      dropRight([1, 2, 3], 1).should.deep.equal([1, 2]);
    });

    it(`([1,2,3],2)=>[1]`, () => {
      dropRight([1, 2, 3], 2).should.deep.equal([1]);
    });

    it(`([1,2,3],3)=>[]`, () => {
      dropRight([1, 2, 3], 3).should.deep.equal([]);
    });

  });

  describe(`should drop last item by default`, () => {

    it(`[1,2,3]=>[1,2]`, () => {
      dropRight([1, 2, 3]).should.deep.equal([1, 2]);
    });

  });

  describe(`should return [] for empty array`, () => {

    it(`([],2)=>[]`, () => {
      dropRight([], 2).should.deep.equal([]);
    });

    it(`[]=>[]`, () => {
      dropRight([]).should.deep.equal([]);
    });

  });

  describe(`should return [] for null/undefined`, () => {

    it(`undefined=>[]`, () => {
      dropRight(undefined).should.deep.equal([]);
    });

    it(`null=>[]`, () => {
      dropRight(null).should.deep.equal([]);
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`([1,2,3],1)=>[1,2]`, () => {

      const orig: number[] = [1, 2, 3];
      const input: number[] = orig.slice(0);
      dropRight(input, 1).should.deep.equal([1, 2]);
      input.should.be.deep.equal(orig);

    });

  });

});
