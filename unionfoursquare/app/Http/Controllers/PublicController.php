<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PublicController extends Controller
{
    // index
    public function index(Request $request)
    {
        $owner = "viewpublicindex";
        $params = [];

        return view('/publicpages/router', compact('owner', 'params'));
    }
}
