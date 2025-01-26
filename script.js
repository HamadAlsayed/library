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
        toggleRead() {
            !read;
        },
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

    while (bookTable.rows.length > 1) {
        bookTable.deleteRow(1);
    }

    // Loop through myLibrary array to dispaly new <td> elements
    for (i = 0; i < myLibrary.length; i++)
    {
        let newRow = document.createElement('tr'),
        tdTitle = addTextNode('td', myLibrary[i].title),
        tdAuthor = addTextNode('td', myLibrary[i].author),
        tdPages = addTextNode('td', myLibrary[i].pages),
        tdRead = addTextNode('td', myLibrary[i].read);

        newRow.append(tdTitle, tdAuthor, tdPages, tdRead);
        bookTable.appendChild(newRow);
        newRow.setAttribute('data-id', i);
    }
}


function addTextNode(type, text) {
    let newText = document.createTextNode(text),
    newData = document.createElement(type);
    newData.appendChild(newText);

    return newData;
}

addBookBtn.addEventListener('click', (e) => {
    bookForm.style.display = 'block';
})