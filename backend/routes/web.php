<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OAuthProviderController;
use Laravel\Socialite\Facades\Socialite;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

require __DIR__.'/auth.php';

Route::get('/auth/redirect', function () {

    return Socialite::driver('google')->redirect();

});