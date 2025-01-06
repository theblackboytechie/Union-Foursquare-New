<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PublicController;
use App\Http\Controllers\BackendController;

Route::get('/', [PublicController::class, 'index'])->name('index');

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/dashboard', [BackendController::class, 'dashboard'])->name('dashboard');
    Route::get('/pages/{x}', [BackendController::class, 'pagesroute'])->name('pagesroute');
    Route::get('/pages/{x}/{y}', [BackendController::class, 'pages_subsection'])->name('pages_subsection');

    Route::post('/database_update', [BackendController::class, 'database_update'])->name('database_update');
});

require __DIR__.'/auth.php';
