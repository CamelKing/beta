import { expect, should } from 'chai';
import { lt } from '../src/lt';

should();

describe(`lt() - @category Language`, () => {

  describe(`should return true if a < b (number)`, () => {

    it(`(3,1) => false`, () => {
      lt(3, 1).should.equal(false);
    });

    it(`(3.01,3) => false`, () => {
      lt(3.01, 3).should.equal(false);
    });

    it(`(3,3) => false`, () => {
      lt(3, 3).should.equal(false);
    });

    it(`(1,3) => true`, () => {
      lt(1, 3).should.equal(true);
    });

  });

  describe(`should return true if a < b (numerical strings)`, () => {

    it(`('3','1') => false`, () => {
      lt('3', '1').should.equal(false);
    });

    it(`('3.01','3') => false`, () => {
      lt('3.01', '3').should.equal(false);
    });

    it(`('3','3') => false`, () => {
      lt('3', '3').should.equal(false);
    });

    it(`('1','3') => true`, () => {
      lt('1', '3').should.equal(true);
    });

  });

  describe(`should return true if a < b (string - alphabetical order)`, () => {

    it(`('z','a') => false`, () => {
      lt('z', 'a').should.equal(false);
    });

    it(`('a','z') => true`, () => {
      lt('a', 'z').should.equal(true);
    });

    it(`('a','A') => false`, () => {
      lt('a', 'A').should.equal(false);
    });

    it(`('a','a') => false`, () => {
      lt('a', 'a').should.equal(false);
    });

    it(`('a',' ') => false`, () => {
      lt('a', ' ').should.equal(false);
    });

    it(`('a','') => false`, () => {
      lt('a', '').should.equal(false);
    });

  });

  describe(`should return true if a < b (mix number/strings)`, () => {

    it(`(3,'1') => false`, () => {
      lt(3, '1').should.equal(false);
    });

    it(`('3.01',3) => false`, () => {
      lt('3.01', 3).should.equal(false);
    });

    it(`(3,'3') => false`, () => {
      lt(3, '3').should.equal(false);
    });

    it(`('1',3) => true`, () => {
      lt('1', 3).should.equal(true);
    });

  });

  describe(`should treat null as 0`, () => {

    it(`(null,3) => true`, () => {
      lt(null, 3).should.equal(true);
    });

    it(`(3,null) => false`, () => {
      lt(3, null).should.equal(false);
    });

    it(`(null,null) => false`, () => {
      lt(null, null).should.equal(false);
    });

  });

  describe(`should return false when one/both is undefined/NaN`, () => {

    it(`(undefined,3) => false`, () => {
      lt(undefined, 3).should.equal(false);
    });

    it(`(3,undefined) => false`, () => {
      lt(3, undefined).should.equal(false);
    });

    it(`(undefined, undefined) => false`, () => {
      lt(undefined, undefined).should.equal(false);
    });

    it(`(NaN,3) => false`, () => {
      lt(NaN, 3).should.equal(false);
    });

    it(`(3,NaN) => false`, () => {
      lt(3, NaN).should.equal(false);
    });

    it(`(NaN, NaN) => false`, () => {
      lt(NaN, NaN).should.equal(false);
    });

  });

  describe(`should return false for different types`, () => {

    it(`(3,'hello') => false`, () => {
      lt(3, 'hello').should.equal(false);
    });

    it(`('hello',3) => false`, () => {
      lt('hello', 3).should.equal(false);
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`(1,3) => true`, () => {

      const orig1: number = 1;
      const orig2: number = 3;
      const input1: number = orig1;
      const input2: number = orig2;
      lt(input1, input2).should.equal(true);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);

    });

  });

});
