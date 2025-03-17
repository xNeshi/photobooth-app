<?php

namespace App\Http\Controllers\UserProfile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\UserResource;

class AvatarController extends Controller
{
    public function update(Request $request)
    {
        $request->validate([
            'avatar' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $user = auth()->user();

        if ($user->avatar) {
            Storage::disk('spaces')->delete($user->avatar);
        }

        $path = $request->file('avatar')->store('avatars', 'spaces');

        $user->avatar = $path;
        $user->save();

        return new UserResource($user);
    }
}
