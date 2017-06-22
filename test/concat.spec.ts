import { expect, should } from 'chai';
import { concat } from '../src/concat';

should();

describe(`concat() - @category Array`, () => {

  describe(`should be able to handle a mix of params`, () => {

    it(`([1,'b',true],-1,[[null],[false]],[]) => [1,'b',true,-1,[null],[false]]`, () => {

      const orig1: any[] = [1, 'b', true];
      const orig2: any[] = [[null], [false]];
      const input1: any[] = orig1.slice(0);
      const input2: any[][] = orig2.slice(0);
      const output: any[] = concat(input1, -1, input2, []);

      input1.should.deep.equal(orig1);
      input2.should.deep.equal(orig2);
      output.should.deep.equal( [1, 'b', true, -1, [null], [false]] );

    });

    it(`([1,'b',true],100,[[null],[false]]) => [1,'b',true,100,[null],[false]]`, () => {

      const orig1: any[] = [1, 'b', true];
      const orig2: any[] = [[null], [false]];
      const input1: any[] = orig1.slice(0);
      const input2: any[][] = orig2.slice(0);
      const output: any[] = concat(input1, 100, input2);

      input1.should.deep.equal(orig1);
      input2.should.deep.equal(orig2);
      output.should.deep.equal( [1, 'b', true, 100, [null], [false]] );

    });

    it(`([1,'b',true],100) => [1,'b',true,100]`, () => {

      const orig1: any[] = [1, 'b', true];
      const input1: any[] = orig1.slice(0);
      const output: any[] = concat(input1, 100);

      input1.should.deep.equal(orig1);
      output.should.deep.equal( [1, 'b', true, 100] );

    });

  });

  describe(`should be able to concat nested array`, () => {

    it(`([1,2,3],[['a','b'],['c']) => [1,2,3,['a','b'],['c']]`, () => {

      const orig1: number[] = [1, 2, 3];
      const orig2: string[][] = [['a', 'b'], ['c']];
      const input1: number[] = orig1.slice(0);
      const input2: string[][] = orig2.slice(0);
      const output: any[] = concat(input1, input2);

      input1.should.deep.equal(orig1);
      input2.should.deep.equal(orig2);
      output.should.deep.equal( [1, 2, 3, ['a', 'b'], ['c']] );

    });

    it(`([1,2,3],[['a','b','c']) => [1,2,3,['a','b','c']]`, () => {

      const orig1: number[] = [1, 2, 3];
      const orig2: string[][] = [['a', 'b', 'c']];
      const input1: number[] = orig1.slice(0);
      const input2: string[][] = orig2.slice(0);
      const output: any[] = concat(input1, input2);

      input1.should.deep.equal(orig1);
      input2.should.deep.equal(orig2);
      output.should.deep.equal( [1, 2, 3, ['a', 'b', 'c']] );

    });

  });

  describe(`should concatenate 2 or more arrays together`, () => {

    it(`([1,2,3],['a','b','c'],[true,false]) => [1,2,3,'a','b','c',true,false]`, () => {

      const orig1: number[] = [1, 2, 3];
      const orig2: string[] = ['a', 'b', 'c'];
      const orig3: boolean[] = [true, false];
      const input1: number[] = orig1.slice(0);
      const input2: string[] = orig2.slice(0);
      const input3: boolean[] = orig3.slice(0);
      const output: any[] = concat(input1, input2, input3);

      input1.should.deep.equal(orig1);
      input2.should.deep.equal(orig2);
      input3.should.deep.equal(orig3);
      output.should.deep.equal( [1, 2, 3, 'a', 'b', 'c', true, false] );

    });

    it(`([1,2,3],['a','b','c']) => [1,2,3,'a','b','c']`, () => {

      const orig1: number[] = [1, 2, 3];
      const orig2: string[] = ['a', 'b', 'c'];
      const input1: number[] = orig1.slice(0);
      const input2: string[] = orig2.slice(0);
      const output: any[] = concat(input1, input2);

      input1.should.deep.equal(orig1);
      input2.should.deep.equal(orig2);
      output.should.deep.equal( [1, 2, 3, 'a', 'b', 'c'] );

    });

  });

  describe(`should add non-array params as elements in output array`, () => {

    it(`(1,'hello',true)=>[1,'hello',true]`, () => {
      const output: number[][] = concat(1, 'hello', true);
      output.should.have.lengthOf(3);
      output.should.deep.equal([1, 'hello', true]);
    });

    it(`(1,2)=>[1,2]`, () => {
      const output: number[][] = concat(1, 2);
      output.should.have.lengthOf(2);
      output.should.deep.equal([1, 2]);
    });

    it(`(NaN)=>[NaN]`, () => {
      const output: number[][] = concat(NaN);
      output.should.have.lengthOf(1);
      output.should.deep.equal([NaN]);
    });

    it(`(null)=>[null]`, () => {
      const output: number[][] = concat(null);
      output.should.have.lengthOf(1);
      output.should.deep.equal([null]);
    });

    it(`(undefined)=>[undefined]`, () => {
      const output: number[][] = concat(undefined);
      output.should.have.lengthOf(1);
      output.should.deep.equal([undefined]);
    });

  });

  describe(`should return [] if no params, or empty array`, () => {

    it(`([],[],[])=>[]`, () => {
      const output: number[][] = concat([], [], []);
      output.should.have.lengthOf(0);
      output.should.deep.equal([]);
    });

    it(`([],[])=>[]`, () => {
      const output: number[][] = concat([], []);
      output.should.have.lengthOf(0);
      output.should.deep.equal([]);
    });

    it(`[]=>[]`, () => {
      const output: number[][] = concat([]);
      output.should.have.lengthOf(0);
      output.should.deep.equal([]);
    });

    it(`()=>[]`, () => {
      const output: number[][] = concat();
      output.should.have.lengthOf(0);
      output.should.deep.equal([]);
    });

  });


});
