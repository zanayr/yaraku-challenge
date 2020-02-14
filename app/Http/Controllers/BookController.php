<?php

namespace App\Http\Controllers;

use App\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index() {
        return Book::all()->toJson();
    }

    public function delete(Book $book) {
        $book->delete();
        return response()->json($book);
    }

    public function store(Request $request) {
        $book = Book::create($request->validate([
            'title' => 'required',
            'author' => 'required'
        ]));
        return response()->json($book);
    }
    
    public function update(Request $request, Book $book) {
        $book->title = $request->title;
        $book->author = $request->author;
        $book->update();
        return response()->json($book);
    }
}
