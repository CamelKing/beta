import { should } from 'chai';
import { clamp } from '../src/clamp';

should();

describe(`clamp() - @category Math`, () => {

  describe(`should return a number within the clamp range`, () => {

    it(`(50,0,100) => 50`, () => {
      clamp(50, 0, 100).should.equal(50);
    });

    it(`(-50,0,100) => 0`, () => {
      clamp(-50, 0, 100).should.equal(0);
    });

    it(`(150,0,100) => 100`, () => {
      clamp(150, 0, 100).should.equal(100);
    });

    it(`(50.623, 0.456, 100.234) => 50.623`, () => {
      clamp(50.623, 0.456, 100.234).should.equal(50.623);
    });

    it(`(-50.234, 0.678, 100.789) => 0.678`, () => {
      clamp(-50.234, 0.678, 100.789).should.equal(0.678);
    });

    it(`(150.123, 0.678, 100.789) => 100.789`, () => {
      clamp(150.123, 0.678, 100.789).should.equal(100.789);
    });

    it(`(50, 0.456, 100.234) => 50`, () => {
      clamp(50, 0.456, 100.234).should.equal(50);
    });

    it(`(-50, 0.678, 100.789) => 0.678`, () => {
      clamp(-50, 0.678, 100.789).should.equal(0.678);
    });

    it(`(150, 0.678, 100.789) => 100.789`, () => {
      clamp(150, 0.678, 100.789).should.equal(100.789);
    });

    it(`(50.623, 1, 100) => 50.623`, () => {
      clamp(50.623, 1, 100).should.equal(50.623);
    });

    it(`(-50.234, 1, 100) => 1`, () => {
      clamp(-50.123, 1, 100).should.equal(1);
    });

    it(`(150.123, 1, 100) => 100`, () => {
      clamp(150.123, 1, 100).should.equal(100);
    });

  });

  describe(`should handle low and high in any order`, () => {

    it(`(150, 1, 100) => 100`, () => {
      clamp(150, 1, 100).should.equal(100);
    });

    it(`(150, 100, 1) => 100`, () => {
      clamp(150, 100, 1).should.equal(100);
    });

  });

  describe(`should not clamp if not valid low and high`, () => {

    it(`(150, 1) => 150`, () => {
      clamp(150, 1).should.equal(150);
    });

    it(`(150, 1, NaN) => 150`, () => {
      clamp(150, 1, NaN).should.equal(150);
    });


    it(`(150, NaN, 100) => 100`, () => {
      clamp(150, NaN, 100).should.equal(100);
    });

    it(`(150) => 150`, () => {
      clamp(150).should.equal(150);
    });

    it(`(150, NaN, NaN) => 150`, () => {
      clamp(150, NaN, NaN).should.equal(150);
    });


    /*

    July 08 2017:
    Taken care of by --StrictNullChecks

    it(`(150, 1, null) => 150`, () => {
      clamp(150, 1, null).should.equal(150);
    });

    it(`(150, 1, undefined) => 150`, () => {
      clamp(150, 1, undefined).should.equal(150);
    });

    it(`(150, null, 100) => 100`, () => {
      clamp(150, null, 100).should.equal(100);
    });

    it(`(150, undefined, 100) => 100`, () => {
      clamp(150, undefined, 100).should.equal(100);
    });

    it(`(150, null, null) => 150`, () => {
      clamp(150, null, null).should.equal(150);
    });

    it(`(150, undefined, undefined) => 150`, () => {
      clamp(150, undefined, undefined).should.equal(150);
    });

    */

  });

  describe(`.min() should clamp the low/floor boundary`, () => {

    it(`.min(150, 200) => 200`, () => {
      clamp.min(150, 200).should.equal(200);
    });

    it(`.min(150, 100) => 150`, () => {
      clamp.min(150, 100).should.equal(150);
    });

    it(`.min(150) => 150`, () => {
      clamp.min(150).should.equal(150);
    });

    it(`.min(150, NaN) => 150`, () => {
      clamp.min(150, NaN).should.equal(150);
    });

    /*

    July 08 2017:
    Taken care of by --StrictNullChecks

    it(`.min(150, null) => 150`, () => {
      clamp.min(150, null).should.equal(150);
    });

    it(`.min(150, undefined) => 150`, () => {
      clamp.min(150, undefined).should.equal(150);
    });

    */

  });

  describe(`.max() should clamp the high/ceil boundary`, () => {

    it(`.max(150, 100) => 100`, () => {
      clamp.max(150, 100).should.equal(100);
    });

    it(`.max(150, 200) => 150`, () => {
      clamp.max(150, 200).should.equal(150);
    });

    it(`.max(150) => 150`, () => {
      clamp.max(150).should.equal(150);
    });

    it(`.max(150, NaN) => 150`, () => {
      clamp.max(150, NaN).should.equal(150);
    });

    /*

    July 08 2017:
    Taken care of by --StrictNullChecks

    it(`.max(150, null) => 150`, () => {
      clamp.max(150, null).should.equal(150);
    });

    it(`.max(150, undefined) => 150`, () => {
      clamp.max(150, undefined).should.equal(150);
    });

    */

  });

  describe(`should return null/undefined/NaN as is`, () => {

    it(`(NaN, -1000, 1000) => NaN`, () => {
      clamp(NaN, -1000, 1000).should.be.NaN;
    });

    /*

    July 08 2017:
    Taken care of by --StrictNullChecks

    it(`(null, -1000, 1000) => null`, () => {
      should().equal(clamp(null, -1000, 1000), null);
    });

    it(`(undefined, -1000, 1000) => undefined`, () => {
      should().equal(clamp(undefined, -1000, 1000), undefined);
    });

    */

  });

  describe(`should be functional and not mutating any input`, () => {

    it(`(50,0,100) => 50`, () => {

      const orig1: number = 50;
      const orig2: number = 0;
      const orig3: number = 100;
      const input1: number = orig1;
      const input2: number = orig2;
      const input3: number = orig3;
      clamp(input1, input2, input3).should.equal(50);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      input3.should.be.deep.equal(orig3);

    });

    it(`(50,10,100) => 50`, () => {

      const orig1: number = 50;
      const orig2: number = 10;
      const orig3: number = 100;
      const input1: number = orig1;
      const input2: number = orig2;
      const input3: number = orig3;
      clamp(input1, input2, input3).should.equal(50);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      input3.should.be.deep.equal(orig3);

    });

    it(`(50,110,100) => 100`, () => {

      const orig1: number = 50;
      const orig2: number = 110;
      const orig3: number = 100;
      const input1: number = orig1;
      const input2: number = orig2;
      const input3: number = orig3;
      clamp(input1, input2, input3).should.equal(100);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      input3.should.be.deep.equal(orig3);

    });

  });

});
