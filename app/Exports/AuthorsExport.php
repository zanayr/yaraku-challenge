<?php

namespace App\Exports;

use App\Book;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;

class AuthorsExport implements FromQuery, WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function query()
    {
        return Book::query()->select('id', 'author');
    }

    public function headings(): array
    {
        return [
            'Id',
            'Author',
        ];
    }
}