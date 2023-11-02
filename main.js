const myLibrary = [
    new Book("Title1", "Author1", 250, true),
    new Book("Title2", "Author2", 250, false),
    new Book("Title3", "Author3", 250, true)
];

function Book(title, author, pages, hasRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.hasRead = hasRead
}

function addBookToLibrary(e) {
    e.preventDefault()
    const titleInput = document.querySelector("#title-input")
    const authorInput = document.querySelector("#author-input")
    const pagesInput = document.querySelector("#pages-input")
    const radioGroup = document.querySelectorAll(".radio-group")
    let radioValue
    radioGroup.forEach((radio) => {
        if (radio.checked) {
            radioValue = radio.value
            console.log(radio.value);
        }
    })

    myLibrary.push(new Book(titleInput.value, authorInput.value, pagesInput.value, radioValue))
    renderLibrary()
}


Book.prototype.toggleReadStatus = function () {
    this.hasRead = !this.hasRead
}

const cardContainer = document.querySelector(".card-container")

function renderLibrary() {
    cardContainer.innerHTML = ""
    myLibrary.forEach((book, index) => {
        const card = document.createElement("div")
        card.classList.add("card")
        const title = document.createElement("h2")
        title.textContent = book.title
        const author = document.createElement("p")
        author.textContent = book.author
        const pages = document.createElement("p")
        pages.textContent = book.pages
        const hasReadPara = document.createElement("p")
        hasReadPara.textContent = book.hasRead == true || book.hasRead == "true" ? "Has read" : "Has not read"

        const removeBookBtn = document.createElement("button")
        removeBookBtn.textContent = "Remove Book"
        removeBookBtn.addEventListener("click", () => {
            myLibrary.splice(index, 1)
            renderLibrary()
        })


        const toggleReadStatusBtn = document.createElement("button")
        toggleReadStatusBtn.textContent = "Toggle Read Status"
        toggleReadStatusBtn.addEventListener("click", () => {
            book.toggleReadStatus()
            renderLibrary()
        })

        card.append(title)
        card.append(author)
        card.append(pages)
        card.append(hasReadPara)
        card.append(removeBookBtn)
        card.append(toggleReadStatusBtn)
        cardContainer.append(card)



    })
}

renderLibrary()

const newBookBtn = document.querySelector(".new-book-btn")
const form = document.querySelector("form")
form.style.display = "none"

newBookBtn.addEventListener("click", () => {
    form.style.display == "none" ? form.style.display = "flex" : form.style.display = "none"
})

const addBookBtn = document.querySelector(".add-book-btn")
addBookBtn.addEventListener("click", (e) => {
    addBookToLibrary(e)
})