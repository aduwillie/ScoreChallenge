const findScores = require('../src/index');

describe('FindScores', () => {
    it('should throw an error without comment', () => {
        const category = ['dummy'];
        expect(() => findScores('', category)).toThrow('Comments is required and should be an array!');
        expect(() => findScores(null, category)).toThrow('Comments is required and should be an array!');
        expect(() => findScores(undefined, category)).toThrow('Comments is required and should be an array!');
    });

    it('should throw an error without category', () => {
        const comments = [
            'The quick brown fox jumps over the lazy dog'
        ];
        expect(() => findScores(comments, null)).toThrow('Categories is required!');
        expect(() => findScores(comments, undefined)).toThrow('Categories is required!');
    });

    it('should get score', () => {
        const comments = [
            'The quick brown fox jumps over the lazy dog',
            'Hungry quick man going to shop'
        ];
        const categories = {
            a: ['quick', 'jump'],
            b: ['fox', 'dog'],
            c: ['lazy', 'slow'],
            d: ['brown', 'back', 'orange'],
            e: [null],
        }
        expect(findScores(comments, categories)).toEqual(
            [
                '20.93%',
                '13.95%',
                '9.30%',
                '11.63%',
                '0.00%',
                '16.67%',
                '0.00%',
                '0.00%',
                '0.00%',
                '0.00%',
            ]);
    });
});
