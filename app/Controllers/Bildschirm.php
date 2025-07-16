<?php

namespace App\Controllers;

class Bildschirm extends BaseController
{
    public function index(): string
    {
        return view('welcome_message');
    }
}
