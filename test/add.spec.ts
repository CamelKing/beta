import { should } from 'chai';
import { add } from '../src/add';

should();

describe(`add() - @category Math`, () => {

  describe(`should return the sum of two numbers`, () => {

    it(`(1,2) => 3`, () => {
      add(1, 2).should.equal(3);
    });

    it(`(2,-1) => 1`, () => {
      add(2, -1).should.equal(1);
    });

    it(`(-2,3) => 1`, () => {
      add(-2, 3).should.equal(1);
    });

    it(`(-2,-1) => 1`, () => {
      add(-2, -1).should.equal(-3);
    });

  });

  describe(`should return NaN if either/both input is NaN`, () => {

    it(`(1,NaN) => NaN`, () => {
      add(1, NaN).should.be.NaN;
    });

    it(`(NaN,1) => NaN`, () => {
      add(NaN, 1).should.be.NaN;
    });

    it(`(NaN,NaN) => NaN`, () => {
      add(NaN, NaN).should.be.NaN;
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`(1,2) => 3`, () => {

      const origA: any = 1;
      const origB: any = 2;
      const inputA: any = 1;
      const inputB: any = 2;
      add(inputA, inputB).should.equal(inputA + inputB);
      inputA.should.be.deep.equal(origA);
      inputB.should.be.deep.equal(origB);

    });

  });

});
