window.onload = function()
{
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

    function addBookToLibrary()
    {
        let title = document.getElementById("title").value;
        let author = document.getElementById("author").value;
        let pages = document.getElementById("pages").value;
        let read = document.getElementById("read").value;
        let newBook = new Book(title, author, pages, read);
        console.log(newBook);
    }

    addBookBtn.addEventListener("click", function() {
        newBookForm.style.display = "block";
    })

    newBookForm.addEventListener("submit", function(event) {
        event.preventDefault();
        addBookToLibrary();
    })

    function render()
    {

    }
}