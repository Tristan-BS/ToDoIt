<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;


Route::get('/category/showall', [CategoryController::class, 'index']);
Route::post('/category/add', [CategoryController::class, 'store']);
Route::put('/category/edit/{id}', [CategoryController::class, 'update']);
Route::delete('/category/delete/{id}', [CategoryController::class, 'destroy']);