let bookForm = document.getElementById('new-book-form');
let addBookBtn = document.getElementById('add-book-btn');
let bookTable = document.getElementById('book-table');
let checkboxes = document.querySelectorAll('.book-check')

const myLibrary = [];

myLibrary.push(createBook('Thinking, Fast and Slow', 'Daniel Kahneman', 416, false));
myLibrary.push(createBook('A Profound Waste of Time', 'Caspian Whistler', 184, true))
render();

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
    // Clear current table rows except for header
    while (bookTable.rows.length > 1) {
        bookTable.deleteRow(1);
    }

    // Loop through myLibrary array to display new <td> elements
    for (i = 0; i < myLibrary.length; i++)
    {
        let newRow = document.createElement('tr'),
        tdTitle = addTextNode('td', myLibrary[i].title),
        tdAuthor = addTextNode('td', myLibrary[i].author),
        tdPages = addTextNode('td', myLibrary[i].pages),
        tdRead = addTextNode('td', ''),
        tdDelete = addTextNode('td', ''),
        deleteBtn = addTextNode('button', 'Delete'),
        readBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        readBtn.classList.add('read-btn');

        if (myLibrary[i].read) {
            readBtn.innerHTML = 'Read';
        } else {
            readBtn.innerHTML = 'Unread';
        }
        

        tdRead.appendChild(readBtn);
        tdDelete.appendChild(deleteBtn);

        newRow.append(tdTitle, tdAuthor, tdPages, tdRead, tdDelete);
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
});

bookTable.addEventListener('click', e => {
    let getNodeID = e.target.parentNode.parentNode.getAttribute('data-id');
    if (e.target.matches('.read-btn')) {
        if (myLibrary[getNodeID].read == true) {
            myLibrary[getNodeID].read = false;
            e.target.innerHTML = 'Unread';
            console.log(myLibrary[getNodeID]);
        } else {
            myLibrary[getNodeID].read = true;
            e.target.innerHTML = 'Read';
            console.log(myLibrary[getNodeID]);
        }
    }


})