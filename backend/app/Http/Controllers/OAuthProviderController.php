<?php

namespace App\Http\Controllers;


use App\Enums\OAuthProviderEnum;
use App\Models\OAuthProvider;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Log;

class OAuthProviderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(OAuthProviderEnum $provider)
    {
        return Socialite::driver($provider->value)->redirect();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(OAuthProviderEnum $provider)
    {
        try {
            $socialite = Socialite::driver($provider->value)->user();

            Log::info('OAuth success', ['email' => $socialite->getEmail(), 'name' => $socialite->getName()]);
            
            $user = User::firstOrCreate([
                'email' => $socialite->getEmail(),
            ], [
                'name' => $socialite->getName(),
            ], [
                'avatar' => $socialite->getAvatar(),
            ]);
    
            $user->providers()->updateOrCreate([
                'provider' => $provider,
                'provider_id' => $socialite->getId(), 
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Authentication successful',
                'user' => ['email' => $socialite->getEmail(), 'name' => $socialite->getName(), 'avatar' => $socialite->getAvatar()]
            ]);
            
            // Once working, I'll uncomment this to redirect to frontend dashboard instead:
            // Auth::login($user);
            // return redirect(config('app.frontend_url'));

        } catch (\Exception $e) {
            Log::error('OAuth error', ['message' => $e->getMessage()]);
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(OAuthProvider $oAuthProvider)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, OAuthProvider $oAuthProvider)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(OAuthProvider $oAuthProvider)
    {
        //
    }
}
