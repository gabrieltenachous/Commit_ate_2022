<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
class UserSeeder extends Seeder
{ 
    public function run()
    {
        Db::table('users')->insert([
            'name'=>'anil sidhu',
            'email'=>'anil@sidhu.com',
            'password'=>Hash::make('1234')
        ]);
    }
}
