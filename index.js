function writeCards(names) {
  let messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push("Thank you, " + names[i] + ", for the wonderful surprise gift!");
  }
  return messages;
}

function countDown(n) {
  for (let i = n; i >= 0; i--) {
    console.log(i);
  }
}

module.exports = { writeCards, countDown };
console.log(writecards)