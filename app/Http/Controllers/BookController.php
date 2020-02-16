<?php

namespace App\Http\Controllers;

use App\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index() {
        //  Should return a list of all books in the database
        return Book::all()->toJson();
    }

    public function delete(Book $book) {
        // Should remove a passed book from the database
        $book->delete();
        return response()->json($book);
    }

    public function store(Request $request) {
        // Should add a new book to the database
        $book = Book::create($request->validate([
            'title' => 'required',
            'author' => 'required'
        ]));
        return response()->json($book);
    }
    
    public function update(Request $request, Book $book) {
        // Should update a book in the database with the passed values
        $book->title = $request->title;
        $book->author = $request->author;
        $book->update();
        return response()->json($book);
    }
}
