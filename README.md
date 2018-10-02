# ScoreChallenge
This is to solve a challenge

## Coding assignment:

Below you will find a list of comments. We want to know how they score per category. These categories are dynamic and contain words that would assign it to that particular category for a certain score. Scores are the amount of space the occurring words take up in a comment.

### example:
"The quick brown fox jumps over the lazy dog"

for the following categories the results would be as follows:
A ["quick", "jump"] = 20.93%
B ["fox", "dog"] = 13.95%
C ["lazy", "slow"] = 9.3%
D ["brown", "back", "orange"] = 11.62%

### function shape:
It should accept an array of comments and an object with categories.

The content of the categories you can make yourself but in general they look like this:
{
  "category name": ["word A", "word  B"],
  "next category": [...]
}

you can console log the output per comment with the different scores per category

### output:
The key functions are `findScore` and `findScores`.
