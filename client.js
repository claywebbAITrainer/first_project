let bookList = [
    {
        title: 'The Race',
        genre: 'Action'
    },
    {
        title: 'The Journey',
        genre: 'Adventure'
    },
    {
        title: 'The Elf',
        genre: 'Fantasy'
    },
    {
        title: 'The Rocket',
        genre: 'Sci Fi'
    },
    {
        title: 'The Computer',
        genre: 'Sci Fi'
    },
    {
        title: 'The Unicorn',
        genre: 'Fantasy'
    },
    {
        title: 'The Person',
        genre: 'Biography'
    },
    {
        title: 'The Book About Plants',
        genre: 'Action'
    },
    {
        title: 'The Space Ship',
        genre: 'SciFi'
    },
    {
        title: 'The Book About Animals',
        genre: 'Non-Fiction'
    },
    {
        title: 'The Public Speaker',
        genre: 'Biography'
    },
    {
        title: 'The Burrito',
        genre: 'Non-Fiction'
    },
    {
        title: 'The Climb',
        genre: 'Adventure'
    }
];

var getArrByGenre = function (list, genre) {
    return list
        .filter(function (book) {
            return book.genre === genre
        })
        .map(function (book) {
            return book.title
        })
}



console.log(getArrByGenre(bookList, 'Fantasy'))