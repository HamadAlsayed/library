let bookForm = document.getElementById('new-book-form');
let addBookBtn = document.getElementById('add-book-btn');

const myLibrary = [];

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    
})

function createBook(title, author, pages, read)
{
    return {
        title: title,
        author: author,
        pages: pages,
        read: read,
    }
}

function addBookToLibrary()
{
    let titleVal = document.getElementById('title').value,
    authorVal = document.getElementById('author').value,
    pages = document.getElementById('pages').value,
    read = document.getElementById('read').value;

    myLibrary.push(createBook(titleVal, authorVal, pages, read));
}

function render()
{

}


addBookBtn.addEventListener('click', (e) => {
    bookForm.style.display = 'block';
})