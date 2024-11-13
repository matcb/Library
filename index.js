const bookGrid = document.getElementById('bookGrid')

const books = [
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/hp4.jpg"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/hp4.jpg"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/hp4.jpg"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/hp4.jpg"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/hp4.jpg"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/hp4.jpg"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/hp4.jpg"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/hp4.jpg"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/hp4.jpg"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/hp4.jpg"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/hp4.jpg"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/hp4.jpg"},

    
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/HP2.png"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/HP2.png"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/HP2.png"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/HP2.png"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/HP2.png"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/HP2.png"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/HP2.png"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/HP2.png"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/HP2.png"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/HP2.png"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/HP2.png"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/HP3.jpg"},

    

    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/HP3.jpg"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/HP3.jpg"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/HP3.jpg"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/HP3.jpg"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/HP3.jpg"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/HP3.jpg"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/HP3.jpg"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/HP3.jpg"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/HP3.jpg"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/HP3.jpg"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/HP3.jpg"},
    {title: "Harry Potter 1", author: "J.K Rowling", subject: "Fiction", image: "./assets/img/HP3.jpg"},

    

    



]

//show 12books per page

function renderBook(page){
    bookGrid.innerHTML = ""
    const startIndex = (page - 1 ) * 12
    const endIndex = startIndex + 12
    const booksToDisplay = books.slice(startIndex, endIndex)

    booksToDisplay.forEach(book => {
        const bookCard = document.createElement('div')
        bookCard.className = 'book-card'
        bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <div class="book-info">
                <h2>Title: ${book.title}</h2>
                <p>Author: ${book.author}</p>
                <p>Subject: ${book.subject}</p>
             </div>
        `
        bookGrid.appendChild(bookCard)
    })
}

function changePage(page){
    renderBook(page)
}

renderBook(1)