<?php

use App\Http\Controllers\ListingController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('show_one/{id}', [ListingController::class, 'show_one']);
///
Route::get('show/{id?}', [ListingController::class, 'show']);
Route::post('create', [ListingController::class, 'create']);
Route::put('edit/{id}', [ListingController::class, 'edit']);
Route::get('search/{title}', [ListingController::class, 'search']);
Route::delete('delete/{id}', [ListingController::class, 'delete']);

