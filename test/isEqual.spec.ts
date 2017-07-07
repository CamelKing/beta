import { expect, should } from 'chai';
import { isEqual } from '../src/isEqual';

should();

describe(`isEqual() - @category Language`, () => {

  describe(`should return false if comparing different types`, () => {

    it(`(1,'hello') => false`, () => {

      const orig1: any = 1;
      const orig2: any = 'hello';
      const input1: any = orig1;
      const input2: any = orig2.slice(0);
      const output: boolean = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(false);

    });

    it(`(true,'hello') => false`, () => {

      const orig1: any = true;
      const orig2: any = 'hello';
      const input1: any = orig1;
      const input2: any = orig2.slice(0);
      const output: boolean = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(false);

    });

    it(`(true,1) => false`, () => {

      const orig1: any = true;
      const orig2: any = 1;
      const input1: any = orig1;
      const input2: any = orig2;
      const output: boolean = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(false);

    });

    it(`([1],{1:1}) => false`, () => {

      const orig1: any = [1];
      const orig2: any = { 1: 1 };
      const input1: any = orig1.slice(0);
      const input2: any = Object.assign({}, orig2);
      const output: boolean = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(false);

    });


  });

  describe(`should compare normal primitives`, () => {

    it(`(1,1) => true`, () => {

      const orig1: any = 1;
      const orig2: any = 1;
      const input1: any = orig1;
      const input2: any = orig2;
      const output: boolean = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(true);

    });

    it(`(1,1.0) => true`, () => {

      const orig1: any = 1;
      const orig2: any = 1.0;
      const input1: any = orig1;
      const input2: any = orig2;
      const output: boolean = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(true);

    });

    it(`(+0,-0) => true`, () => {

      const orig1: any = +0;
      const orig2: any = -0;
      const input1: any = orig1;
      const input2: any = orig2;
      const output: boolean = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(true);

    });

    it(`(1,1.2) => false`, () => {

      const orig1: any = 1;
      const orig2: any = 1.2;
      const input1: any = orig1;
      const input2: any = orig2;
      const output: boolean = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(false);

    });

    it(`(1,2) => false`, () => {

      const orig1: any = 1;
      const orig2: any = 2;
      const input1: any = orig1;
      const input2: any = orig2;
      const output: boolean = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(false);

    });

    it(`('hello','hello') => true`, () => {

      const orig1: any = 'hello';
      const orig2: any = 'hello';
      const input1: any = orig1.slice(0);
      const input2: any = orig2.slice(0);
      const output: boolean = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(true);

    });

    it(`('hello','HELLO') => false`, () => {

      const orig1: any = 'hello';
      const orig2: any = 'HELLO';
      const input1: any = orig1.slice(0);
      const input2: any = orig2.slice(0);
      const output: boolean = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(false);

    });

    it(`('hello','') => false`, () => {

      const orig1: any = 'hello';
      const orig2: any = '';
      const input1: any = orig1.slice(0);
      const input2: any = orig2.slice(0);
      const output: boolean = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(false);

    });

    it(`(true,true) => true`, () => {

      const orig1: any = true;
      const orig2: any = true;
      const input1: any = orig1;
      const input2: any = orig2;
      const output: boolean = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.deep.equal(true);

    });

    it(`(true,false) => false`, () => {

      const orig1: any = true;
      const orig2: any = false;
      const input1: any = orig1;
      const input2: any = orig2;
      const output: boolean = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.deep.equal(false);

    });

  });

  describe(`should compare objectified primitives`, () => {

    it(`(Object(1),Object(1) => true`, () => {

      const orig1: any = Object(1);
      const orig2: any = Object(1);
      const input1: any = Object(orig1);
      const input2: any = Object(orig2);
      const output: boolean = isEqual(input1, input2);
      input1.valueOf().should.be.equal(orig1.valueOf());
      input2.valueOf().should.be.equal(orig2.valueOf());
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(true);

    });

    it(`(Object(1),Object(1.0)) => true`, () => {

      const orig1: any = Object(1);
      const orig2: any = Object(1.0);
      const input2: any = Object(orig2);
      const input1: any = Object(orig1);
      const output: boolean = isEqual(input1, input2);
      input1.valueOf().should.be.equal(orig1.valueOf());
      input2.valueOf().should.be.equal(orig2.valueOf());
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(true);

    });


    it(`(Object(1),Object(1.2)) => false`, () => {

      const orig1: any = Object(1);
      const orig2: any = Object(1.2);
      const input1: any = Object(orig1);
      const input2: any = Object(orig2);
      const output: boolean = isEqual(input1, input2);
      input1.valueOf().should.be.equal(orig1.valueOf());
      input2.valueOf().should.be.equal(orig2.valueOf());
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(false);

    });

    it(`(Object(1),Object(2) => false`, () => {

      const orig1: any = Object(1);
      const orig2: any = Object(2);
      const input1: any = Object(orig1);
      const input2: any = Object(orig2);
      const output: boolean = isEqual(input1, input2);
      input1.valueOf().should.be.equal(orig1.valueOf());
      input2.valueOf().should.be.equal(orig2.valueOf());
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(false);

    });

    it(`(Object('hello'),Object('hello')) => true`, () => {

      const orig1: any = Object('hello');
      const orig2: any = Object('hello');
      const input1: any = Object(orig1);
      const input2: any = Object(orig2);
      const output: boolean = isEqual(input1, input2);
      input1.valueOf().should.be.equal(orig1.valueOf());
      input2.valueOf().should.be.equal(orig2.valueOf());
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(true);

    });

    it(`(Object('hello'),Object('HELLO')) => false`, () => {

      const orig1: any = Object('hello');
      const orig2: any = Object('HELLO');
      const input1: any = Object(orig1);
      const input2: any = Object(orig2);
      const output: boolean = isEqual(input1, input2);
      input1.valueOf().should.be.equal(orig1.valueOf());
      input2.valueOf().should.be.equal(orig2.valueOf());
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(false);

    });

    it(`(Object('hello'),Object('')) => false`, () => {

      const orig1: any = Object('hello');
      const orig2: any = Object('');
      const input1: any = Object(orig1);
      const input2: any = Object(orig2);
      const output: boolean = isEqual(input1, input2);
      input1.valueOf().should.be.equal(orig1.valueOf());
      input2.valueOf().should.be.equal(orig2.valueOf());
      output.should.not.be.equal(input1);
      output.should.not.be.equal(input2);
      output.should.deep.equal(false);

    });

    it(`(Object(true),Object(true)) => true`, () => {

      const orig1: any = Object(true);
      const orig2: any = Object(true);
      const input1: any = Object(orig1);
      const input2: any = Object(orig2);
      const output: boolean = isEqual(input1, input2);
      input1.valueOf().should.be.equal(orig1.valueOf());
      input2.valueOf().should.be.equal(orig2.valueOf());
      output.should.deep.equal(true);

    });

    it(`(Object(true),Object(false)) => false`, () => {

      const orig1: any = Object(true);
      const orig2: any = Object(false);
      const input1: any = Object(orig1);
      const input2: any = Object(orig2);
      const output: boolean = isEqual(input1, input2);
      input1.valueOf().should.be.equal(orig1.valueOf());
      input2.valueOf().should.be.equal(orig2.valueOf());
      output.should.deep.equal(false);

    });

  });

  describe(`should be able to handle null/undefined/NaN`, () => {

    it(`NaN 1 => false`, () => {

      const orig1: any = NaN;
      const input1: any = orig1;
      const orig2: any = 1;
      const input2: any = orig2;
      const output: any = isEqual(input1, input2);
      should().not.equal(input1, input1);
      should().not.equal(orig1, orig1);
      input2.should.equal(input2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(false);

    });

    it(`NaN NaN => true`, () => {

      const orig1: any = NaN;
      const input1: any = orig1;
      const orig2: any = NaN;
      const input2: any = orig2;
      const output: any = isEqual(input1, input2);
      should().not.equal(input1, input1);
      should().not.equal(orig1, orig1);
      should().not.equal(input2, input2);
      should().not.equal(orig2, orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(true);

    });

    it(`null null => true`, () => {

      const orig1: Set<any> = null;
      const input1: any = orig1;
      const orig2: Set<any> = null;
      const input2: any = orig2;
      const output: any = isEqual(input1, input2);
      should().equal(input1, orig1);
      should().equal(input2, orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(true);

    });

    it(`undefined undefined => true`, () => {

      const orig1: Set<any> = undefined;
      const input1: any = orig1;
      const orig2: Set<any> = undefined;
      const input2: any = orig2;
      const output: any = isEqual(input1, input2);
      should().equal(input1, orig1);
      should().equal(input2, orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(true);

    });

    it(`null undefined => false`, () => {

      const orig1: Set<any> = null;
      const input1: any = orig1;
      const orig2: Set<any> = undefined;
      const input2: any = orig2;
      const output: any = isEqual(input1, input2);
      should().equal(input1, orig1);
      should().equal(input2, orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(false);

    });

  });

  describe(`should compare 2 sets`, () => {

    it(`{1,2,3} {1,2,3} => true`, () => {

      const orig1: any = new Set([1, 2, 3]);
      const input1: any = orig1;
      const orig2: any = new Set([1, 2, 3]);
      const input2: any = orig2;
      const output: any = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(true);

    });

    it(`{1,2,3} {2,3,1} => true`, () => {

      const orig1: any = new Set([1, 2, 3]);
      const input1: any = orig1;
      const orig2: any = new Set([2, 3, 1]);
      const input2: any = orig2;
      const output: any = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(true);

    });

    it(`{} {} => true`, () => {

      const orig1: any = new Set([]);
      const input1: any = orig1;
      const orig2: any = new Set([]);
      const input2: any = orig2;
      const output: any = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(true);

    });

    it(`{1} {1,2} => false`, () => {

      const orig1: any = new Set([1]);
      const input1: any = orig1;
      const orig2: any = new Set([1, 2]);
      const input2: any = orig2;
      const output: any = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(false);

    });

    it(`{1,3} {1,2} => false`, () => {

      const orig1: any = new Set([1, 3]);
      const input1: any = orig1;
      const orig2: any = new Set([1, 2]);
      const input2: any = orig2;
      const output: any = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(false);

    });

    it(`{{a:1}} {{a:1}} => true`, () => {

      const orig1: any = new Set([{ a: 1 }]);
      const input1: any = orig1;
      const orig2: any = new Set([{ a: 1 }]);
      const input2: any = orig2;
      const output: any = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(true);

    });

  });

  describe(`should compare 2 arrays`, () => {

    it(`[1,2,3] [1,2,3] => true`, () => {

      const orig1: any = [1, 2, 3];
      const input1: any = orig1.slice(0);
      const orig2: any = [1, 2, 3];
      const input2: any = orig2.slice(0);
      const output: any = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(true);

    });

    it(`[1,2,3] [2,3,1] => false`, () => {

      const orig1: any = [1, 2, 3];
      const input1: any = orig1.slice(0);
      const orig2: any = [2, 3, 1];
      const input2: any = orig2.slice(0);
      const output: any = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(false);

    });

    it(`[] [] => true`, () => {

      const orig1: any = [];
      const input1: any = orig1.slice(0);
      const orig2: any = [];
      const input2: any = orig2.slice(0);
      const output: any = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(true);

    });

    it(`[1] [1,2] => false`, () => {

      const orig1: any = [1];
      const input1: any = orig1.slice(0);
      const orig2: any = [1, 2];
      const input2: any = orig2.slice(0);
      const output: any = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(false);

    });

    it(`[1,3] [1,2] => false`, () => {

      const orig1: any = [1, 3];
      const input1: any = orig1.slice(0);
      const orig2: any = [1, 2];
      const input2: any = orig2.slice(0);
      const output: any = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(false);

    });

    it(`[{a:1}] [{a:1}] => true`, () => {

      const orig1: any = [{ a: 1 }];
      const input1: any = orig1.slice(0);
      const orig2: any = [{ a: 1 }];
      const input2: any = orig2.slice(0);
      const output: any = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(true);

    });

  });

  describe(`should compare nested arrays`, () => {

    it(`[1,[2,3]] [1,[2,3]] => true`, () => {

      const orig1: any = [1, [2, 3]];
      const input1: any = orig1.slice(0);
      const orig2: any = [1, [2, 3]];
      const input2: any = orig2.slice(0);
      const output: any = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(true);

    });

    it(`[1,[2,3]] [1,[2,4]] => false`, () => {

      const orig1: any = [1, [2, 3]];
      const input1: any = orig1.slice(0);
      const orig2: any = [1, [2, 4]];
      const input2: any = orig2.slice(0);
      const output: any = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(false);

    });


  });

  describe(`should be able to handle comparing null/undefined arrays`, () => {

    it(`null null => true`, () => {

      const orig1: any = null;
      const input1: any = orig1;
      const orig2: any = null;
      const input2: any = orig2;
      const output: any = isEqual(input1, input2);
      should().equal(input1, orig1);
      should().equal(input2, orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(true);

    });

    it(`undefined undefined => true`, () => {

      const orig1: any = undefined;
      const input1: any = orig1;
      const orig2: any = undefined;
      const input2: any = orig2;
      const output: any = isEqual(input1, input2);
      should().equal(input1, orig1);
      should().equal(input2, orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(true);

    });

    it(`null undefined => false`, () => {

      const orig1: any = null;
      const input1: any = orig1;
      const orig2: any = undefined;
      const input2: any = orig2;
      const output: any = isEqual(input1, input2);
      should().equal(input1, orig1);
      should().equal(input2, orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(false);

    });

  });

  describe(`should compare 2 objects`, () => {

    it(`{} {} => true`, () => {

      const orig1: any = {};
      const input1: any = Object.assign({}, orig1);
      const orig2: any = {};
      const input2: any = Object.assign({}, orig2);
      const output: any = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(true);

    });

    it(`{a:1, b:2} {a:1, b:2} => true`, () => {

      const orig1: any = { a: 1, b: 2 };
      const input1: any = Object.assign({}, orig1);
      const orig2: any = { a: 1, b: 2 };
      const input2: any = Object.assign({}, orig2);
      const output: any = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(true);

    });

    it(`{a:1, b:3} {a:1, b:2} => false`, () => {

      const orig1: any = { a: 1, b: 3 };
      const input1: any = Object.assign({}, orig1);
      const orig2: any = { a: 1, b: 2 };
      const input2: any = Object.assign({}, orig2);
      const output: any = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(false);

    });

    it(`{a:1, c:3} {a:1, b:2} => false`, () => {

      const orig1: any = { a: 1, c: 3 };
      const input1: any = Object.assign({}, orig1);
      const orig2: any = { a: 1, b: 2 };
      const input2: any = Object.assign({}, orig2);
      const output: any = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(false);

    });

    it(`{a:1, b:2, c:3} {a:1, b:2} => false`, () => {

      const orig1: any = { a: 1, b: 2, c: 3 };
      const input1: any = Object.assign({}, orig1);
      const orig2: any = { a: 1, b: 2 };
      const input2: any = Object.assign({}, orig2);
      const output: any = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(false);

    });

  });

  describe(`should compare date objects`, () => {

    it(`date() date() => true`, () => {

      const dt: Date = new Date();
      const orig1: any = new Date(dt);
      const input1: any = orig1;
      const orig2: any = new Date(dt);
      const input2: any = orig2;
      const output: any = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(true);

    });

    it(`date() date\'() => false`, () => {

      const dt1: Date = new Date();
      const dt2: Date = new Date(dt1.getTime() + 1000);
      const orig1: any = dt1;
      const input1: any = orig1;
      const orig2: any = dt2;
      const input2: any = orig2;
      const output: any = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(false);

    });

  });

  describe(`should compare symbols`, () => {

    it(`symbol() symbol() => true`, () => {

      const sm: symbol = Symbol();
      const orig1: any = sm;
      const input1: any = orig1;
      const orig2: any = sm;
      const input2: any = orig2;
      const output: any = isEqual(input1, input2);
      should().equal(input1, orig1);
      should().equal(input2, orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(true);

    });

    it(`symbol() symbol\'() => false`, () => {

      const sm1: symbol = Symbol();
      const sm2: symbol = Symbol();
      const orig1: any = sm1;
      const input1: any = orig1;
      const orig2: any = sm2;
      const input2: any = orig2;
      const output: any = isEqual(input1, input2);
      should().equal(input1, orig1);
      should().equal(input2, orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(false);

    });

  });

  describe(`should return false for functions objects`, () => {

    it(`fn1() fn1() => true`, () => {

      const fn: () => number = () => 123;
      const orig1: any = fn;
      const input1: any = orig1;
      const orig2: any = fn;
      const input2: any = orig2;
      const output: any = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(true);

    });

    it(`fn1() fn1\'() => false`, () => {

      const fn1: () => number = () => 123;
      const fn2: () => number = () => 123;
      const orig1: any = fn1;
      const input1: any = orig1;
      const orig2: any = fn2;
      const input2: any = orig2;
      const output: any = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(false);

    });


    it(`pm1() pm1() => true`, () => {

      const pm: Promise<number> = Promise.resolve(123);
      const orig1: any = pm;
      const input1: any = orig1;
      const orig2: any = pm;
      const input2: any = orig2;
      const output: any = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(true);

    });

    it(`pm1() pm1\'() => false`, () => {

      const pm1: Promise<number> = Promise.resolve(123);
      const pm2: Promise<number> = Promise.resolve(123);
      const orig1: any = pm1;
      const input1: any = orig1;
      const orig2: any = pm2;
      const input2: any = orig2;
      const output: any = isEqual(input1, input2);
      input1.should.be.deep.equal(orig1);
      input2.should.be.deep.equal(orig2);
      output.should.not.be.equal(input1);
      output.should.deep.equal(false);

    });


  });

  // tslint:disable-next-line:max-file-line-count
});
