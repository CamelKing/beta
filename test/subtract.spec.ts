import { should } from 'chai';
import { subtract } from '../src/subtract';

should();

describe(`subtract() - @category Math`, () => {

  describe(`should return A - B`, () => {

    it(`(1,2) => -1`, () => {
      subtract(1, 2).should.equal(-1);
    });

    it(`(2,-1) => 3`, () => {
      subtract(2, -1).should.equal(3);
    });

    it(`(-2,3) => -5`, () => {
      subtract(-2, 3).should.equal(-5);
    });

    it(`(-2,-1) => -1`, () => {
      subtract(-2, -1).should.equal(-1);
    });

  });

  describe(`should return NaN if either/both input is NaN`, () => {

    it(`(1,NaN) => NaN`, () => {
      subtract(1, NaN).should.be.NaN;
    });

    it(`(NaN,1) => NaN`, () => {
      subtract(NaN, 1).should.be.NaN;
    });

    it(`(NaN,NaN) => NaN`, () => {
      subtract(NaN, NaN).should.be.NaN;
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`(1,2) => -1`, () => {

      const origA: any = 1;
      const origB: any = 2;
      const inputA: any = 1;
      const inputB: any = 2;
      subtract(inputA, inputB).should.equal(inputA - inputB);
      inputA.should.be.deep.equal(origA);
      inputB.should.be.deep.equal(origB);

    });

  });

});
