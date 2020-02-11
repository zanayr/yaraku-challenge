<?php

namespace App\Http\Controllers;

use App\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index() {
        return Book::all()->toJson();
    }

    public function store(Request $request) {
        $book = Book::create($request->validate([
            'title' => 'required',
            'author' => 'required'
        ]));
        return response()->json('A book has been inserted into the database.');
    }
    
    public function update($id, $data) {
        $book = Book::findOrFail($id);
        $book->title = $data->title;
        $book->author = $data->author;
        $book->update();
        return response()->json('A book has been updated in the database.');
    }
}
