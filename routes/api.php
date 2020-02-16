<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('books', 'BookController@index');
Route::post('books', 'BookController@store');
Route::put('books/{book}', 'BookController@update');
Route::delete('books/{book}', 'BookController@delete');
Route::get('books/export/books', 'ExportController@exportBooks');
Route::get('books/export/titles', 'ExportController@exportTitles');
Route::get('books/export/authors', 'ExportController@exportAuthors');