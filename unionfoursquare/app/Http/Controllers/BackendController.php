<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BackendController extends Controller
{
    //
    public function dashboard(Request $request)
    {
        $owner = "view_dashboard";
        $params = [];

        return view('/publicpages/backendrouter', compact('owner', 'params'));
    }

    // pagesroute
    public function pagesroute(Request $request)
    {
        $owner = "view_pagesroute_dashboard";
        $params = [];

        return view('/publicpages/backendrouter', compact('owner', 'params'));
    }

    // pages_subsection_edit
    public function pages_subsection(Request $request)
    {
        $url = $request->url();
        $path = parse_url($url, PHP_URL_PATH);
        $segments = explode('/', $path);
        $lastParameter = end($segments);

        if($lastParameter == "jumbotron"){
            $owner = "view_homepage_subsection_jumbotron";
        }elseif($lastParameter == "themetext"){
            $owner = "view_homepage_subsection_themetext";
        }

        $params = [];

        return view('/publicpages/backendrouter', compact('owner', 'params'));
    }

    public function database_update(Request $request)
    {
        return "Jack&Rose!";
    }
}
