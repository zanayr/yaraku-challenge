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
        $format = ($request->format == 0) ? 'xls' : 'csv';
        return Excel::download(new BooksExport, 'books.' . $format);
    }
    public function exportTitles(Request $request) {
        $format = ($request->format == 0) ? 'xls' : 'csv';
        return Excel::download(new TitlesExport, 'titles.' . $format);
    }
    public function exportAuthors(Request $request) {
        $format = ($request->format == 0) ? 'xls' : 'csv';
        return Excel::download(new AuthorsExport, 'authors.' . $format);
    }
}