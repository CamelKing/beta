import { expect, should } from 'chai';
import { eq } from '../src/eq';

should();

describe(`eq() - @category Language`, () => {

  describe(`should do a SameValueZero false comparisons`, () => {

    it(`0 !== false`, () => {
      const orig1: number = 0;
      const orig2: boolean = false;
      const input1: number = orig1;
      const input2: boolean = orig2;
      const output: boolean = eq(input1, input2);
      should().equal(input1, orig1);
      should().equal(input2, orig2);
      output.should.equal(false);
    });

    it(`"" !== false`, () => {
      const orig1: string = '';
      const orig2: boolean = false;
      const input1: string = orig1.slice(0);
      const input2: boolean = orig2;
      const output: boolean = eq(input1, input2);
      should().equal(input1, orig1);
      should().equal(input2, orig2);
      output.should.equal(false);
    });

    it(`"" !== 0`, () => {
      const orig1: string = '';
      const orig2: number = 0;
      const input1: string = orig1.slice(0);
      const input2: number = orig2;
      const output: boolean = eq(input1, input2);
      should().equal(input1, orig1);
      should().equal(input2, orig2);
      output.should.equal(false);
    });

    it(`"0" !== 0`, () => {
      const orig1: string = '0';
      const orig2: number = 0;
      const input1: string = orig1.slice(0);
      const input2: number = orig2;
      const output: boolean = eq(input1, input2);
      should().equal(input1, orig1);
      should().equal(input2, orig2);
      output.should.equal(false);
    });

    it(`"17" !== 17`, () => {
      const orig1: string = '17';
      const orig2: number = 17;
      const input1: string = orig1.slice(0);
      const input2: number = orig2;
      const output: boolean = eq(input1, input2);
      should().equal(input1, orig1);
      should().equal(input2, orig2);
      output.should.equal(false);
    });

    it(`[1,2] !== '1,2'`, () => {
      const orig1: number[] = [1, 2];
      const orig2: string = '1,2';
      const input1: number[] = orig1;
      const input2: string = orig2.slice(0);
      const output: boolean = eq(input1, input2);
      should().equal(input1, orig1);
      should().equal(input2, orig2);
      output.should.equal(false);
    });

    it(`null !== undefined`, () => {
      const orig1: string = null;
      const orig2: string = undefined;
      const input1: string = orig1;
      const input2: string = orig2;
      const output: boolean = eq(input1, input2);
      should().equal(input1, orig1);
      should().equal(input2, orig2);
      output.should.equal(false);
    });

    it(`null !== false`, () => {
      const orig1: boolean = null;
      const orig2: boolean = false;
      const input1: boolean = orig1;
      const input2: boolean = orig2;
      const output: boolean = eq(input1, input2);
      should().equal(input1, orig1);
      should().equal(input2, orig2);
      output.should.equal(false);
    });

    it(`undefined !== false`, () => {
      const orig1: boolean = undefined;
      const orig2: boolean = false;
      const input1: boolean = orig1;
      const input2: boolean = orig2;
      const output: boolean = eq(input1, input2);
      should().equal(input1, orig1);
      should().equal(input2, orig2);
      output.should.equal(false);
    });

    it(`{foo:'bar'} !== {foo:'bar'}`, () => {
      const orig1: object = { foo: 'bar' };
      const orig2: object = { foo: 'bar' };
      const input1: object = orig1;
      const input2: object = orig2;
      const output: boolean = eq(input1, input2);
      should().equal(input1, orig1);
      should().equal(input2, orig2);
      output.should.equal(false);
    });

    it(`0 !== null`, () => {
      const orig1: number = 0;
      const orig2: number = null;
      const input1: number = orig1;
      const input2: number = orig2;
      const output: boolean = eq(input1, input2);
      should().equal(input1, orig1);
      should().equal(input2, orig2);
      output.should.equal(false);
    });

    it(`0 !== undefined`, () => {
      const orig1: number = 0;
      const orig2: number = undefined;
      const input1: number = orig1;
      const input2: number = orig2;
      const output: boolean = eq(input1, input2);
      should().equal(input1, orig1);
      should().equal(input2, orig2);
      output.should.equal(false);
    });

    it(`0 !== NaN`, () => {
      const orig1: number = 0;
      const orig2: number = NaN;
      const input1: number = orig1;
      const input2: number = orig2;
      const output: boolean = eq(input1, input2);
      should().equal(input1, orig1);
      should().not.equal(input2, orig2);
      should().not.equal(orig2, orig2);
      should().not.equal(input2, input2);
      output.should.equal(false);
    });

    it(`'foo' !== NaN`, () => {
      const orig1: string = 'foo';
      const orig2: number = NaN;
      const input1: string = orig1.slice(0);
      const input2: number = orig2;
      const output: boolean = eq(input1, input2);
      should().equal(input1, orig1);
      should().not.equal(input2, orig2);
      should().not.equal(orig2, orig2);
      should().not.equal(input2, input2);
      output.should.equal(false);
    });

  });

  describe(`should do a SameValueZero true comparisons`, () => {

    it(`undefined === undefined`, () => {
      const orig: boolean = undefined;
      const input1: boolean = orig;
      const input2: boolean = orig;
      const output: boolean = eq(input1, input2);
      should().equal(input1, orig);
      should().equal(input2, orig);
      output.should.equal(true);
    });

    it(`null === null`, () => {
      const orig: boolean = null;
      const input1: boolean = orig;
      const input2: boolean = orig;
      const output: boolean = eq(input1, input2);
      should().equal(input1, orig);
      should().equal(input2, orig);
      output.should.equal(true);
    });

    it(`true === true`, () => {
      const orig: boolean = true;
      const input1: boolean = orig;
      const input2: boolean = orig;
      const output: boolean = eq(input1, input2);
      should().equal(input1, orig);
      should().equal(input2, orig);
      output.should.equal(true);
    });

    it(`false === false`, () => {
      const orig: boolean = false;
      const input1: boolean = orig;
      const input2: boolean = orig;
      const output: boolean = eq(input1, input2);
      should().equal(input1, orig);
      should().equal(input2, orig);
      output.should.equal(true);
    });

    it(`'hello' === 'hello'`, () => {
      const orig: string = 'hello';
      const input1: string = orig;
      const input2: string = orig;
      const output: boolean = eq(input1, input2);
      should().equal(input1, orig);
      should().equal(input2, orig);
      output.should.equal(true);
    });

    it(`0 === 0`, () => {
      const orig: number = 0;
      const input1: number = orig;
      const input2: number = orig;
      const output: boolean = eq(input1, input2);
      should().equal(input1, orig);
      should().equal(input2, orig);
      output.should.equal(true);
    });

    it(`+0 === -0`, () => {
      const orig1: number = +0;
      const orig2: number = -0;
      const input1: number = orig1;
      const input2: number = orig2;
      const output: boolean = eq(input1, input2);
      should().equal(input1, orig1);
      should().equal(input2, orig2);
      output.should.equal(true);
    });

    it(`NaN === NaN`, () => {
      const orig: number = NaN;
      const input1: number = orig;
      const input2: number = orig;
      const output: boolean = eq(input1, input2);
      should().not.equal(orig, orig);
      should().not.equal(input1, orig);
      should().not.equal(input2, orig);
      should().not.equal(input1, input1);
      should().not.equal(input2, input2);
      output.should.equal(true);
    });

  });

});
