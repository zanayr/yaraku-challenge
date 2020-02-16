<?php

namespace App\Exports;

use App\Book;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;

class TitlesExport implements FromQuery, WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function query()
    {
        return Book::query()->select('id', 'title');
    }

    public function headings(): array
    {
        return [
            'Id',
            'Title',
        ];
    }
}
