// tslint:disable:max-file-line-count

import { should } from 'chai';
import { type } from '../src/type';

should();

describe(`type.check() - @category Language`, () => {

    describe(`should return true if type tag matches`, () => {

        it(`(new Float64Array(),'Float64Array') => true`, () => {
            type.check(new Float64Array(2), 'Float64Array').should.equal(true);
        });

        it(`(new Float32Array(),'Float32Array') => true`, () => {
            type.check(new Float32Array(2), 'Float32Array').should.equal(true);
        });

        it(`(new Uint32Array(),'Uint32Array') => true`, () => {
            type.check(new Uint32Array(2), 'Uint32Array').should.equal(true);
        });

        it(`(new Int32Array(),'Int32Array') => true`, () => {
            type.check(new Int32Array(2), 'Int32Array').should.equal(true);
        });

        it(`(new Uint16Array(),'Uint16Array') => true`, () => {
            type.check(new Uint16Array(2), 'Uint16Array').should.equal(true);
        });

        it(`(new Int16Array(),'Int16Array') => true`, () => {
            type.check(new Int16Array(2), 'Int16Array').should.equal(true);
        });

        it(`(new Uint8ClampedArray(),'Uint8ClampedArray') => true`, () => {
            type.check(new Uint8ClampedArray(2), 'Uint8ClampedArray').should.equal(true);
        });

        it(`(new Uint8Array(),'Uint8Array') => true`, () => {
            type.check(new Uint8Array(2), 'Uint8Array').should.equal(true);
        });

        it(`(new Int8Array(),'Int8Array') => true`, () => {
            type.check(new Int8Array(2), 'Int8Array').should.equal(true);
        });

        it(`(/abc/,'RegExp') => true`, () => {
            type.check(/abc/, 'RegExp').should.equal(true);
        });

        it(`(new Buffer(),'Buffer') => true`, () => {
            type.check(new Buffer(2), 'Buffer').should.equal(true);
        });

        it(`(new ArrayBuffer(),'ArrayBuffer') => true`, () => {
            type.check(new ArrayBuffer(2), 'ArrayBuffer').should.equal(true);
        });

        it(`(new Map(),'Map') => true`, () => {
            type.check(new Map(), 'Map').should.equal(true);
        });

        it(`(new WeakMap(),'WeakMap') => true`, () => {
            type.check(new WeakMap(), 'WeakMap').should.equal(true);
        });

        it(`(Promise.resolve(123),'Promise') => true`, () => {
            type.check(Promise.resolve(123), 'Promise').should.equal(true);
        });

        it(`(()=>123,'Function') => true`, () => {
            type.check(() => 123, 'Function').should.equal(true);
        });

        it(`(new Error(),'Error') => true`, () => {
            type.check(new Error(), 'Error').should.equal(true);
        });

        it(`(new Set(),'Set') => true`, () => {
            type.check(new Set(), 'Set').should.equal(true);
        });

        it(`(new WeakSet(),'WeakSet') => true`, () => {
            type.check(new WeakSet(), 'WeakSet').should.equal(true);
        });

        it(`(new Date(),'Date') => true`, () => {
            type.check(new Date(), 'Date').should.equal(true);
        });

        it(`({a:1},'Object') => true`, () => {
            type.check({ a: 1 }, 'Object').should.equal(true);
        });

        it(`([1,2,3],'Array') => true`, () => {
            type.check([1, 2, 3], 'Array').should.equal(true);
        });

        it(`(Symbol(),'Symbol') => true`, () => {
            type.check(Symbol(), 'Symbol').should.equal(true);
        });

        it(`(123,'Number') => true`, () => {
            type.check(123, 'Number').should.equal(true);
        });

        it(`('hello','String') => true`, () => {
            type.check('hello', 'String').should.equal(true);
        });

        it(`(true,'Boolean') => true`, () => {
            type.check(true, 'Boolean').should.equal(true);
        });

        it(`(NaN,'NaN') => true`, () => {
            type.check(NaN, 'NaN').should.equal(true);
        });

        it(`(null,'Null') => true`, () => {
            type.check(null, 'Null').should.equal(true);
        });

        it(`(undefined,'Undefined') => true`, () => {
            type.check(undefined, 'Undefined').should.equal(true);
        });


    });

    describe(`should be functional and not mutating any input`, () => {

        it(`"hello" => String`, () => {

            const orig: string = 'hello';
            const input: string = orig.slice(0);
            type.check(input, 'String').should.equal(true);
            input.should.be.deep.equal(orig);

        });

    });

});
