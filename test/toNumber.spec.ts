import { should } from 'chai';
import { toNumber } from '../src/toNumber';

should();

describe(`toNumber() - @category Language`, () => {

  describe(`should return NaN for all non numeric object`, () => {

    it(`Symbol() => NaN`, () => {

      const orig: symbol = Symbol();
      const input: symbol = orig;
      const output: number = toNumber(input);
      output.should.not.equal(output);

    });

    it(`new Error() => NaN`, () => {

      const orig: Error = new Error();
      const input: Error = orig;
      const output: number = toNumber(input);
      output.should.not.equal(output);

    });

    it(`()=>'hello' => NaN`, () => {

      const orig: () => string = () => 'hello';
      const input: () => string = orig;
      const output: number = toNumber(input);
      output.should.not.equal(output);

    });

  });

  describe(`should convert date value to universal time value`, () => {

    it(`new Date() => <big number>`, () => {

      const orig: Date = new Date();
      const input: Date = orig;
      const output: number = toNumber(input);
      input.should.be.deep.equal(orig);
      output.should.equal(new Date(input).getTime());

    });

  });

  describe(`should convert boolean value to 1 and 0`, () => {

    it(`true => 1`, () => {

      const orig: boolean = true;
      const input: boolean = orig;
      const output: number = toNumber(input);
      input.should.be.deep.equal(orig);
      output.should.equal(1);

    });

    it(`false => 0`, () => {

      const orig: boolean = false;
      const input: boolean = orig;
      const output: number = toNumber(input);
      input.should.be.deep.equal(orig);
      output.should.equal(0);

    });

  });


  describe(`should convert a numeric object to number`, () => {

    it(`new Object(123) => 123`, () => {

      const orig: object = new Object(123);
      const input: object = orig;
      const output: number = toNumber(input);
      output.should.equal(123);

    });

    it(`new Object('456') => 456`, () => {

      const orig: object = new Object('456');
      const input: object = orig;
      const output: number = toNumber(input);
      output.should.equal(456);

    });

    it(`new Object('hello') => NaN`, () => {

      const orig: object = new Object('hello');
      const input: object = orig;
      const output: number = toNumber(input);
      output.should.not.equal(output);

    });

    it(`new Object({a:1}) => NaN`, () => {

      const orig: object = new Object({ a: 1 });
      const input: object = orig;
      const output: number = toNumber(input);
      output.should.not.equal(output);

    });

  });

  describe(`should convert a numeric string to number`, () => {

    it(`'123' => 123`, () => {

      const orig: string = '123';
      const input: string = orig.slice(0);
      const output: number = toNumber(input);
      input.should.be.deep.equal(orig);
      output.should.equal(123);

    });

    it(`'123.456' => 123.456`, () => {

      const orig: string = '123.456';
      const input: string = orig.slice(0);
      const output: number = toNumber(input);
      input.should.be.deep.equal(orig);
      output.should.equal(123.456);

    });

    it(`'Infinity' => Infinity`, () => {

      const orig: string = 'Infinity';
      const input: string = orig.slice(0);
      const output: number = toNumber(input);
      input.should.be.deep.equal(orig);
      output.should.equal(Infinity);

    });

    it(`'0b1110' => 14`, () => {

      const orig: string = '0b1110';
      const input: string = orig.slice(0);
      const output: number = toNumber(input);
      input.should.be.deep.equal(orig);
      output.should.equal(14);

    });

    it(`'0o17' => 15`, () => {

      const orig: string = '0o17';
      const input: string = orig.slice(0);
      const output: number = toNumber(input);
      input.should.be.deep.equal(orig);
      output.should.equal(15);

    });

    it(`'0x1F' => 31`, () => {

      const orig: string = '0x1F';
      const input: string = orig.slice(0);
      const output: number = toNumber(input);
      input.should.be.deep.equal(orig);
      output.should.equal(31);

    });


    it(`'hello' => NaN`, () => {

      const orig: string = 'hello';
      const input: string = orig.slice(0);
      const output: number = toNumber(input);
      input.should.be.deep.equal(orig);
      output.should.not.equal(output);

    });

    it(`'0b23' => NaN`, () => {

      const orig: string = '0b23';
      const input: string = orig.slice(0);
      const output: number = toNumber(input);
      input.should.be.deep.equal(orig);
      output.should.not.equal(output);

    });

    it(`'0O99' => NaN`, () => {

      const orig: string = '0O99';
      const input: string = orig.slice(0);
      const output: number = toNumber(input);
      input.should.be.deep.equal(orig);
      output.should.not.equal(output);

    });

    it(`'0XGG' => NaN`, () => {

      const orig: string = '0XGG';
      const input: string = orig.slice(0);
      const output: number = toNumber(input);
      input.should.be.deep.equal(orig);
      output.should.not.equal(output);

    });

    it(`'NaN' => NaN`, () => {

      const orig: string = 'NaN';
      const input: string = orig.slice(0);
      const output: number = toNumber(input);
      input.should.be.deep.equal(orig);
      output.should.not.equal(output);

    });

  });


  describe(`should convert a number to number`, () => {

    it(`Infinity => Infinity`, () => {

      const orig: number = Infinity;
      const input: number = orig;
      const output: number = toNumber(input);
      input.should.be.deep.equal(orig);
      output.should.equal(Infinity);

    });


    it(`Number.MAX_VALUE => 1.7976931348623157e+308`, () => {

      const orig: number = Number.MAX_VALUE;
      const input: number = orig;
      const output: number = toNumber(input);
      input.should.be.deep.equal(orig);
      output.should.equal(1.7976931348623157e+308);

    });

    it(`Number.MIN_VALUE => 5e-324`, () => {

      const orig: number = Number.MIN_VALUE;
      const input: number = orig;
      const output: number = toNumber(input);
      input.should.be.deep.equal(orig);
      output.should.equal(5e-324);

    });

    it(`Number.MAX_SAFE_INTEGER => 9007199254740991`, () => {

      const orig: number = Number.MAX_SAFE_INTEGER;
      const input: number = orig;
      const output: number = toNumber(input);
      input.should.be.deep.equal(orig);
      output.should.equal(9007199254740991);

    });

    it(`Number.MIN_SAFE_INTEGER => -9007199254740991`, () => {

      const orig: number = Number.MIN_SAFE_INTEGER;
      const input: number = orig;
      const output: number = toNumber(input);
      input.should.be.deep.equal(orig);
      output.should.equal(-9007199254740991);

    });

    it(`1e3 => 1e3`, () => {

      const orig: number = 1e3;
      const input: number = orig;
      const output: number = toNumber(input);
      input.should.be.deep.equal(orig);
      output.should.equal(1e3);

    });

    it(`3.2 => 3.2`, () => {

      const orig: number = 3.2;
      const input: number = orig;
      const output: number = toNumber(input);
      input.should.be.deep.equal(orig);
      output.should.equal(3.2);

    });

    it(`3 => 3`, () => {

      const orig: number = 3;
      const input: number = orig;
      const output: number = toNumber(input);
      input.should.be.deep.equal(orig);
      output.should.equal(3);

    });


  });

});
