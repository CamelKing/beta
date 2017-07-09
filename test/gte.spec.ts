import { should } from 'chai';
import { gte } from '../src/gte';

should();

describe(`gte() - @category Language`, () => {

  describe(`should return true if a >= b (number)`, () => {

    it(`(3,1) => true`, () => {
      gte(3, 1).should.be.true;
    });

    it(`(3.01,3) => true`, () => {
      gte(3.01, 3).should.be.true;
    });

    it(`(3,3) => true`, () => {
      gte(3, 3).should.be.true;
    });

    it(`(1,3) => false`, () => {
      gte(1, 3).should.be.false;
    });

  });

  describe(`should return true if a >= b (numerical strings)`, () => {

    it(`('3','1') => true`, () => {
      gte('3', '1').should.be.true;
    });

    it(`('3.01','3') => true`, () => {
      gte('3.01', '3').should.be.true;
    });

    it(`('3','3') => true`, () => {
      gte('3', '3').should.be.true;
    });

    it(`('1','3') => false`, () => {
      gte('1', '3').should.be.false;
    });

  });

  describe(`should return true if a >= b (string - alphabetical order)`, () => {

    it(`('z','a') => true`, () => {
      gte('z', 'a').should.be.true;
    });

    it(`('z','z') => true`, () => {
      gte('z', 'z').should.be.true;
    });

    it(`('a','z') => false`, () => {
      gte('a', 'z').should.be.false;
    });

    it(`('a','A') => true`, () => {
      gte('a', 'A').should.be.true;
    });

    it(`('a','a') => true`, () => {
      gte('a', 'a').should.be.true;
    });

    it(`('a',' ') => true`, () => {
      gte('a', ' ').should.be.true;
    });

    it(`('a','') => true`, () => {
      gte('a', '').should.be.true;
    });

  });

  describe(`should return true if a >= b (mix number/strings)`, () => {

    it(`(3,'1') => true`, () => {
      gte(3, '1').should.be.true;
    });

    it(`('3.01',3) => true`, () => {
      gte('3.01', 3).should.be.true;
    });

    it(`(3,'3') => true`, () => {
      gte(3, '3').should.be.true;
    });

    it(`('1',3) => false`, () => {
      gte('1', 3).should.be.false;
    });

  });

  describe(`should return false for different types`, () => {

    it(`(3,'hello') => false`, () => {
      gte(3, 'hello').should.be.false;
    });

    it(`('hello',3) => false`, () => {
      gte('hello', 3).should.be.false;
    });

  });

  /*

    July 08 2017 -
    Taken care of by --StrictNullChecks

    describe(`should always treat null input as 0`, () => {

      it(`(null,3) => false`, () => {
        gte(null, 3).should.be.false;
      });

      it(`(3,null) => true`, () => {
        gte(3, null).should.be.true;
      });

      it(`(null,null) => true`, () => {
        gte(null, null).should.be.true;
      });

    });

    describe(`should return false when one/both is undefined`, () => {

      it(`(undefined,3) => false`, () => {
        gte(undefined, 3).should.be.false;
      });

      it(`(3,undefined) => false`, () => {
        gte(3, undefined).should.be.false;
      });

      it(`(undefined,undefined) => false`, () => {
        gte(undefined, undefined).should.be.false;
      });

    });

  */

  describe(`should return false when one/both is NaN`, () => {

    it(`(NaN,3) => false`, () => {
      gte(NaN, 3).should.be.false;
    });

    it(`(3,NaN) => false`, () => {
      gte(3, NaN).should.be.false;
    });

    it(`(NaN,NaN) => false`, () => {
      gte(NaN, NaN).should.be.false;
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`('world','hello') => true`, () => {

      const orig1: string = 'world';
      const orig2: string = 'hello';
      const input1: string = orig1.slice(0);
      const input2: string = orig2.slice(0);
      gte(input1, input2).should.be.true;
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);

    });

  });

});
