window.onload = function()
{
    const myLibrary = [];

    let addBookBtn = document.getElementById("add-book-btn");
    let formCnt = document.getElementById("form-container");

    function Book(title, author, pages, hasBeenRead)
    {
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.hasBeenRead = hasBeenRead
    };

    function addBookToLibrary()
    {
        let newBook = new Book(title, author, pages, hasBeenRead);
        myLibrary.push(newBook);
    }

    addBookBtn.addEventListener("click", function() {
        formCnt.style.display = "contents";
    })
}