<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/category/showall', [App\Http\Controllers\CategoryController::class, 'index']);
Route::post('/category/add', [App\Http\Controllers\CategoryController::class, 'store']);