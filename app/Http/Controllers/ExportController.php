<?php

namespace App\Http\Controllers;

use App\Book;
use Illuminate\Http\Request;
use App\Exports\BooksExport;
use App\Exports\TitlesExport;
use App\Exports\AuthorsExport;
use Maatwebsite\Excel\Facades\Excel;

class ExportController extends Controller
{
    public function exportBooks(Request $request) {
        //  Should return a blob of all columns in the collection
        $format = ($request->format == 0) ? 'xls' : 'csv';
        return Excel::download(new BooksExport, 'books.' . $format);
    }
    public function exportTitles(Request $request) {
        //  Should return a blob of only the id and title columns
        $format = ($request->format == 0) ? 'xls' : 'csv';
        return Excel::download(new TitlesExport, 'titles.' . $format);
    }
    public function exportAuthors(Request $request) {
        //  Should return a blob of only the id and author columns
        $format = ($request->format == 0) ? 'xls' : 'csv';
        return Excel::download(new AuthorsExport, 'authors.' . $format);
    }
}