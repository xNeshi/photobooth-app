<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OAuthProviderController;
use App\Http\Controllers\UserProfile\AvatarController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/test-user', function () {
    return response()->json(['message' => 'Sample API Para sayo liam!']);
});

Route::post('/upload-avatar', [AvatarController::class, 'update'])
    ->middleware('auth')
    ->name('upload.avatar');
