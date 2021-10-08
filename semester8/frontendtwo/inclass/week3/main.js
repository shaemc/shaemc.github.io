import QuoteGetter from "./quoteGetter";

/*
x Write html: headline, dropdown of authors, button, list for quotes
Get quotes from api  https://type.fit/api/quotes
Get a distinct list of author names
Build the authors dropdown
When button is clicked:
    get current author from list
    filter quotes by author
    output quotes
*/
import QuoteGetter from './quoteGetter.js';

const quotes = new QuoteGetter(
    'https://type.fit/api/quotes',
    'authorList',
    'quoteList'
    );

quotes.init();

function getClicked(e) {
    console.log(e.target);
}

document.getElementById('get').addEventListener('click', getClicked);