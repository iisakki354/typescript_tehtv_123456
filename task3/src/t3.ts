export {}; // hack to ignore Book from task 4
// TODO: Define a type alias named 'Book' with appropriate properties
type Book = {
    title: string;
    author: string;
    publicationYear: number;
}

// TODO: Implement the promptForBook function
function promptForBook() {
    // TODO: Prompt user for book details (title, author, publication year)
    const bookTitle = String(prompt("Enter book title")) /* TODO: Get user input for title */;
    const bookAuthor = String(prompt("Enter book Author"))/* TODO: Get user input for author */;
    const bookPublicationYear = Number(prompt("Enter book PublicationYear"))/* TODO: Get user input for publication year */;

    // TODO: Create an object of type 'Book' with the entered values
    const book: Book  = {title: bookTitle, author: bookAuthor, publicationYear: bookPublicationYear}  /* TODO: Create the Book object */;
    return book;
}

// TODO: Call the promptForBook function to get the book details
const bookDetails = promptForBook();

// TODO: Display the details of the book object to the user
console.log("Book Details:");
console.log(`Title: ${bookDetails.title}`);
console.log(`Author: ${bookDetails.author}`);
console.log(`Publication Year: ${bookDetails.publicationYear}`);
