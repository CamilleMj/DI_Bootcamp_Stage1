const express = require('express');
const bodyParser = require('body-parser');
const myapi = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

const myEmoji = [
    { emoji: "😀", name: "smiling" },
    { emoji: "😂", name: "laughing" },
    { emoji: "😍", name: "loving" },
    { emoji: "🤔", name: "thinking" },
    { emoji: "🙌", name: "prays" },
    { emoji: "🎉", name: "party" },
];

function getRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * myEmoji.length);
  return myEmoji[randomIndex];
}

function generateDistractors(correctEmoji) {
  const distractors = [];
  while (distractors.length < 3) {
    const randomIndex = Math.floor(Math.random() * myEmoji.length);
    const emoji = myEmoji[randomIndex];
    if (emoji !== correctEmoji && !distractors.includes(emoji)) {
      distractors.push(emoji);
    }
  }
  return distractors;
}

const correctEmoji = getRandomEmoji();
const distractors = generateDistractors(correctEmoji);

console.log('Correct emoji:', correctEmoji);
console.log('Distractors:', distractors);

myapi.get('/myapi', (req, res) => {
    const randomEmoji = getRandomEmoji();
    const options = generateDistractors(randomEmoji.name);
    options.push(randomEmoji.name);
    options.sort(() => Math.random() - 0.5);
    res.json({ emoji: randomEmoji.emoji, options });
});
  
myapi.post('/myapi', (req, res) => {
    const { guessedName, correctName } = req.body;
    const isCorrect = guessedName === correctName;
    res.json({ correct: isCorrect });
});


