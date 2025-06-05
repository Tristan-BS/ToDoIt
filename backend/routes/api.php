<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/category/add', [App\Http\Controllers\CategoryController::class, 'store']);