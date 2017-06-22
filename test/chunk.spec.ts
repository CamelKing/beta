import { expect, should } from 'chai';
import { chunk } from '../src/chunk';

should();

describe('chunk() - @category Array', () => {

  describe(`should handle 'whole' chunk size`, () => {

    it(`(['a','b','c','d'], 4) => [['a','b','c','d']]`, () => {
      const orig: string[] = ['a', 'b', 'c', 'd'];
      const input: string[] = orig.slice(0);
      const output: string[][] = chunk(input, 4);
      output.should.have.lengthOf(1);
      output.should.not.equal(input);
      input.should.deep.equal(orig);
      output[0].should.have.lengthOf(4);
      output[0].should.not.equal(input);
      output[0].should.deep.equal(['a', 'b', 'c', 'd']);
    });

  });

  describe(`should handle 'not evenly split' chunk size`, () => {

    it(`([true,false,true], 2) => [[true,false], [true]]`, () => {
      const orig: boolean[] = [true, false, true];
      const input: boolean[] = orig.slice(0);
      const output: boolean[][] = chunk(input, 2);
      output.should.have.lengthOf(2);
      output.should.not.equal(input);
      input.should.deep.equal(orig);
      output[0].should.have.lengthOf(2);
      output[0].should.not.equal(input);
      output[0].should.deep.equal([true, false]);
      output[1].should.have.lengthOf(1);
      output[1].should.not.equal(input);
      output[1].should.deep.equal([true]);
    });

    it(`(['a','b','c','d'], 3) => [['a','b','c'],['d']]`, () => {
      const orig: string[] = ['a', 'b', 'c', 'd'];
      const input: string[] = orig.slice(0);
      const output: string[][] = chunk(input, 3);
      output.should.have.lengthOf(2);
      output.should.not.equal(input);
      input.should.deep.equal(orig);
      output[0].should.have.lengthOf(3);
      output[0].should.not.equal(input);
      output[0].should.deep.equal(['a', 'b', 'c']);
      output[1].should.have.lengthOf(1);
      output[1].should.not.equal(input);
      output[1].should.deep.equal(['d']);
    });

    it(`([1,2,3,4,5,6], 4) => [[1,2,3,4],[5,6]]`, () => {
      const orig: number[] = [1, 2, 3, 4, 5, 6];
      const input: number[] = orig.slice(0);
      const output: number[][] = chunk(input, 4);
      output.should.have.lengthOf(2);
      output.should.not.equal(input);
      input.should.deep.equal(orig);
      output[0].should.have.lengthOf(4);
      output[0].should.not.equal(input);
      output[0].should.deep.equal([1, 2, 3, 4]);
      output[1].should.have.lengthOf(2);
      output[1].should.not.equal(input);
      output[1].should.deep.equal([5, 6]);
    });

  });

  describe(`should handle 'evenly split' chunk size`, () => {

    it(`([true,false], 2) => [[true,false]]`, () => {
      const orig: boolean[] = [true, false];
      const input: boolean[] = orig.slice(0);
      const output: boolean[][] = chunk(input, 2);
      output.should.have.lengthOf(1);
      output.should.not.equal(input);
      input.should.deep.equal(orig);
      output[0].should.have.lengthOf(2);
      output[0].should.not.equal(input);
      output[0].should.deep.equal([true, false]);
    });

    it(`(['a','b','c','d'], 2) => [['a','b'],['c','d']]`, () => {
      const orig: string[] = ['a', 'b', 'c', 'd'];
      const input: string[] = orig.slice(0);
      const output: string[][] = chunk(input, 2);
      output.should.have.lengthOf(2);
      output.should.not.equal(input);
      input.should.deep.equal(orig);
      output[0].should.have.lengthOf(2);
      output[0].should.not.equal(input);
      output[0].should.deep.equal(['a', 'b']);
      output[1].should.have.lengthOf(2);
      output[1].should.not.equal(input);
      output[1].should.deep.equal(['c', 'd']);
    });

    it(`([1,2,3,4,5,6], 3) => [[1,2,3],[4,5,6]]`, () => {
      const orig: number[] = [1, 2, 3, 4, 5, 6];
      const input: number[] = orig.slice(0);
      const output: number[][] = chunk(input, 3);
      output.should.have.lengthOf(2);
      output.should.not.equal(input);
      input.should.deep.equal(orig);
      output[0].should.have.lengthOf(3);
      output[0].should.not.equal(input);
      output[0].should.deep.equal([1, 2, 3]);
      output[1].should.have.lengthOf(3);
      output[1].should.not.equal(input);
      output[1].should.deep.equal([4, 5, 6]);
    });

  });

  describe(`should use 1 as default chunk size`, () => {

    it(`(['a','b','c','d']) => [['a'],['b'],['c'],['d']]`, () => {
      const orig: string[] = ['a', 'b', 'c', 'd'];
      const input: string[] = orig.slice(0);
      const output: string[][] = chunk(input);
      output.should.have.lengthOf(4);
      output.should.not.equal(input);
      input.should.deep.equal(orig);
      output[0].should.have.lengthOf(1);
      output[0].should.not.equal(input);
      output[0].should.deep.equal(['a']);
      output[1].should.have.lengthOf(1);
      output[1].should.not.equal(input);
      output[1].should.deep.equal(['b']);
      output[2].should.have.lengthOf(1);
      output[2].should.not.equal(input);
      output[2].should.deep.equal(['c']);
      output[3].should.have.lengthOf(1);
      output[3].should.not.equal(input);
      output[3].should.deep.equal(['d']);
    });

  });

  describe(`should return [] with invalid parameters`, () => {

    it(`(['1','2'],-1)=>[]`, () => {
      const input: string[] = ['1', '2'];
      const output: string[][] = chunk(input, -1);
      output.should.have.lengthOf(0);
      output.should.not.equal(input);
      output.should.deep.equal([]);
    });


    it(`[]=>[]`, () => {
      const input: string[] = [];
      const output: string[][] = chunk(input, 2);
      output.should.have.lengthOf(0);
      output.should.not.equal(input);
      output.should.deep.equal([]);
    });

    it(`null=>[]`, () => {
      const input: string[] = null;
      const output: string[][] = chunk(input, 2);
      output.should.have.lengthOf(0);
      output.should.not.equal(input);
      output.should.deep.equal([]);
    });

    it(`undefined=>[]`, () => {
      const input: string[] = undefined;
      const output: string[][] = chunk(input, 2);
      output.should.have.lengthOf(0);
      output.should.not.equal(input);
      output.should.deep.equal([]);
    });

  });

});
