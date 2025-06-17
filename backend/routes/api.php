<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;

// -- CATEGORY --
Route::get('/category/showall', [CategoryController::class, 'index']);
Route::post('/category/add', [CategoryController::class, 'store']);
Route::put('/category/edit/{id}', [CategoryController::class, 'update']);
Route::delete('/category/delete/{id}', [CategoryController::class, 'destroy']);

// -- STATUS --
Route::get('/status/showall', [StatusController::class, 'index']);
Route::post('/status/add', [StatusController::class, 'store']);
Route::put('status/edit/{id}', [StatusController::class, 'update']);
Route::delete('status/delete/{id}', [StatusController::class, 'destroy']);