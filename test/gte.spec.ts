import { expect, should } from 'chai';
import { gte } from '../src/gte';

should();

describe(`gte() - @category Language`, () => {

  describe(`should perform GTE comparison on numeric values`, () => {

    it(`(3,1) => true`, () => {

      const orig1: number = 3;
      const orig2: number = 1;
      const input1: number = orig1;
      const input2: number = orig2;
      const output: boolean = gte(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(true);

    });

    it(`(3.01,3) => true`, () => {

      const orig1: number = 3.01;
      const orig2: number = 3;
      const input1: number = orig1;
      const input2: number = orig2;
      const output: boolean = gte(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(true);

    });

    it(`(3,3) => true`, () => {

      const orig1: number = 3;
      const orig2: number = 3;
      const input1: number = orig1;
      const input2: number = orig2;
      const output: boolean = gte(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(true);

    });

    it(`(1,3) => false`, () => {

      const orig1: number = 1;
      const orig2: number = 3;
      const input1: number = orig1;
      const input2: number = orig2;
      const output: boolean = gte(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(false);

    });

  });

  describe(`should perform GTE comparison on numerical strings`, () => {

    it(`('3','1') => true`, () => {

      const orig1: string = '3';
      const orig2: string = '1';
      const input1: string = orig1.slice(0);
      const input2: string = orig2.slice(0);
      const output: boolean = gte(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(true);

    });

    it(`('3.01','3') => true`, () => {

      const orig1: string = '3.01';
      const orig2: string = '3';
      const input1: string = orig1.slice(0);
      const input2: string = orig2.slice(0);
      const output: boolean = gte(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(true);

    });

    it(`('3','3') => true`, () => {

      const orig1: string = '3';
      const orig2: string = '3';
      const input1: string = orig1.slice(0);
      const input2: string = orig2.slice(0);
      const output: boolean = gte(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(true);

    });


    it(`('1','3') => false`, () => {

      const orig1: string = '1';
      const orig2: string = '3';
      const input1: string = orig1.slice(0);
      const input2: string = orig2.slice(0);
      const output: boolean = gte(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(false);

    });

  });

  describe(`should perform GTE comparison on strings on alphabetical order`, () => {

    it(`('z','a') => true`, () => {

      const orig1: string = 'z';
      const orig2: string = 'a';
      const input1: string = orig1.slice(0);
      const input2: string = orig2.slice(0);
      const output: boolean = gte(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(true);

    });

    it(`('z','z') => true`, () => {

      const orig1: string = 'z';
      const orig2: string = 'z';
      const input1: string = orig1.slice(0);
      const input2: string = orig2.slice(0);
      const output: boolean = gte(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(true);

    });

    it(`('a','z') => false`, () => {

      const orig1: string = 'a';
      const orig2: string = 'z';
      const input1: string = orig1.slice(0);
      const input2: string = orig2.slice(0);
      const output: boolean = gte(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(false);

    });

    it(`('a','A') => true`, () => {

      const orig1: string = 'a';
      const orig2: string = 'A';
      const input1: string = orig1.slice(0);
      const input2: string = orig2.slice(0);
      const output: boolean = gte(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(true);

    });

    it(`('a',' ') => true`, () => {

      const orig1: string = 'a';
      const orig2: string = ' ';
      const input1: string = orig1.slice(0);
      const input2: string = orig2.slice(0);
      const output: boolean = gte(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(true);

    });

    it(`('a','') => true`, () => {

      const orig1: string = 'a';
      const orig2: string = '';
      const input1: string = orig1.slice(0);
      const input2: string = orig2.slice(0);
      const output: boolean = gte(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(true);

    });

  });

  describe(`should perform GTE comparison on mix number/strings`, () => {

    it(`(3,'1') => true`, () => {

      const orig1: number = 3;
      const orig2: string = '1';
      const input1: number = orig1;
      const input2: string = orig2.slice(0);
      const output: boolean = gte(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(true);

    });

    it(`('3.01',3) => true`, () => {

      const orig1: string = '3.01';
      const orig2: number = 3;
      const input1: string = orig1.slice(0);
      const input2: number = orig2;
      const output: boolean = gte(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(true);

    });

    it(`(3,'3') => true`, () => {

      const orig1: number = 3;
      const orig2: string = '3';
      const input1: number = orig1;
      const input2: string = orig2.slice(0);
      const output: boolean = gte(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(true);

    });


    it(`('1',3) => false`, () => {

      const orig1: string = '1';
      const orig2: number = 3;
      const input1: string = orig1.slice(0);
      const input2: number = orig2;
      const output: boolean = gte(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(false);

    });

  });

  describe(`should always treat null input as 0`, () => {

    it(`(null,3) => false`, () => {

      const orig1: string = null;
      const orig2: number = 3;
      const input1: string = orig1;
      const input2: number = orig2;
      const output: boolean = gte(input1, input2);
      should().equal(input1, orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(false);

    });

    it(`(3,null) => true`, () => {

      const orig1: number = 3;
      const orig2: string = null;
      const input1: number = orig1;
      const input2: string = orig2;
      const output: boolean = gte(input1, input2);
      should().equal(input2, orig2);
      input1.should.be.deep.equal(orig1);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(true);

    });

  });

  describe(`should always treat undefined input as not comparable`, () => {

    it(`(undefined,3) => false`, () => {

      const orig1: string = undefined;
      const orig2: number = 3;
      const input1: string = orig1;
      const input2: number = orig2;
      const output: boolean = gte(input1, input2);
      should().equal(input1, orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(false);

    });

    it(`(3,undefined) => false`, () => {

      const orig1: number = 3;
      const orig2: string = undefined;
      const input1: number = orig1;
      const input2: string = orig2;
      const output: boolean = gte(input1, input2);
      should().equal(input2, orig2);
      input1.should.be.deep.equal(orig1);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(false);

    });

  });

  describe(`should always return false on invalid input`, () => {

    it(`(3,'hello') => false`, () => {

      const orig1: number = 3;
      const orig2: string = 'hello';
      const input1: number = orig1;
      const input2: string = orig2.slice(0);
      const output: boolean = gte(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(false);

    });

    it(`('hello',3) => false`, () => {

      const orig1: string = 'hello';
      const orig2: number = 3;
      const input1: string = orig1.slice(0);
      const input2: number = orig2;
      const output: boolean = gte(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(false);

    });

  });

});
