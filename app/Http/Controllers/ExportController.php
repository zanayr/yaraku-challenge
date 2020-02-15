<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exports\BooksExport;
use App\Book;
use Maatwebsite\Excel\Facades\Excel;

class ExportController extends Controller
{
    public function export(Request $request) {
        // $data = new BooksExport();
        return Excel::download(new BooksExport, $request->title . '.xlsx');
    }
}