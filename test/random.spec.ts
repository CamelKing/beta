import { should } from 'chai';
import { isInteger } from '../src/isInteger';
import { random } from '../src/random';

should();

describe(`random() - @category Number`, () => {

  describe(`should return random integer w/ integer (low, high]`, () => {

    it(`(1.0, 10.0) => 10.0 > result >= 1.0`, () => {
      const r: number = random(1.0, 10.0);
      r.should.be.gte(1.0);
      r.should.be.lt(10.0);
      isInteger(r).should.be.true;
    });

    it(`(1, 10) => 100 > result >= 1`, () => {
      const r: number = random(1, 10);
      r.should.be.gte(1);
      r.should.be.lt(10);
      isInteger(r).should.be.true;
    });

  });

  describe(`should return random floating w/ floating (low, high]`, () => {

    it(`(1.01, 10.01) => 10.01 > result >= 1.01`, () => {
      const r: number = random(1.01, 10.01);
      r.should.be.gte(1.01);
      r.should.be.lt(10.01);
      isInteger(r).should.be.false;
    });

  });

  describe(`should force a random floating number`, () => {

    it(`(1.0, 10.0) => 10.0 > result >= 1.0`, () => {
      const r: number = random(1.0, 10.0, true);
      r.should.be.gte(1.0);
      r.should.be.lt(10.0);
      isInteger(r).should.be.false;
    });

    it(`(1, 10) => 10 > result >= 1`, () => {
      const r: number = random(1, 10, true);
      r.should.be.gte(1);
      r.should.be.lt(10);
      isInteger(r).should.be.false;
    });

  });

  describe(`should force a random integer number`, () => {

    it(`(1.01, 10.01) => 10 > result >= 1`, () => {
      const r: number = random(1.01, 10.01, false);
      r.should.be.gte(1.01);
      r.should.be.lt(10.01);
      isInteger(r).should.be.true;
    });

  });

  describe(`should return default random floating number (0.0,1.0])`, () => {

    it(`() => 1.0 > result >= 0.0`, () => {
      const r: number = random();
      r.should.be.gte(0);
      r.should.be.lt(1);
      isInteger(r).should.be.false;
    });

  });

  describe(`should accept start and end in reverse order`, () => {

    it(`(10.01, 1.01) => 10.01 > result >= 1.01`, () => {
      const r: number = random(10.01, 1.01);
      r.should.be.gte(1.01);
      r.should.be.lt(10.01);
      isInteger(r).should.be.false;
    });

  });

  describe(`should convert NaN to default for start and end`, () => {

    it(`(NaN, 1) => 1 > result >= 0.0`, () => {
      const r: number = random(NaN, 1);
      r.should.be.gte(0.0);
      r.should.be.lt(1.0);
      isInteger(r).should.be.true;
    });

    it(`(0, NaN) => 1 > result >= 0.0`, () => {
      const r: number = random(0, NaN);
      r.should.be.gte(0.0);
      r.should.be.lt(1.0);
      isInteger(r).should.be.true;
    });

    it(`(NaN, NaN) => 1 > result >= 0.0`, () => {
      const r: number = random(NaN, NaN);
      r.should.be.gte(0.0);
      r.should.be.lt(1.0);
      isInteger(r).should.be.true;
    });

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`__test__`, () => {

      const low: any = 1.0;
      const high: any = 2.0;
      const r: number = random(low, high);
      r.should.be.gte(1);
      r.should.be.lt(2);

    });

  });

});

