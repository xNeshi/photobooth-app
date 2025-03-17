<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class TestUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Mark',
            'email' => 'test_user1@gmail.com',
            'password' => Hash::make('password'),
        ]);

        User::create([
            'name' => 'Liam',
            'email' => 'test_user2@gmail.com',
            'password' => Hash::make('password'),
        ]);
    }
}
