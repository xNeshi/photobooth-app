<?php

namespace App\Enums;

enum OAuthProviderEnum: string
{
    case GITHUB = 'github';
    case GOOGLE = 'google';
}
