const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes =[];

function showLoading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function hideLoading() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Random Quote
function newQuote() {
    showLoading();
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // Check if author is null
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
    // Check long quotes
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
    hideLoading();
}

// Local Quote
// function localNewQuote() {
//     const localQuote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
//     authorText.textContent = quote.author;
//     quoteText.textContent = quote.text;
// }

// Get Quotes from API
async function getQuotes() {
    showLoading();
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        alert(`Error: ${error}`);
    }
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listneres
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuotes();
// localNewQuote();