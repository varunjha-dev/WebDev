const express = require("express")
const app = express();
const BookStore = [
{id:1, name:"Harry Potter", author:"JK Rowling"},
{id:2, name:"Rich Dad Poor Dad", author:"Robert K"},
{id:3, name:"5 am club", author:"James Clear"},
{id:4, name:"Art of Decison Making", author:"Varun"},
{id:5, name:"Art of Happiness", author:"Varun"}
]
app.use(express.json()); // converts json in js object (sort of Middleware)

app.get("/book",(req,res)=>{
    const Book = BookStore.filter(info => info.author === req.query.author)
    res.send(Book);
})

app.get("/book/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const book = BookStore.find(info => info.id === id);
    res.send(book);
})

app.post("/book",(req,res)=>{
    const book = req.body;
    const duplicateBook = BookStore.find(info => info === book);
    if(duplicateBook)
        res.send("Book Already Exists");
    else
    {
        BookStore.push(req.body);
        res.send("Book Stored Successfully");
    }
})

app.delete("/book/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    // BookStore = BookStore.filter(book => book.id !== id);
    const index = BookStore.findIndex(info => info.id === id)
    BookStore.splice(index,1)
    res.send("Book is removed Successfully");
})

app.patch("/book",(req,res)=>{
    // console.log(req.body)
    const Book = BookStore.find(info => info.id === req.body.id)
    if (req.body.author){
    Book.author = req.body.author
    }
    if (req.body.name){
        Book.name = req.body.name
    }
    res.send("Patch catching")
})

app.put("/book", (req,res)=>{
    const Book = BookStore.find(info => info.id === req.body.id)
    Book.author = req.body.author
    Book.name = req.body.name
    res.send("Changes Updated")
})

app.listen(3000,()=>{
    console.log("Server is Listening at 3000");
})
