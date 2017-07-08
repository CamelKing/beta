import { should } from 'chai';
import { toString } from '../src/toString';

should();

describe(`toString() - @category Language`, () => {

  describe(`should return value as string`, () => {

    it(`123 => '123'`, () => {

      const orig: number = 123;
      const input: number = orig;
      const output: string = toString(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('123');

    });

    it(`NaN => 'NaN'`, () => {

      const orig: number = NaN;
      const input: number = orig;
      const output: string = toString(input);
      input.should.not.equal(input);
      input.should.not.equal(orig);
      orig.should.not.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('NaN');

    });

    it(`'hello' => 'hello'`, () => {

      const orig: string = 'hello';
      const input: string = orig;
      const output: string = toString(input);
      input.should.be.deep.equal(orig);
      output.should.deep.equal('hello');

    });

    it(`true => 'true'`, () => {

      const orig: boolean = true;
      const input: boolean = orig;
      const output: string = toString(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('true');

    });

    it(`-0 => '-0'`, () => {

      const orig: number = -0;
      const input: number = orig;
      const output: string = toString(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('-0');

    });

    it(`Symbol() => 'Symbol()'`, () => {

      const orig: symbol = Symbol();
      const input: symbol = orig;
      const output: string = toString(input);
      should().equal(input, orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('Symbol()');

    });

    it(`Promise.resolve('hello') => 'Promise()'`, () => {

      const orig: Promise<string> = Promise.resolve('hello');
      const input: Promise<string> = orig;
      const output: string = toString(input);
      should().equal(input, orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('Promise()');

    });

    it(`()=>-123 => '-123'`, () => {

      const orig: () => number = () => -123;
      const input: () => number = orig;
      const output: string = toString(input);
      should().equal(input, orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('-123');

    });

    it(`{a:1} => '{"a":1}'`, () => {

      const orig: object = { a: 1 };
      const input: object = orig;
      const output: string = toString(input);
      input.should.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('{"a":1}');

    });

    it(`Error() => 'Error()'`, () => {

      const orig: Error = new Error();
      const input: object = orig;
      const output: string = toString(input);
      input.should.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('Error()');

    });

    it(`Date() => '{"a":1}'`, () => {

      const orig: Date = new Date();
      const input: Date = orig;
      const output: string = toString(input);
      input.should.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal(orig.toString());

    });

    it(`new Int8Array() => '0,0'`, () => {

      const orig: Int8Array = new Int8Array(2);
      const input: object = orig;
      const output: string = toString(input);
      input.should.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('0,0');

    });

  });

  describe(`should return (nested) array as a series of string`, () => {

    it(`[1,2,3] => '1,2,3'`, () => {

      const orig: number[] = [1, 2, 3];
      const input: number[] = orig.slice(0);
      const output: string = toString(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('1,2,3');

    });

    it(`[1,[2,3]] => '1,2,3'`, () => {

      const orig: any[] = [1, [2, 3]];
      const input: any[] = orig.slice(0);
      const output: string = toString(input);
      input.should.be.deep.equal(orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('1,2,3');

    });

  });

  /*

  describe(`should return '' for invalid value`, () => {

    it(`null => ''`, () => {

      const orig: number = null;
      const input: number = orig;
      const output: string = toString(input);
      should().equal(input, orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('');

    });

    it(`undefined => ''`, () => {

      const orig: number = undefined;
      const input: number = orig;
      const output: string = toString(input);
      should().equal(input, orig);
      output.should.not.be.equal(input);
      output.should.deep.equal('');

    });

  });
  
  */

});
