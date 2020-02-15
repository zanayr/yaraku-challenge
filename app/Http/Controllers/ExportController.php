<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exports\BooksExport;
use App\Book;
use Maatwebsite\Excel\Facades\Excel;

class ExportController extends Controller
{
    public function xls(Request $request) {
        return Excel::download(new BooksExport, 'file.xlsx');
    }
    public function csv(Request $request) {
        return Excel::download(new BooksExport, 'file.csv');
    }
}