
const myLibrary = [];

let addBookBtn = document.getElementById("add-book-btn");
let newBookForm = document.getElementById("new-book-form")

function Book(title, author, pages, read)
{
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read;
};

Book.prototype.toggleRead = function()
{
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    render();
}

function render()
{
    let library = document.getElementById("library");
    library.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++)
    {
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.innerHTML = `
            <div>
                <h3 class="title">${book.title}</h3>
                <h5 class="author">${book.author}</h5>
            </div>
            <div>
                <p>${book.pages} pages</p>
                <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
                <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
                <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
            </div>
        `
        library.appendChild(bookEl);
    }
}

function removeBook(index)
{
    myLibrary.splice(index, 1);
    render();
}

function addBookToLibrary()
{
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}

addBookBtn.addEventListener("click", function() {
    newBookForm.style.display = "block";
})

newBookForm.addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
})
