<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OAuthProvider extends Model
{
    /** @use HasFactory<\Database\Factories\OAuthProviderFactory> */
    use HasFactory;

    protected $table = 'o_auth_providers';

    protected $fillable = [
        'provider',
        'provider_id',
        'user_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
