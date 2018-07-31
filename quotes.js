
let quotes = document.getElementById('quotes');
let quoteCollection = [
  "Don't cry because it's over, smile because it happened.",
  "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
  "Be yourself; everyone else is already taken.",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
   "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",
   "A room without books is like a body without a soul.",
	"You know you're in love when you can't fall asleep because reality is finally better than your dreams ",
	"You only live once, but if you do it right, once is enough ",
	"In three words I can sum up everything I've learned about life: it goes on",
	"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
	"Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself'"
	]

let selectSentence = function(){
	return quoteCollection[Math.floor(Math.random()*quoteCollection.length)]
};

setInterval(function(){
	quotes.innerText = selectSentence()
},4000)

