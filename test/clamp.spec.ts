import { expect, should } from 'chai';
import { clamp } from '../src/clamp';

should();

describe(`clamp() - @category Math`, () => {

  describe(`should return a number within the clamp range`, () => {

    it(`(50,0,100) => 50`, () => {

      const orig: number = 50;
      const input: number = orig;
      const output: number = clamp(input, 0, 100);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(50);

    });

    it(`(-50,0,100) => 0`, () => {

      const orig: number = -50;
      const input: number = orig;
      const output: number = clamp(input, 0, 100);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(0);

    });

    it(`(150,0,100) => 100`, () => {

      const orig: number = 150;
      const input: number = orig;
      const output: number = clamp(input, 0, 100);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(100);

    });

    it(`(50.623, 0.456, 100.234) => 50.623`, () => {

      const orig: number = 50.623;
      const input: number = orig;
      const output: number = clamp(input, 0.456, 100.234);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(50.623);

    });

    it(`(-50.234, 0.678, 100.789) => 0.678`, () => {

      const orig: number = -50.234;
      const input: number = orig;
      const output: number = clamp(input, 0.678, 100.789);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(0.678);

    });

    it(`(150.123, 0.678, 100.789) => 100.789`, () => {

      const orig: number = 150.123;
      const input: number = orig;
      const output: number = clamp(input, 0.678, 100.789);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(100.789);

    });

    it(`(50, 0.456, 100.234) => 50`, () => {

      const orig: number = 50;
      const input: number = orig;
      const output: number = clamp(input, 0.456, 100.234);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(50);

    });

    it(`(-50, 0.678, 100.789) => 0.678`, () => {

      const orig: number = -50;
      const input: number = orig;
      const output: number = clamp(input, 0.678, 100.789);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(0.678);

    });

    it(`(150, 0.678, 100.789) => 100.789`, () => {

      const orig: number = 150;
      const input: number = orig;
      const output: number = clamp(input, 0.678, 100.789);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(100.789);

    });

    it(`(50.623, 1, 100) => 50.623`, () => {

      const orig: number = 50.623;
      const input: number = orig;
      const output: number = clamp(input, 1, 100);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(50.623);

    });

    it(`(-50.234, 1, 100) => 1`, () => {

      const orig: number = -50.234;
      const input: number = orig;
      const output: number = clamp(input, 1, 100);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(1);

    });

    it(`(150.123, 1, 100) => 100`, () => {

      const orig: number = 150.123;
      const input: number = orig;
      const output: number = clamp(input, 1, 100);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(100);

    });

  });

  describe(`should handle low and high in any order`, () => {

    it(`(150, 1, 100) => 100`, () => {

      const orig: number = 150;
      const input: number = orig;
      const output: number = clamp(input, 1, 100);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(100);

    });

    it(`(150, 100, 1) => 100`, () => {

      const orig: number = 150;
      const input: number = orig;
      const output: number = clamp(input, 100, 1);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(100);

    });

  });

  describe(`should not clamp if not valid low and high`, () => {

    it(`(150, 1) => 150`, () => {

      const orig: number = 150;
      const input: number = orig;
      const output: number = clamp(input, 1);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(150);

    });

    it(`(150, 1, NaN) => 150`, () => {

      const orig: number = 150;
      const input: number = orig;
      const output: number = clamp(input, 1, NaN);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(150);

    });

    it(`(150, 1, null) => 150`, () => {

      const orig: number = 150;
      const input: number = orig;
      const output: number = clamp(input, 1, null);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(150);

    });

    it(`(150, 1, undefined) => 150`, () => {

      const orig: number = 150;
      const input: number = orig;
      const output: number = clamp(input, 1, undefined);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(150);

    });

    it(`(150, NaN, 100) => 100`, () => {

      const orig: number = 150;
      const input: number = orig;
      const output: number = clamp(input, NaN, 100);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(100);

    });

    it(`(150, null, 100) => 100`, () => {

      const orig: number = 150;
      const input: number = orig;
      const output: number = clamp(input, null, 100);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(100);

    });

    it(`(150, undefined, 100) => 100`, () => {

      const orig: number = 150;
      const input: number = orig;
      const output: number = clamp(input, undefined, 100);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(100);

    });

    it(`(150) => 150`, () => {

      const orig: number = 150;
      const input: number = orig;
      const output: number = clamp(input);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(150);

    });

    it(`(150, NaN, NaN) => 150`, () => {

      const orig: number = 150;
      const input: number = orig;
      const output: number = clamp(input, NaN, NaN);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(150);

    });

    it(`(150, null, null) => 150`, () => {

      const orig: number = 150;
      const input: number = orig;
      const output: number = clamp(input, null, null);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(150);

    });

    it(`(150, undefined, undefined) => 150`, () => {

      const orig: number = 150;
      const input: number = orig;
      const output: number = clamp(input, undefined, undefined);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(150);

    });

  });

  describe(`should return NaN is that was passed in`, () => {

    it(`(NaN, -Infinity, Infinity) => NaN`, () => {

      const orig: number = NaN;
      const input: number = orig;
      const output: number = clamp(input, -Infinity, Infinity);
      input.should.not.equal(input);
      orig.should.not.equal(orig);
      output.should.not.equal(output);

    });


  });

  describe(`.min() should clamp the low/floor boundary`, () => {

    it(`.min(150, 200) => 200`, () => {

      const orig: number = 150;
      const input: number = orig;
      const output: number = clamp.min(input, 200);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(200);

    });

    it(`.min(150, 100) => 150`, () => {

      const orig: number = 150;
      const input: number = orig;
      const output: number = clamp.min(input, 100);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(150);

    });

    it(`.min(150) => 150`, () => {

      const orig: number = 150;
      const input: number = orig;
      const output: number = clamp.min(input);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(150);

    });

    it(`.min(150, null) => 150`, () => {

      const orig: number = 150;
      const input: number = orig;
      const output: number = clamp.min(input, null);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(150);

    });

    it(`.min(150, undefined) => 150`, () => {

      const orig: number = 150;
      const input: number = orig;
      const output: number = clamp.min(input, undefined);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(150);

    });

    it(`.min(150, NaN) => 150`, () => {

      const orig: number = 150;
      const input: number = orig;
      const output: number = clamp.min(input, NaN);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(150);

    });

  });

  describe(`.max() should clamp the high/ceil boundary`, () => {

    it(`.max(150, 100) => 100`, () => {

      const orig: number = 150;
      const input: number = orig;
      const output: number = clamp.max(input, 100);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(100);

    });

    it(`.max(150, 200) => 150`, () => {

      const orig: number = 150;
      const input: number = orig;
      const output: number = clamp.max(input, 200);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(150);

    });

    it(`.max(150) => 150`, () => {

      const orig: number = 150;
      const input: number = orig;
      const output: number = clamp.max(input);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(150);

    });

    it(`.max(150, null) => 150`, () => {

      const orig: number = 150;
      const input: number = orig;
      const output: number = clamp.max(input, null);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(150);

    });

    it(`.max(150, undefined) => 150`, () => {

      const orig: number = 150;
      const input: number = orig;
      const output: number = clamp.max(input, undefined);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(150);

    });

    it(`.max(150, NaN) => 150`, () => {

      const orig: number = 150;
      const input: number = orig;
      const output: number = clamp.max(input, NaN);
      input.should.be.deep.equal(orig);
      output.should.deep.equal(150);

    });

  });

});
