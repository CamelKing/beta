import { should } from 'chai';
import { inRange } from '../src/inRange';

should();

describe(`inRange() - @category Number`, () => {

  describe(`should return true if low <= input < high`, () => {

    it(`(5,1,10) => true`, () => {
      inRange(5, 1, 10).should.be.true;
    });

    it(`(1,1,10) => true`, () => {
      inRange(1, 1, 10).should.be.true;
    });

    it(`(9,1,10) => true`, () => {
      inRange(9, 1, 10).should.be.true;
    });

  });

  describe(`should return false if input < low`, () => {

    it(`(0,1,10) => true`, () => {
      inRange(0, 1, 10).should.be.false;
    });

  });

  describe(`should return false if input >= high`, () => {

    it(`(10,1,10) => true`, () => {
      inRange(10, 1, 10).should.be.false;
    });

    it(`(11,1,10) => true`, () => {
      inRange(11, 1, 10).should.be.false;
    });

  });

  describe(`should accept low high in reverse order`, () => {

    it(`(5,1,10) => true`, () => {
      inRange(5, 1, 10).should.be.true;
    });

    it(`(5,10,1) => true`, () => {
      inRange(5, 10, 1).should.be.true;
    });

  });

  describe(`should compare within negative boundaries`, () => {

    it(`(-11,-1,-10) => true`, () => {
      inRange(-11, -1, -10).should.be.false;
    });

    it(`(-1,-1,-10) => true`, () => {
      inRange(-1, -1, -10).should.be.false;
    });

    it(`(-10,-1,-10) => true`, () => {
      inRange(-10, -1, -10).should.be.true;
    });

    it(`(-2,-1,-10) => true`, () => {
      inRange(-2, -1, -10).should.be.true;
    });

    it(`(-5,-1,-10) => true`, () => {
      inRange(-5, -1, -10).should.be.true;
    });

    it(`(-5,-10,-1) => true`, () => {
      inRange(-5, -10, -1).should.be.true;
    });

  });

  describe(`should accept numerical string`, () => {

    it(`('5','1','10') => true`, () => {
      inRange('5', '1', '10').should.be.true;
    });

    it(`(1,'1','10') => true`, () => {
      inRange(1, '1', '10').should.be.true;
    });

    it(`('9',1,10) => true`, () => {
      inRange('9', 1, 10).should.be.true;
    });

  });

  describe(`should assume (0, low) if high is omitted`, () => {

    it(`(5,10) => true`, () => {
      inRange(5, 10).should.be.true;
    });

    it(`(10,10) => false`, () => {
      inRange(10, 10).should.be.false;
    });

    it(`(-1,10) => false`, () => {
      inRange(-1, 10).should.be.false;
    });

  });

  describe(`should return false if low/input/high is NaN`, () => {

    it(`(NaN,1,10) => false`, () => {
      inRange(NaN, 1, 10).should.be.false;
    });

    it(`(1,NaN,10) => true`, () => {
      inRange(1, NaN, 10).should.be.false;
    });

    it(`(1,1,NaN) => true`, () => {
      inRange(1, 1, NaN).should.be.false;
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`(5,1,10) => true`, () => {

      const origInput: any = 5;
      const origLow: number = 1;
      const origHigh: number = 10;
      const input: any = 5;
      const low: number = 1;
      const high: number = 10;
      inRange(input, low, high).should.be.true;
      input.should.be.deep.equal(origInput);
      low.should.be.deep.equal(origLow);
      high.should.be.deep.equal(origHigh);

    });

  });


});

