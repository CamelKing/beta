import { should } from 'chai';
import { divide } from '../src/divide';

should();

describe(`divide() - @category Math`, () => {

  describe(`should return A / B`, () => {

    it(`(1,2) => 0.5`, () => {
      divide(1, 2).should.equal(0.5);
    });

    it(`(2,-1) => -2`, () => {
      divide(2, -1).should.equal(-2);
    });

    it(`(-2,3) => -2/3`, () => {
      divide(-2, 3).should.equal(-2 / 3);
    });

    it(`(-2,-1) => 2`, () => {
      divide(-2, -1).should.equal(2);
    });

  });

  describe(`should return NaN if either/both input is NaN`, () => {

    it(`(1,NaN) => NaN`, () => {
      divide(1, NaN).should.be.NaN;
    });

    it(`(NaN,1) => NaN`, () => {
      divide(NaN, 1).should.be.NaN;
    });

    it(`(NaN,NaN) => NaN`, () => {
      divide(NaN, NaN).should.be.NaN;
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`(1,2) => 2`, () => {

      const origA: any = 1;
      const origB: any = 2;
      const inputA: any = 1;
      const inputB: any = 2;
      divide(inputA, inputB).should.equal(inputA / inputB);
      inputA.should.be.deep.equal(origA);
      inputB.should.be.deep.equal(origB);

    });

  });

});
