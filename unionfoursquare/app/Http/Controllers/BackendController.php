<?php

namespace App\Http\Controllers;
use App\Helpers\CrudHelper;
use Illuminate\Http\Request;
use Carbon\Carbon;

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
        // return "Jack&Rose!";
        $currenttime = Carbon::now();
        if($request->owner == "jumbotron-update"){
            $tabledb = "pagesui";

            $pagesui = [
                'headline' => $request->headline,
                'subtext' => $request->subtext,
                'text1' => $request->text1,
                'link1' => $request->link1,
                'text2' => $request->text2,
                'link2' => $request->link2,
            ];

            $json_pagesui = json_encode($pagesui);

            $where_array = [
                'page_name' => "jumbotron",
            ];

            $update_array = [
                'content' => $json_pagesui,
                'updated_at' => $currenttime,
            ];

            if(!empty(trim($request->headline)) && !empty(trim($request->subtext)) && !empty(trim($request->text1)) && !empty(trim($request->link1)) && !empty(trim($request->text2)) && !empty(trim($request->link2))){
                CrudHelper::Update($tabledb, $where_array, $update_array);
            }
        }elseif($request->owner == "jumbotron-get"){
            $tabledb = "pagesui";

            $where_array = [
                'page_name' => "jumbotron",
            ];
    
            $output = CrudHelper::Get($tabledb, $where_array);

            foreach($output as $output){
                // $output->content;
                $pagesui = json_decode($output->content, true);
            }

            return response()->json($pagesui);
        }
    }
}
