let apiQuotes =[];

// Random Quote
function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

// Local Quote
// function localNewQuote() {
//     const localQuote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
//     console.log(localQuote);
// }

// Get Quotes from API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Error here
    }
}

// On Load
getQuotes();
// localNewQuote();