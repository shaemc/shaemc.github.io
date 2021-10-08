function distinctList(list) {
    const authors = list.map(item => item.author);
    const distinct = new Set(authors);
    return [...distinct]; //... is the spread element
}

function buildAuthorsDropDown(authors) {}

export default class QuoteGetter {
    constructor(source, authorsId, quoteListId) {
        this.source = source;
        this.authorsId = authorsId;
        this.quoteListId = quoteListId;
        this.quotes = [];
        this.authors = [];
    }
    async init() {
        await this.getQuotes();
        this.authors = distinctList(this.quotes);
        buildAuthorsDropDown(this.authors);
        console.log(this.quotes);
    }
    async getQuotes() {
        this.quotes = await fetch(this.source).then(response => response.json());
    }
    filterQuotesByAuthor() {}
}