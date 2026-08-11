<?php

use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/services', [PageController::class, 'services'])->name('services');
Route::get('/pay', [PageController::class, 'pay'])->name('pay');
Route::get('/contact', [PageController::class, 'contact'])->name('contact');
