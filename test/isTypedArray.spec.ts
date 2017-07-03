import { expect, should } from 'chai';
import { isTypedArray } from '../src/isTypedArray';

should();

describe(`isTypedArray() - @category Language`, () => {

    describe(`should return false for null/undefined`, () => {

        it(`null => false`, () => {

            const orig: any = null;
            const input: any = orig;
            const output: any = isTypedArray(input);
            should().equal(input, orig);
            output.should.not.be.equal(input);
            output.should.deep.equal(false);

        });

        it(`undefined => false`, () => {

            const orig: any = null;
            const input: any = orig;
            const output: any = isTypedArray(input);
            should().equal(input, orig);
            output.should.not.be.equal(input);
            output.should.deep.equal(false);

        });

    });

    describe(`should identify typed array correctly...`, () => {

        it(`new Uint8Array => true`, () => {

            const orig: any = new Uint8Array(1);
            const input: any = orig.slice(0);
            const output: any = isTypedArray(input);
            input.should.be.deep.equal(orig);
            output.should.not.be.equal(input);
            output.should.deep.equal(true);

        });

        it(`new Int8Array => true`, () => {

            const orig: any = new Int8Array(1);
            const input: any = orig.slice(0);
            const output: any = isTypedArray(input);
            input.should.be.deep.equal(orig);
            output.should.not.be.equal(input);
            output.should.deep.equal(true);

        });

        it(`new Uint8ClampedArray => true`, () => {

            const orig: any = new Uint8ClampedArray(1);
            const input: any = orig.slice(0);
            const output: any = isTypedArray(input);
            input.should.be.deep.equal(orig);
            output.should.not.be.equal(input);
            output.should.deep.equal(true);

        });

        it(`new Uint16Array => true`, () => {

            const orig: any = new Uint16Array(1);
            const input: any = orig.slice(0);
            const output: any = isTypedArray(input);
            input.should.be.deep.equal(orig);
            output.should.not.be.equal(input);
            output.should.deep.equal(true);

        });

        it(`new Int16Array => true`, () => {

            const orig: any = new Int16Array(1);
            const input: any = orig.slice(0);
            const output: any = isTypedArray(input);
            input.should.be.deep.equal(orig);
            output.should.not.be.equal(input);
            output.should.deep.equal(true);

        });

        it(`new Uint32Array => true`, () => {

            const orig: any = new Uint32Array(1);
            const input: any = orig.slice(0);
            const output: any = isTypedArray(input);
            input.should.be.deep.equal(orig);
            output.should.not.be.equal(input);
            output.should.deep.equal(true);

        });

        it(`new Int32Array => true`, () => {

            const orig: any = new Int32Array(1);
            const input: any = orig.slice(0);
            const output: any = isTypedArray(input);
            input.should.be.deep.equal(orig);
            output.should.not.be.equal(input);
            output.should.deep.equal(true);

        });

        it(`new Float32Array => true`, () => {

            const orig: any = new Float32Array(1);
            const input: any = orig.slice(0);
            const output: any = isTypedArray(input);
            input.should.be.deep.equal(orig);
            output.should.not.be.equal(input);
            output.should.deep.equal(true);

        });

        it(`new Float64Array => true`, () => {

            const orig: any = new Float64Array(1);
            const input: any = orig.slice(0);
            const output: any = isTypedArray(input);
            input.should.be.deep.equal(orig);
            output.should.not.be.equal(input);
            output.should.deep.equal(true);

        });

        it(`[] => false`, () => {

            const orig: any = [];
            const input: any = orig.slice(0);
            const output: any = isTypedArray(input);
            input.should.be.deep.equal(orig);
            output.should.not.be.equal(input);
            output.should.deep.equal(false);

        });

        it(`[1,2,3] => false`, () => {

            const orig: any = [1, 2, 3];
            const input: any = orig.slice(0);
            const output: any = isTypedArray(input);
            input.should.be.deep.equal(orig);
            output.should.not.be.equal(input);
            output.should.deep.equal(false);

        });

        it(`123 => false`, () => {

            const orig: any = 123;
            const input: any = orig;
            const output: any = isTypedArray(input);
            input.should.be.deep.equal(orig);
            output.should.not.be.equal(input);
            output.should.deep.equal(false);

        });

        it(`NaN => false`, () => {

            const orig: any = NaN;
            const input: any = orig;
            const output: any = isTypedArray(input);
            input.should.not.equal(input);
            orig.should.not.equal(orig);
            input.should.not.equal(orig);
            output.should.not.be.equal(input);
            output.should.deep.equal(false);

        });

        it(`'hello' => false`, () => {

            const orig: any = 'hello';
            const input: any = orig.slice(0);
            const output: any = isTypedArray(input);
            input.should.be.deep.equal(orig);
            output.should.not.be.equal(input);
            output.should.deep.equal(false);

        });

    });

});
