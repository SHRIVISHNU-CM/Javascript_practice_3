const arrayofbooks = [
    {author:"vishnu", year: 2001},
    { author: "kuvempu", year: 2009 },
    { author: "nadaprabhu", year: 2011 },
    { author: "jaipraksh", year: 2016 },
    { author: "leonardo", year: 2015 },
    { author: "krishna", year: 2010 },
];

const output = arrayofbooks.filter((book_year)=>book_year.year <= 2010);
console.log(output);

const booksarray = arrayofbooks.map((book)=>{
    if(book.year >=2010){
        console.log("Author: ", book.author.toUpperCase(), "year: ", book.year);
    }

});
