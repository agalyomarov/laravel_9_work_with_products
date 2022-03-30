<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;



require __DIR__ . '/auth.php';

Route::get('/', [ProductController::class, 'index'])->name('index');
Route::post('/', [ProductController::class, 'store'])->middleware(['auth'])->name('store');
Route::get('/{product}', [ProductController::class, 'show'])->name('show');
Route::put('/', [ProductController::class, 'update'])->middleware(['auth'])->name('update');
Route::delete('/{product}', [ProductController::class, 'delete'])->name('delete');
