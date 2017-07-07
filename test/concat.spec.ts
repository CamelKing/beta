import { expect, should } from 'chai';
import { concat } from '../src/concat';

should();

describe(`concat() - @category Array`, () => {

  describe(`should be able to handle a mix of params`, () => {

    it(`([1,'b',true],-1,[[null],[false]],[]) => [1,'b',true,-1,[null],[false]]`, () => {

      concat([1, 'b', true], -1, [[null], [false]], [])
        .should.deep.equal([1, 'b', true, -1, [null], [false]]);

    });

    it(`([1,'b',true],100,[[null],[false]]) => [1,'b',true,100,[null],[false]]`, () => {

      concat([1, 'b', true], 100, [[null], [false]])
        .should.deep.equal([1, 'b', true, 100, [null], [false]]);

    });

    it(`([1,'b',true],100) => [1,'b',true,100]`, () => {
      concat([1, 'b', true], 100).should.deep.equal([1, 'b', true, 100]);
    });

  });

  describe(`should be able to concat nested array`, () => {

    it(`([1,2,3],[['a','b'],['c']) => [1,2,3,['a','b'],['c']]`, () => {

      concat([1, 2, 3], [['a', 'b'], ['c']]).should.deep.equal([1, 2, 3, ['a', 'b'], ['c']]);

    });

    it(`([1,2,3],[['a','b','c']) => [1,2,3,['a','b','c']]`, () => {

      concat([1, 2, 3], [['a', 'b', 'c']]).should.deep.equal([1, 2, 3, ['a', 'b', 'c']]);

    });

  });

  describe(`should concatenate 2 or more arrays together`, () => {

    it(`([1,2,3],['a','b','c'],[true,false]) => [1,2,3,'a','b','c',true,false]`, () => {

      concat([1, 2, 3], ['a', 'b', 'c'], [true, false]).should.deep.equal([1, 2, 3, 'a', 'b', 'c', true, false]);

    });

    it(`([1,2,3],['a','b','c']) => [1,2,3,'a','b','c']`, () => {

      concat([1, 2, 3], ['a', 'b', 'c']).should.deep.equal([1, 2, 3, 'a', 'b', 'c']);

    });

  });

  describe(`should add non-array params as elements in output array`, () => {

    it(`(1,'hello',true)=>[1,'hello',true]`, () => {
      concat(1, 'hello', true).should.deep.equal([1, 'hello', true]);
    });

    it(`(1,2)=>[1,2]`, () => {
      concat(1, 2).should.deep.equal([1, 2]);
    });

  });

  describe(`should return null/undefined/NaN in an array`, () => {

    it(`(NaN)=>[NaN]`, () => {
      concat(NaN).should.deep.equal([NaN]);
    });

    it(`(null)=>[null]`, () => {
      concat(null).should.deep.equal([null]);
    });

    it(`(undefined)=>[undefined]`, () => {
      concat(undefined).should.deep.equal([undefined]);
    });

  });

  describe(`should return [] if no params, or empty array`, () => {

    it(`([],[],[])=>[]`, () => {
      concat([], [], []).should.deep.equal([]);
    });

    it(`([],[])=>[]`, () => {
      concat([], []).should.deep.equal([]);
    });

    it(`[]=>[]`, () => {
      concat([]).should.deep.equal([]);
    });

    it(`()=>[]`, () => {
      concat().should.deep.equal([]);
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`([1,2,3],[4,5,6]) => [1,2,3,4,5,6]`, () => {

      const orig1: number[] = [1, 2, 3];
      const orig2: number[] = [4, 5, 6];
      const input1: number[] = orig1.slice(0);
      const input2: number[] = orig2.slice(0);
      concat(input1, input2).should.deep.equal([1, 2, 3, 4, 5, 6]);
      input1.should.deep.equal(orig1);
      input2.should.deep.equal(orig2);

    });

  });

});
