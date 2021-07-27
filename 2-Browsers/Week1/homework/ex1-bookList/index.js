//cspell: disable
/*
  
 ** Exercise 1: The book list **

  I'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

*/
//cspell: enable

const myBooks = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    isbn: '978-0465050659',
    image: "assets/the_design_of_everyday_things.jpg",
    alreadyRead: false,
    
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    isbn: '978-1617933431',
    image: "assets/the_design_of_everyday_things.jpg",
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    isbn: '978-0201616224',
    image: "assets/the_design_of_everyday_things.jpg",
    alreadyRead: true,
  },
];

function createBookList(books) {
  const newUl = document.createElement('ul');
 document.getElementById('bookList').appendChild(newUl);
 for (let i = 0; i < books.length; i++) {
  const newLiEl = document.createElement('li');
  const img = document.createElement('img');
  img.alt = 'text';
  img.src = books[i].image;
  newLiEl.appendChild(img);
  newUl.appendChild(newLiEl);
 const paragraph = document.createElement('p');
 const info = document.createTextNode(`"${books[i].title}"  ${books[i].author}`);
 paragraph.appendChild(info);
 const attached=  document.getElementById('bookList')
 attached.appendChild(paragraph);
 newLiEl.appendChild(paragraph);
 if(books[i].alreadyRead) {newLiEl.style.backgroundColor = 'green'} else newLiEl.style.backgroundColor = 'red';
 }

}


const ulElement = createBookList(myBooks);

document.querySelector('#bookList').appendChild(ulElement);

