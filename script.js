var quotes = [
'Life is either a daring adventure or nothing. -Helen Keller',
'Life is a long lesson in humility. -James M. Barrie',
'In three words I can sum up everything I\'ve learned about life: it goes on. -Robert Fros',
'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. -Dr. Seuss',
'Life is made of ever so many partings welded together. -Charles Dickens ',
'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma — which is living with the results of other people\'s thinking. -Steve Jobs ',
'Life is trying things to see if they work. -Ray Bradbury ',
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length)); 
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

console.log(randomNumber)