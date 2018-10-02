const findScore = require('./find-score');

const findScores = (comments, categories) => {
    if (comments && comments.length) {
        if (categories) {
            const scores = [];

            comments.forEach(c => {
                for (let key in categories) {
                    const scoreForKey = findScore(c, categories[key]);
                    scores.push(scoreForKey);
                }
            });

            return scores;
        }
        throw new Error('Categories is required!');
    }
    throw new Error('Comments is required and should be an array!');
};

module.exports = findScores;
