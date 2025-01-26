let bookForm = document.getElementById('new-book-form');
let addBookBtn = document.getElementById('add-book-btn');
let bookTable = document.getElementById('book-table');

const myLibrary = [];

bookForm.addEventListener('submit', (e) => {
    // Prevent page from reloading 'Add Book' is clicked
    e.preventDefault();
    
    // Add new book object to myLibrary array
    addBookToLibrary();

    // Reset form values
    bookForm.reset();

    // Render new table
    render();
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
    pagesVal = document.getElementById('pages').value,
    isChecked = document.getElementById('read').checked;

    myLibrary.push(createBook(titleVal, authorVal, pagesVal, isChecked));
}

function render()
{
    for (i = 0; i < myLibrary.length; i++)
    {
        let newRow = document.createElement('tr'),
        tdTitle = addTextNode(myLibrary[i].title),
        tdAuthor = addTextNode(myLibrary[i].author),
        tdPages = addTextNode(myLibrary[i].pages),
        tdRead = addTextNode(myLibrary[i].read);

        bookTable.appendChild(newRow);
        newRow.append(tdTitle, tdAuthor, tdPages, tdRead);
    }
}


function addTextNode(text) {
    let newText = document.createTextNode(text),
    newData = document.createElement('td');
    newData.appendChild(newText);

    return newData;
}

addBookBtn.addEventListener('click', (e) => {
    bookForm.style.display = 'block';
})