const findScore = require('../src/find-score');

describe('FindScore', () => {
    it('should throw an error without comment', () => {
        const category = ['dummy'];
        expect(() => findScore('', category)).toThrow('Comment should be a string and non-empty!');
        expect(() => findScore(null, category)).toThrow('Comment should be a string and non-empty!');
        expect(() => findScore(undefined, category)).toThrow('Comment should be a string and non-empty!');
    });

    it('should throw an error without category', () => {
        const comment = 'Dummy comment';
        expect(() => findScore(comment, [])).toThrow('Category should be an array and non-empty!');
        expect(() => findScore(comment, null)).toThrow('Category should be an array and non-empty!');
        expect(() => findScore(comment, undefined)).toThrow('Category should be an array and non-empty!');
    });

    it('should get score', () => {
        const comment = 'The quick brown fox jumps over the lazy dog';
        expect(findScore(comment, ['quick', 'jump'])).toEqual('20.93%')
        expect(findScore(comment, ['fox', 'dog'])).toEqual('13.95%')
        expect(findScore(comment, ['lazy', 'slow'])).toEqual('9.30%')
        expect(findScore(comment, ['brown', 'back', 'orange'])).toEqual('11.63%')
        expect(findScore(comment, ['', null, undefined])).toEqual('0.00%')
    });
});
