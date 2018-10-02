const findScore = (comment, category) => {
    if (comment && comment.length) {
        if (category && category.length) {
            let score = 0;

            category.forEach(c => {
                if (comment.indexOf(c) >= 0) {
                    score += c.length;
                }
            });

            return `${(100 / (comment.length / score)).toFixed(2)}%`;
        }
        throw new Error('Category should be an array and non-empty!');
    }
    throw new Error('Comment should be a string and non-empty!');
}

module.exports = findScore;
