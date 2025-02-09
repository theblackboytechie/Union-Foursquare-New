<?php

namespace App\Http\Controllers;
use App\Helpers\CrudHelper;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

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
        // return "shabar!";
        $url = $request->url();
        $path = parse_url($url, PHP_URL_PATH);
        $segments = explode('/', $path);
        $lastParameter = end($segments);

        if($lastParameter == "jumbotron"){
            $owner = "view_homepage_subsection_jumbotron";
        }elseif($lastParameter == "themetext"){
            $owner = "view_homepage_subsection_themetext";
        }elseif($lastParameter == "whyfoursquare"){
            $owner = "view_construct_whyfoursquare";
        }else{
            $owner = "view_construct_pages";
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
        }elseif($request->owner == "jumbotron-get" || $request->owner == "jumbotron-get-bg"){
            $tabledb = "pagesui";

            $where_array = [
                'page_name' => "jumbotron",
            ];
    
            $output = CrudHelper::Get($tabledb, $where_array);

            if($request->owner == "jumbotron-get"){
                foreach($output as $output){
                    // $output->content;
                    $pagesui = json_decode($output->content, true);
                }
    
                return response()->json($pagesui);
            }elseif($request->owner == "jumbotron-get-bg"){
                foreach($output as $output){
                    return $output->mediafile1;
                }
            }
        }elseif(
            $request->owner == "single-text" || 
            $request->owner == "single-image" || 
            $request->owner == "single-image-text" || 
            $request->owner == "single-text-image" || 
            $request->owner == "double-text-image" || 
            $request->owner == "double-image-text" ||
            $request->owner == "double-image_up-text_down" ||
            $request->owner == "double-text_up-image_down" ||
            $request->owner == "tripple-text" ||
            $request->owner == "tripple-image" ||
            $request->owner == "tripple-text_up-image_down" ||
            $request->owner == "tripple-image_up-text_down"
        ){
            $tabledb = "pagesui";

            $where_array = [
                'page_name' => $request->pageowner,
            ];
            // 'page_name' => "whyfoursquare",
    
            $output = CrudHelper::Get($tabledb, $where_array);

            foreach($output as $output){
                if(empty($output->content)){
                    $component_array = [];
                }else{
                    $component_array = json_decode($output->content, true);
                }

                $randomString = Str::random(10);

                // ($array, -2, -1, 0);
                array_unshift($component_array, $randomString);

                $json_pagesui = json_encode($component_array);

                $tabledb = "pagesui";

                $update_array = [
                    'content' => $json_pagesui,
                    'updated_at' => $currenttime,
                ];
        
                CrudHelper::Update($tabledb, $where_array, $update_array);
                // 
                $randomString2 = Str::random(10);
                $randomString3 = Str::random(10);
                $randomString4 = Str::random(10);
                $randomString5 = Str::random(10);
                $randomString6 = Str::random(10);
                $randomString7 = Str::random(10);

                // create style for component wraps
                $this->create_component_style($randomString);

                if($request->owner == "single-text"){
                    $component_content_array = [
                        'text' => $randomString2,
                    ];

                    $this->create_component_style($randomString2);
                }elseif($request->owner == "single-image"){
                    $component_content_array = [
                        'image' => $randomString2,
                    ];

                    $this->create_component_style($randomString2);
                }elseif($request->owner == "single-image-text"){
                    $component_content_array = [
                        'image' => $randomString2,
                        'text' => $randomString3,
                    ];

                    $this->create_component_style($randomString2);
                    $this->create_component_style($randomString3);
                }elseif($request->owner == "single-text-image"){
                    $component_content_array = [
                        'text' => $randomString2,
                        'image' => $randomString3,
                    ];

                    $this->create_component_style($randomString2);
                    $this->create_component_style($randomString3);
                }elseif($request->owner == "double-text-image"){
                    $component_content_array = [
                        'text1' => $randomString2,
                        'image1' => $randomString3,
                    ];

                    $this->create_component_style($randomString2);
                    $this->create_component_style($randomString3);
                }elseif($request->owner == "double-image-text"){
                    $component_content_array = [
                        'image1' => $randomString2,
                        'text1' => $randomString3,
                    ];

                    $this->create_component_style($randomString2);
                    $this->create_component_style($randomString3);
                }elseif($request->owner == "double-image_up-text_down"){
                    $component_content_array = [
                        'image1' => $randomString2,
                        'text1' => $randomString3,
                        'image2' => $randomString4,
                        'text2' => $randomString5,
                    ];

                    $this->create_component_style($randomString2);
                    $this->create_component_style($randomString3);
                    $this->create_component_style($randomString4);
                    $this->create_component_style($randomString5);
                }elseif($request->owner == "double-text_up-image_down"){
                    $component_content_array = [
                        'text1' => $randomString2,
                        'image1' => $randomString3,
                        'text2' => $randomString4,
                        'image2' => $randomString5,
                    ];

                    $this->create_component_style($randomString2);
                    $this->create_component_style($randomString3);
                    $this->create_component_style($randomString4);
                    $this->create_component_style($randomString5);
                }elseif($request->owner == "tripple-text"){
                    $component_content_array = [
                        'text1' => $randomString2,
                        'text2' => $randomString3,
                        'text3' => $randomString4,
                    ];

                    $this->create_component_style($randomString2);
                    $this->create_component_style($randomString3);
                    $this->create_component_style($randomString4);
                }elseif($request->owner == "tripple-image"){
                    $component_content_array = [
                        'image1' => $randomString2,
                        'image2' => $randomString3,
                        'image3' => $randomString4,
                    ];

                    $this->create_component_style($randomString2);
                    $this->create_component_style($randomString3);
                    $this->create_component_style($randomString4);
                }elseif($request->owner == "tripple-text_up-image_down"){
                    $component_content_array = [
                        'text1' => $randomString2,
                        'image1' => $randomString3,
                        'text2' => $randomString4,
                        'image2' => $randomString5,
                        'text3' => $randomString6,
                        'image3' => $randomString7,
                    ];

                    $this->create_component_style($randomString2);
                    $this->create_component_style($randomString3);
                    $this->create_component_style($randomString4);
                    $this->create_component_style($randomString5);
                    $this->create_component_style($randomString6);
                    $this->create_component_style($randomString7);
                }elseif($request->owner == "tripple-image_up-text_down"){
                    $component_content_array = [
                        'image1' => $randomString2,
                        'text1' => $randomString3,
                        'image2' => $randomString4,
                        'text2' => $randomString5,
                        'image3' => $randomString6,
                        'text3' => $randomString7,
                    ];

                    $this->create_component_style($randomString2);
                    $this->create_component_style($randomString3);
                    $this->create_component_style($randomString4);
                    $this->create_component_style($randomString5);
                    $this->create_component_style($randomString6);
                    $this->create_component_style($randomString7);
                }elseif($request->owner == "single-empty"){

                }elseif($request->owner == "double-empty"){
                    return "double empty!";
                }elseif($request->owner == "tripple-empty"){
                    return $request->owner;
                }else{

                }

                $component_content_json = json_encode($component_content_array);
                // 

                $tabledb = "pagesui_component";

                $create_array = [
                    'pagesui_id' => $request->pageowner,
                    'component_id' => $randomString,
                    'component_type' => $request->owner,
                    'content' => $component_content_json,
                    'created_at' => $currenttime,
                    'updated_at' => $currenttime,
                ];
        
                CrudHelper::Create($tabledb, $create_array);
            }
        }elseif($request->owner == "load_page_construct"){
            // return "$request->pageowner!yaba smith!!!";
            $tabledb = "pagesui";
            // return $request->pageowner;

            $where_array = [
                'page_name' => $request->pageowner,
            ];
    
            $output = CrudHelper::Get($tabledb, $where_array);
            // return count($output);
            // if the output is zero we create a page with this detail and get again
            if(count($output) == 0 && $request->pageowner == "homepage"){
                $authorid = Auth::id();
                $currenttime = Carbon::now();
        
                $create_array = [
                    'author_id' => $authorid,
                    'page_name' => $request->pageowner,
                    'created_at' => $currenttime,
                    'updated_at' => $currenttime,
                ];
        
                CrudHelper::Create($tabledb, $create_array);

                return "newpagecreated!";
            }
            
            if(count($output) == 0){
                // whythefoursquare
                return "page not found";
            }

            // return count($output);
            if(count($output) > 0){
                // return "page dey!".count($output);
                foreach($output as $output){
                    $lonewolf_displayname = $output->display_page_name;
                    // return $output->content;
                    if(empty($output->content)){
                        // return "no content!";
                        // return "";
                        return response()->json([
                            'displayname' => $lonewolf_displayname,
                            'wraps' => "",
                        ]);
                    }

                    $pagesuilist = json_decode($output->content, true);
                    $wraps = "";
                    // $wraps .= "$pagesuilist, ";
                    foreach($pagesuilist as $pagesui){
                        // this is to get the full details of each components, to know if it is texts and images 
                        $component_all_details = $this->get_pagesui_component($pagesui);
                        // $wraps .= "$pagesui!!, ";
                        // $wraps .= count($component_all_details).", ";

                        foreach($component_all_details as $componentdetails){
                            // to get the ids of the component members we convert from json to array and loop
                            $component_content = json_decode($componentdetails->content, true);
                            $componentstyle = $this->get_content_text($pagesui, "style", $componentdetails->component_type);

                            // use the id of the text/image to get the content of the text or image

                            // $wraps .= "$componentdetails->component_type 000000;";
                            if($componentdetails->component_type == "single-text"){
                                foreach($component_content as $key => $value){
                                    if ($key == 'text') {
                                        $text_id1 = $value;
                                    }
                                }

                                // get actual text
                                $actualtext = $this->get_content_text($text_id1, "text", null);
                                $actualtext = $this->get_content_text($text_id1, "text", null);
                                $actualstyle = $this->get_content_text($text_id1, "style", null);
                                
                                $wraps .= "<div class='incontext_component_wraps' id='$pagesui' component_wraps_type='single_type' style='$componentstyle'><div class='single_text' id='$text_id1' style='$actualstyle' component_type='text' component_id='$text_id1'>$actualtext</div></div>";
                            }elseif($componentdetails->component_type == "single-image"){
                                foreach($component_content as $key => $value){
                                    if ($key == 'image') {
                                        $image_id1 = $value;
                                    }
                                }

                                $actualimage = $this->get_content_text($image_id1, "image", null);
                                $actualstyle = $this->get_content_text($image_id1, "style", null);

                                if(empty($actualimage)){
                                    $imageurl = "http://127.0.0.1:8000/storage/assets/images/placeholder.jpg";
                                }else{
                                    // $actualimage 
                                    $imageurl = "http://127.0.0.1:8000/storage/uploads/$actualimage";
                                }

                                $wraps .= "<div class='single_image incontext_component_wraps' component_wraps_type='single_type' id='$pagesui' style='$componentstyle'><img src='$imageurl' class='actual_image' component_type='image' id='$image_id1' component_id='$image_id1' style='$actualstyle' /></div>";
                            }elseif($componentdetails->component_type == "single-image-text"){
                                foreach($component_content as $key => $value){
                                    if ($key == 'image') {
                                        $image_id1 = $value;
                                    }elseif($key == 'text'){
                                        $text_id1 = $value;
                                    }
                                }

                                // get actual text 
                                $actualtext = $this->get_content_text($text_id1, "text", null);
                                $actualtext_style = $this->get_content_text($text_id1, "style", null);

                                $actualimage = $this->get_content_text($image_id1, "image", null);
                                $actualimage_style = $this->get_content_text($image_id1, "style", null);

                                if(empty($actualimage)){
                                    $imageurl = "http://127.0.0.1:8000/storage/assets/images/placeholder.jpg";
                                }else{
                                    // $actualimage 
                                    $imageurl = "http://127.0.0.1:8000/storage/uploads/$actualimage";
                                }

                                $wraps .= "<div class='incontext_component_wraps' id='$pagesui' component_wraps_type='single_type' style='$componentstyle'>";
                                    $wraps .= "<div class='single_image'><img src='$imageurl' class='actual_image' component_type='image' id='$image_id1' component_id='$image_id1' style=' style='$actualimage_style' /></div>";
                                    $wraps .= "<div class='single_text' id='$text_id1' component_type='text' component_id='$text_id1' style='$actualtext_style'>$actualtext</div>";
                                $wraps .= "</div>";
                            }elseif($componentdetails->component_type == "single-text-image"){
                                foreach($component_content as $key => $value){
                                    if ($key == 'image') {
                                        $image_id1 = $value;
                                    }elseif($key == 'text'){
                                        $text_id1 = $value;
                                    }
                                }

                                // get actual text
                                $actualtext = $this->get_content_text($text_id1, "text", null);
                                $actualtext_style = $this->get_content_text($text_id1, "style", null);

                                $actualimage = $this->get_content_text($image_id1, "image", null);
                                $actualimage_style = $this->get_content_text($image_id1, "style", null);

                                if(empty($actualimage)){
                                    $imageurl = "http://127.0.0.1:8000/storage/assets/images/placeholder.jpg";
                                }else{
                                    // $actualimage 
                                    $imageurl = "http://127.0.0.1:8000/storage/uploads/$actualimage";
                                }

                                $wraps .= "<div class='incontext_component_wraps' id='$pagesui' component_wraps_type='single_type' style='$componentstyle'>";
                                    $wraps .= "<div class='single_text' id='$text_id1' component_type='text' component_id='$text_id1' style='$actualtext_style'>$actualtext</div>";
                                    $wraps .= "<div class='single_image'><img src='$imageurl' class='actual_image' id='$image_id1' component_type='image' component_id='$image_id1' style='$actualimage_style' /></div>";
                                $wraps .= "</div>";
                            }elseif($componentdetails->component_type == "double-text-image"){
                                foreach($component_content as $key => $value){
                                    if ($key == 'image1') {
                                        $image_id1 = $value;
                                    } elseif ($key == 'text1') {
                                        $text_id1 = $value;
                                    }
                                }

                                // get actual text
                                $actualtext = $this->get_content_text($text_id1, "text", null);
                                $actualtext_style = $this->get_content_text($text_id1, "style", null);

                                $actualimage = $this->get_content_text($image_id1, "image", null);
                                $actualimage_style = $this->get_content_text($image_id1, "style", null);

                                if(empty($actualimage)){
                                    $imageurl = "http://127.0.0.1:8000/storage/assets/images/placeholder.jpg";
                                }else{
                                    // $actualimage 
                                    $imageurl = "http://127.0.0.1:8000/storage/uploads/$actualimage";
                                }

                                $wraps .= "<div class='double_grid incontext_component_wraps' id='$pagesui' component_wraps_type='double_type' style='$componentstyle'>";
                                    $wraps .= "<div class='single_text' component_type='text' id='$text_id1' component_id='$text_id1' style='$actualtext_style'>$actualtext</div>";
                                    $wraps .= "<div class='single_image'><img src='$imageurl' class='actual_image' component_type='image' id='$image_id1' component_id='$image_id1' style='$actualimage_style' /></div>";
                                $wraps .= "</div>";
                            }elseif($componentdetails->component_type == "double-image-text"){
                                foreach($component_content as $key => $value){
                                    if ($key == 'image1') {
                                        $image_id1 = $value;
                                    } elseif ($key == 'text1') {
                                        $text_id1 = $value;
                                    }
                                }

                                // get actual text
                                $actualtext = $this->get_content_text($text_id1, "text", null);
                                $actualtext_style = $this->get_content_text($text_id1, "style", null);

                                $actualimage = $this->get_content_text($image_id1, "image", null);
                                $actualimage_style = $this->get_content_text($image_id1, "style", null);

                                if(empty($actualimage)){
                                    $imageurl = "http://127.0.0.1:8000/storage/assets/images/placeholder.jpg";
                                }else{
                                    // $actualimage 
                                    $imageurl = "http://127.0.0.1:8000/storage/uploads/$actualimage";
                                }

                                $wraps .= "<div class='double_grid incontext_component_wraps' id='$pagesui' component_wraps_type='double_type' style='$componentstyle'>";
                                    $wraps .= "<div class='single_text' component_type='text' id='$text_id1' component_id='$text_id1' style='$actualtext_style'>$actualtext</div>";
                                    $wraps .= "<div class='single_image'><img src='$imageurl' class='actual_image' component_type='image' id='$image_id1' component_id='$image_id1' style='$actualimage_style' /></div>";
                                $wraps .= "</div>";
                            }elseif($componentdetails->component_type == "double-image_up-text_down"){
                                foreach($component_content as $key => $value){
                                    if ($key == 'image1') {
                                        $image_id1 = $value;
                                    } elseif ($key == 'text1') {
                                        $text_id1 = $value;
                                    } elseif ($key == 'image2') {
                                        $image_id2 = $value;
                                    } elseif ($key == 'text2') {
                                        $text_id2 = $value;
                                    }
                                }

                                // get actual text
                                $actualtext1 = $this->get_content_text($text_id1, "text", null);
                                $actualtext2 = $this->get_content_text($text_id2, "text", null);
                                $actualtext1_style = $this->get_content_text($text_id1, "style", null);
                                $actualtext2_style = $this->get_content_text($text_id2, "style", null);

                                $actualimage1 = $this->get_content_text($image_id1, "image", null);
                                $actualimage2 = $this->get_content_text($image_id2, "image", null);
                                $actualimage1_style = $this->get_content_text($image_id1, "style", null);
                                $actualimage2_style = $this->get_content_text($image_id2, "style", null);

                                if(empty($actualimage1)){
                                    $imageurl1 = "http://127.0.0.1:8000/storage/assets/images/placeholder.jpg";
                                }else{
                                    // $actualimage 
                                    $imageurl1 = "http://127.0.0.1:8000/storage/uploads/$actualimage1";
                                }

                                if(empty($actualimage2)){
                                    $imageurl2 = "http://127.0.0.1:8000/storage/assets/images/placeholder.jpg";
                                }else{
                                    // $actualimage 
                                    $imageurl2 = "http://127.0.0.1:8000/storage/uploads/$actualimage2";
                                }

                                $wraps .= "<div class='double_grid incontext_component_wraps' id='$pagesui' component_wraps_type='double_type' style='$componentstyle'>";
                                    $wraps .= "<div>";
                                        $wraps .= "<div class='single_image'><img src='$imageurl1' class='actual_image' component_type='image' id='$image_id1' component_id='$image_id1' style='$actualimage1_style' /></div>";
                                        $wraps .= "<div class='single_text' component_type='text' id='$text_id1' component_id='$text_id1' style='$actualtext1_style'>$actualtext1</div>";
                                    $wraps .= "</div>";
                                    $wraps .= "<div>";
                                        $wraps .= "<div class='single_image'><img src='$imageurl2' class='actual_image' component_type='image' id='$image_id2' component_id='$image_id2' style='$actualimage2_style' /></div>";
                                        $wraps .= "<div class='single_text' component_type='text' id='$text_id2' component_id='$text_id2' style='$actualtext2_style'>$actualtext2</div>";
                                    $wraps .= "</div>";
                                $wraps .= "</div>";
                            }elseif($componentdetails->component_type == "double-text_up-image_down"){
                                foreach($component_content as $key => $value){
                                    if ($key == 'image1') {
                                        $image_id1 = $value;
                                    } elseif ($key == 'text1') {
                                        $text_id1 = $value;
                                    } elseif ($key == 'image2') {
                                        $image_id2 = $value;
                                    } elseif ($key == 'text2') {
                                        $text_id2 = $value;
                                    }
                                }

                                // get actual text
                                $actualtext1 = $this->get_content_text($text_id1, "text", null);
                                $actualtext2 = $this->get_content_text($text_id2, "text", null);
                                $actualtext1_style = $this->get_content_text($text_id1, "style", null);
                                $actualtext2_style = $this->get_content_text($text_id2, "style", null);

                                $actualimage1 = $this->get_content_text($image_id1, "image", null);
                                $actualimage2 = $this->get_content_text($image_id2, "image", null);
                                $actualimage1_style = $this->get_content_text($image_id1, "style", null);
                                $actualimage2_style = $this->get_content_text($image_id2, "style", null);

                                if(empty($actualimage1)){
                                    $imageurl1 = "http://127.0.0.1:8000/storage/assets/images/placeholder.jpg";
                                }else{
                                    // $actualimage 
                                    $imageurl1 = "http://127.0.0.1:8000/storage/uploads/$actualimage1";
                                }

                                if(empty($actualimage2)){
                                    $imageurl2 = "http://127.0.0.1:8000/storage/assets/images/placeholder.jpg";
                                }else{
                                    // $actualimage 
                                    $imageurl2 = "http://127.0.0.1:8000/storage/uploads/$actualimage2";
                                }

                                $wraps .= "<div class='double_grid incontext_component_wraps' id='$pagesui' component_wraps_type='double_type' style='$componentstyle'>";
                                    $wraps .= "<div>";
                                        $wraps .= "<div class='single_text' component_type='text' id='$text_id1' component_id='$text_id1' style='$actualtext1_style'>$actualtext1</div>";
                                        $wraps .= "<div class='single_image'><img src='$imageurl1' class='actual_image' component_type='image' id='$image_id1' component_id='$image_id1' style='$actualimage1_style' /></div>";
                                    $wraps .= "</div>";
                                    $wraps .= "<div>";
                                        $wraps .= "<div class='single_text' component_type='text' id='$text_id2' component_id='$text_id2' style='$actualtext2_style'>$actualtext2</div>";
                                        $wraps .= "<div class='single_image'><img src='$imageurl2' class='actual_image' component_type='image' id='$image_id2' component_id='$image_id2' style='$actualimage2_style' /></div>";
                                    $wraps .= "</div>";
                                $wraps .= "</div>";
                            }elseif($componentdetails->component_type == "tripple-text"){
                                foreach($component_content as $key => $value){
                                    if ($key == 'text1') {
                                        $text_id1 = $value;
                                    } elseif ($key == 'text2') {
                                        $text_id2 = $value;
                                    } elseif ($key == 'text3') {
                                        $text_id3 = $value;
                                    }
                                }

                                // get actual text
                                $actualtext1 = $this->get_content_text($text_id1, "text", null);
                                $actualtext2 = $this->get_content_text($text_id2, "text", null);
                                $actualtext3 = $this->get_content_text($text_id3, "text", null);

                                $actualtext1_style = $this->get_content_text($text_id1, "style", null);
                                $actualtext2_style = $this->get_content_text($text_id2, "style", null);
                                $actualtext3_style = $this->get_content_text($text_id3, "style", null);

                                $wraps .= "<div class='tripple_grid incontext_component_wraps' id='$pagesui' component_wraps_type='tripple_type' style='$componentstyle'>";
                                    $wraps .= "<div class='single_text' component_type='text' id='$text_id1' component_id='$text_id1' style='$actualtext1_style'>$actualtext1</div>";
                                    $wraps .= "<div class='single_text' component_type='text' id='$text_id2' component_id='$text_id2' style='$actualtext2_style'>$actualtext2</div>";
                                    $wraps .= "<div class='single_text' component_type='text' id='$text_id3' component_id='$text_id3' style='$actualtext3_style'>$actualtext3</div>";
                                $wraps .= "</div>";
                            }elseif($componentdetails->component_type == "tripple-image"){
                                foreach($component_content as $key => $value){
                                    if ($key == 'image1') {
                                        $image_id1 = $value;
                                    } elseif ($key == 'image2') {
                                        $image_id2 = $value;
                                    } elseif ($key == 'image3') {
                                        $image_id3 = $value;
                                    }
                                }

                                $actualimage1 = $this->get_content_text($image_id1, "image", null);
                                $actualimage2 = $this->get_content_text($image_id2, "image", null);
                                $actualimage3 = $this->get_content_text($image_id3, "image", null);
                                $actualimage1_style = $this->get_content_text($image_id1, "style", null);
                                $actualimage2_style = $this->get_content_text($image_id2, "style", null);
                                $actualimage3_style = $this->get_content_text($image_id3, "style", null);

                                if(empty($actualimage1)){
                                    $imageurl1 = "http://127.0.0.1:8000/storage/assets/images/placeholder.jpg";
                                }else{
                                    // $actualimage 
                                    $imageurl1 = "http://127.0.0.1:8000/storage/uploads/$actualimage1";
                                }

                                if(empty($actualimage2)){
                                    $imageurl2 = "http://127.0.0.1:8000/storage/assets/images/placeholder.jpg";
                                }else{
                                    // $actualimage 
                                    $imageurl2 = "http://127.0.0.1:8000/storage/uploads/$actualimage2";
                                }

                                if(empty($actualimage3)){
                                    $imageurl3 = "http://127.0.0.1:8000/storage/assets/images/placeholder.jpg";
                                }else{
                                    // $actualimage 
                                    $imageurl3 = "http://127.0.0.1:8000/storage/uploads/$actualimage3";
                                }

                                $wraps .= "<div class='tripple_grid incontext_component_wraps' id='$pagesui' component_wraps_type='tripple_type' style='$componentstyle'>";
                                    $wraps .= "<div class='single_image'><img src='$imageurl1' class='actual_image' component_type='image' id='$image_id1' component_id='$image_id1' style='$actualimage1_style' /></div>";
                                    $wraps .= "<div class='single_image'><img src='$imageurl2' class='actual_image' component_type='image' id='$image_id2' component_id='$image_id2' style='$actualimage2_style' /></div>";
                                    $wraps .= "<div class='single_image'><img src='$imageurl3' class='actual_image' component_type='image' id='$image_id3' component_id='$image_id3' style='$actualimage3_style' /></div>";
                                $wraps .= "</div>";
                            }elseif($componentdetails->component_type == "tripple-text_up-image_down"){
                                foreach($component_content as $key => $value){
                                    if ($key == 'text1') {
                                        $text_id1 = $value;
                                    } elseif ($key == 'image1') {
                                        $image_id1 = $value;
                                    } elseif ($key == 'text2') {
                                        $text_id2 = $value;
                                    } elseif ($key == 'image2') {
                                        $image_id2 = $value;
                                    } elseif ($key == 'text3') {
                                        $text_id3 = $value;
                                    } elseif ($key == 'image3') {
                                        $image_id3 = $value;
                                    }
                                }

                                // get actual text
                                $actualtext1 = $this->get_content_text($text_id1, "text", null);
                                $actualtext2 = $this->get_content_text($text_id2, "text", null);
                                $actualtext3 = $this->get_content_text($text_id3, "text", null);

                                $actualtext1_style = $this->get_content_text($text_id1, "style", null);
                                $actualtext2_style = $this->get_content_text($text_id2, "style", null);
                                $actualtext3_style = $this->get_content_text($text_id3, "style", null);

                                $actualimage1 = $this->get_content_text($image_id1, "image", null);
                                $actualimage2 = $this->get_content_text($image_id2, "image", null);
                                $actualimage3 = $this->get_content_text($image_id3, "image", null);

                                $actualimage1_style = $this->get_content_text($image_id1, "style", null);
                                $actualimage2_style = $this->get_content_text($image_id2, "style", null);
                                $actualimage3_style = $this->get_content_text($image_id3, "style", null);

                                if(empty($actualimage1)){
                                    $imageurl1 = "http://127.0.0.1:8000/storage/assets/images/placeholder.jpg";
                                }else{
                                    // $actualimage 
                                    $imageurl1 = "http://127.0.0.1:8000/storage/uploads/$actualimage1";
                                }

                                if(empty($actualimage2)){
                                    $imageurl2 = "http://127.0.0.1:8000/storage/assets/images/placeholder.jpg";
                                }else{
                                    // $actualimage 
                                    $imageurl2 = "http://127.0.0.1:8000/storage/uploads/$actualimage2";
                                }

                                if(empty($actualimage3)){
                                    $imageurl3 = "http://127.0.0.1:8000/storage/assets/images/placeholder.jpg";
                                }else{
                                    // $actualimage 
                                    $imageurl3 = "http://127.0.0.1:8000/storage/uploads/$actualimage3";
                                }
                                
                                $wraps .= "<div class='tripple_grid incontext_component_wraps' id='$pagesui' component_wraps_type='tripple_type' style='$componentstyle'>";
                                    $wraps .= "<div>";
                                        $wraps .= "<div class='single_text' component_type='text' id='$text_id1' component_id='$text_id1' style='$actualtext1_style'>$actualtext1</div>";
                                        $wraps .= "<div class='single_image'><img src='$imageurl1' class='actual_image' component_type='image' id='$image_id1' component_id='$image_id1' style='$actualimage1_style' /></div>";
                                    $wraps .= "</div>";
                                    $wraps .= "<div>";
                                        $wraps .= "<div class='single_text' component_type='text' id='$text_id2' component_id='$text_id2' style='$actualtext2_style'>$actualtext2</div>";
                                        $wraps .= "<div class='single_image'><img src='$imageurl2' class='actual_image' component_type='image' id='$image_id2' component_id='$image_id2' style='$actualimage2_style' /></div>";
                                    $wraps .= "</div>";
                                    $wraps .= "<div>";
                                        $wraps .= "<div class='single_text' component_type='text' id='$text_id3' component_id='$text_id3' style='$actualtext3_style'>$actualtext3</div>";
                                        $wraps .= "<div class='single_image'><img src='$imageurl3' class='actual_image' component_type='image' id='$image_id3' component_id='$image_id3' style='$actualimage3_style' /></div>";
                                    $wraps .= "</div>";
                                $wraps .= "</div>";
                            }elseif($componentdetails->component_type == "tripple-image_up-text_down"){
                                foreach($component_content as $key => $value){
                                    if ($key == 'text1') {
                                        $text_id1 = $value;
                                    } elseif ($key == 'image1') {
                                        $image_id1 = $value;
                                    } elseif ($key == 'text2') {
                                        $text_id2 = $value;
                                    } elseif ($key == 'image2') {
                                        $image_id2 = $value;
                                    } elseif ($key == 'text3') {
                                        $text_id3 = $value;
                                    } elseif ($key == 'image3') {
                                        $image_id3 = $value;
                                    }
                                }

                                // get actual text
                                $actualtext1 = $this->get_content_text($text_id1, "text", null);
                                $actualtext2 = $this->get_content_text($text_id2, "text", null);
                                $actualtext3 = $this->get_content_text($text_id3, "text", null);

                                $actualtext1_style = $this->get_content_text($text_id1, "style", null);
                                $actualtext2_style = $this->get_content_text($text_id2, "style", null);
                                $actualtext3_style = $this->get_content_text($text_id3, "style", null);

                                $actualimage1 = $this->get_content_text($image_id1, "image", null);
                                $actualimage2 = $this->get_content_text($image_id2, "image", null);
                                $actualimage3 = $this->get_content_text($image_id3, "image", null);

                                $actualimage1_style = $this->get_content_text($image_id1, "style", null);
                                $actualimage2_style = $this->get_content_text($image_id2, "style", null);
                                $actualimage3_style = $this->get_content_text($image_id3, "style", null);

                                if(empty($actualimage1)){
                                    $imageurl1 = "http://127.0.0.1:8000/storage/assets/images/placeholder.jpg";
                                }else{
                                    // $actualimage 
                                    $imageurl1 = "http://127.0.0.1:8000/storage/uploads/$actualimage1";
                                }

                                if(empty($actualimage2)){
                                    $imageurl2 = "http://127.0.0.1:8000/storage/assets/images/placeholder.jpg";
                                }else{
                                    // $actualimage 
                                    $imageurl2 = "http://127.0.0.1:8000/storage/uploads/$actualimage2";
                                }

                                if(empty($actualimage3)){
                                    $imageurl3 = "http://127.0.0.1:8000/storage/assets/images/placeholder.jpg";
                                }else{
                                    // $actualimage 
                                    $imageurl3 = "http://127.0.0.1:8000/storage/uploads/$actualimage3";
                                }
                                
                                $wraps .= "<div class='tripple_grid incontext_component_wraps' id='$pagesui' component_wraps_type='tripple_type' style='$componentstyle'>";
                                    $wraps .= "<div>";
                                        $wraps .= "<div class='single_image'><img src='$imageurl1' class='actual_image' component_type='image' id='$image_id1' component_id='$image_id1' style='$actualimage1_style' /></div>";
                                        $wraps .= "<div class='single_text' component_type='text' id='$text_id1' component_id='$text_id1' style='$actualtext1_style'>$actualtext1</div>";
                                    $wraps .= "</div>";
                                    $wraps .= "<div>";
                                        $wraps .= "<div class='single_image'><img src='$imageurl2' class='actual_image' component_type='image' id='$image_id2' component_id='$image_id2' style='$actualimage2_style' /></div>";
                                        $wraps .= "<div class='single_text' component_type='text' id='$text_id2' component_id='$text_id2' style='$actualtext2_style'>$actualtext2</div>";
                                    $wraps .= "</div>";
                                    $wraps .= "<div>";
                                        $wraps .= "<div class='single_image'><img src='$imageurl3' class='actual_image' component_type='image' id='$image_id3' component_id='$image_id3' style='$actualimage3_style' /></div>";
                                        $wraps .= "<div class='single_text' component_type='text' id='$text_id3' component_id='$text_id3' style='$actualtext3_style'>$actualtext3</div>";
                                    $wraps .= "</div>";
                                $wraps .= "</div>";
                            }else{
                                $wraps .= "$componentdetails->component_type, ";
                            }
                        }
                    }

                    // return $wraps;
                    return response()->json([
                        'displayname' => $lonewolf_displayname,
                        'wraps' => $wraps,
                    ]);
                }
            }
        }elseif($request->owner == "load_all_page_components"){
            // pagesui
            // return "$request->pageowner; bumaiye!";
            $tabledb = "pagesui";

            $where_array = [
                'page_name' => $request->pageowner,
            ];
    
            $outcome = CrudHelper::Get($tabledb, $where_array);

            foreach($outcome as $outcome){
                if(empty($outcome->content)){
                    return "";
                }

                $content_array = json_decode($outcome->content, true);

                $page_content = "";

                foreach($content_array as $content_array){
                    $page_content .= "<div class='faux_link component_wraps_each' owner='$content_array' component_id='$content_array' dblclick_type='component_wraps'>$content_array</div>";
                }

                return $page_content;
            }
        }elseif($request->owner == "load_all_pages_for_current_website"){
            $tabledb = "pagesui";
    
            $outcome = CrudHelper::Geteverything($tabledb);

            $liststring = "";
            foreach($outcome as $outcome){
                if($outcome->page_name == "jumbotron" || $outcome->page_name == "homepage"){}else{
                    if(empty($outcome->display_page_name)){
                        $displayname_foruse = "$outcome->page_name";
                    }else{
                        $displayname_foruse = $outcome->display_page_name;
                    }
                    // $liststring .= "<a id='toggle_link_$outcome->page_name' href='/pages/construct/$outcome->page_name'>";
                    //     $liststring .= "<div class='dashboard-menu-each'>";
                    //         $liststring .= "<div class='dashboard-menu-iconwraps trigger_edit_pagename faux_link swap_icons_$outcome->page_name' owner='$outcome->page_name' display_owner='$outcome->display_page_name'><i class='fa-regular fa-pen-to-square'></i></div>";
                    //         $liststring .= "<div id='$outcome->page_name' class='swap_$outcome->page_name'>$displayname_foruse</div>";
                    //     $liststring .= "</div>";
                    // $liststring .= "</a>";
                    $liststring .= "<div class='page_list_each'>";
                        $liststring .= "<div id='$outcome->page_name' class='swap_$outcome->page_name'>$displayname_foruse</div>";
                        $liststring .= "<div class='page_list_each_action_wrap'>";
                            $liststring .= "<div><a id='toggle_link_$outcome->page_name' href='/pages/construct/$outcome->page_name'><i class='fa-solid fa-link'></i></a></div>";
                            $liststring .= "<div class='trigger_edit_pagename faux_link swap_icons_$outcome->page_name' owner='$outcome->page_name' display_owner='$outcome->display_page_name' style='text-align: right;'><i class='fa-regular fa-pen-to-square'></i></div>";
                        $liststring .= "</div>";
                    $liststring .= "</div>";
                }
            }

            return $liststring;
        }elseif($request->owner == "update_page_display_name"){
            $ownerid = $request->ownerid;
            $displayname = ucwords($request->new_displayname);

            $newdisplayname = trim($displayname); // removes whitespace from beginning and end
            $newpage_id = str_replace(" ", "", $displayname);

            $newpage_id = strtolower($newpage_id);

            $tabledb = "pagesui";

            $currenttime = Carbon::now();

            $where_array = [
                'page_name' => $ownerid,
            ];

            $update_array = [
                'page_name' => $newpage_id,
                'display_page_name' => $newdisplayname,
                'updated_at' => $currenttime,
            ];
    
            CrudHelper::Update($tabledb, $where_array, $update_array);

            // update all the ids in the ppagesui_component page
            $tabledb = "pagesui_component";

            // pagesui_id
            $where_array = [
                'pagesui_id' => $ownerid,
            ];

            $update_array = [
                'pagesui_id' => $newpage_id,
                'updated_at' => $currenttime,
            ];

            CrudHelper::Update($tabledb, $where_array, $update_array);

            // return "$ownerid; $displayname!";
            // whyfoursquare
            // 
            // return $newdisplayname;
            return response()->json([
                'newdisplayname' => $newdisplayname,
                'newpage_id' => $newpage_id,
            ]);
        }elseif($request->owner ==  "create_new_page_for_website"){
            $tabledb = "pagesui";

            $currenttime = Carbon::now();

            $page_faux_username = Str::random(10);

            $authorid = Auth::id();
    
            $create_array = [
                'author_id' => $authorid,
                'page_name' => $page_faux_username,
                'created_at' => $currenttime,
                'updated_at' => $currenttime,
            ];
    
            CrudHelper::Create($tabledb, $create_array);

            // return "package me!";
            // $liststring = "<a id='toggle_link_$page_faux_username' href='/pages/construct/$page_faux_username'>";
            //     $liststring .= "<div class='dashboard-menu-each'>";
            //         $liststring .= "<div class='dashboard-menu-iconwraps trigger_edit_pagename faux_link swap_icons_$page_faux_username' owner='$page_faux_username' display_owner='$page_faux_username'><i class='fa-regular fa-pen-to-square'></i></div>";
            //         $liststring .= "<div id='$page_faux_username' class='swap_$page_faux_username'>$page_faux_username</div>";
            //     $liststring .= "</div>";
            // $liststring .= "</a>";

            $liststring = "<div class='page_list_each'>";
                $liststring .= "<div id='$page_faux_username' class='swap_$page_faux_username'>$page_faux_username</div>";
                $liststring .= "<div class='page_list_each_action_wrap'>";
                    $liststring .= "<div><a id='toggle_link_$page_faux_username' href='/pages/construct/$page_faux_username'><i class='fa-solid fa-link'></i></a></div>";
                    $liststring .= "<div class='trigger_edit_pagename faux_link swap_icons_$page_faux_username' owner='$page_faux_username' display_owner='$page_faux_username' style='text-align: right;'><i class='fa-regular fa-pen-to-square'></i></div>";
                $liststring .= "</div>";
            $liststring .= "</div>";

            return $liststring;
        }elseif($request->owner ==  "update_text_content_buildjs"){
            // return "Babagana!";
            $tabledb = "pagesui_component_style";

            $currenttime = Carbon::now();

            $where_array = [
                'component_id' => $request->component_id,
            ];

            $update_array = [
                'content' => $request->content,
                'updated_at' => $currenttime,
            ];
    
            CrudHelper::Update($tabledb, $where_array, $update_array);

            return "$request->component_id---$request->content";
        }elseif($request->owner == "update_style_tobackend_buildjs"){
            // return "Omomo!";component_id
            $stylearray = [];

            if(!empty($request->thedisplay)){
                // array_push($stylearray, $request->gridgap);
                $stylearray['display'] = "grid";
            }
            
            if(!empty($request->gridgap) || $request->gridgap == 0){
                // array_push($stylearray, $request->gridgap);
                $stylearray['gap'] = $request->gridgap;
                // return "$request->gridgap; the gridgap!!!inner!";
            }

            if(!empty($request->template_columns)){
                // array_push($stylearray, $request->gridgap);
                $stylearray['grid-template-columns'] = $request->template_columns;
            }

            if(!empty($request->alignitems)){
                $stylearray['align-items'] = $request->alignitems;
            }

            if(!empty($request->justifycontent)){
                $stylearray['justify-content'] = $request->justifycontent;
            }

            // // border-top
            // $stylearray['border-top'] = $request->border_top;
            // // border-bottom
            // $stylearray['border-top'] = $request->border_btm;
            // // border-left
            // $stylearray['border-left'] = $request->border_btm;
            // // border-right
            // $stylearray['border-right'] = $request->border_ryt;
            // border-top-left-radius
                        //     'border-top' => $request->border_top,
            $stylearray['border-bottom'] = $request->border_btm;
            $stylearray['border-left'] = $request->border_lft;
            $stylearray['border-right'] = $request->border_ryt;
            $stylearray['border-top-left-radius'] = $request->brd_rdius_tp_lft;
            $stylearray['border-top-right-radius'] = $request->brd_rdius_tp_ryt;
            $stylearray['border-bottom-left-radius'] = $request->brd_rdius_btm_lft;
            $stylearray['border-bottom-right-radius'] = $request->brd_rdius_btm_ryt;
            $stylearray['margin-top'] = $request->margin_top;
            $stylearray['margin-right'] = $request->margin_right;
            $stylearray['margin-bottom'] = $request->margin_bottom;
            $stylearray['margin-left'] = $request->margin_left;
            $stylearray['padding-top'] = $request->padding_top;
            $stylearray['padding-right'] = $request->padding_right;
            $stylearray['padding-bottom'] = $request->padding_bottom;
            $stylearray['padding-left'] = $request->padding_left;
            $stylearray['font-size'] = $request->font_sizebuildjs;
            $stylearray['font-weight'] = $request->font_boldbuildjs;
            $stylearray['font-style'] = $request->font_italicsbuildjs;
            $stylearray['text-decoration'] = $request->font_underlinebuildjs;
            $stylearray['text-align'] = $request->textalign;
            $stylearray['background'] = $request->colorpicker;
            $stylearray['color'] = $request->color_text_picker;

            // $stylearray = [
            //     'border-top' => $request->border_top,
            //     'border-bottom' => $request->border_btm,
            //     'border-left' => $request->border_lft,
            //     'border-right' => $request->border_ryt,
            //     'border-top-left-radius' => $request->brd_rdius_tp_lft,
            //     'border-top-right-radius' => $request->brd_rdius_tp_ryt,
            //     'border-bottom-left-radius' => $request->brd_rdius_btm_lft,
            //     'border-bottom-right-radius' => $request->brd_rdius_btm_ryt,
            //     'margin-top' => $request->margin_top,
            //     'margin-right' => $request->margin_right,
            //     'margin-bottom' => $request->margin_bottom,
            //     'margin-left' => $request->margin_left,
            //     'padding-top' => $request->padding_top,
            //     'padding-right' => $request->padding_right,
            //     'padding-bottom' => $request->padding_bottom,
            //     'padding-left' => $request->padding_left,
            //     'font-size' => $request->font_sizebuildjs,
            //     'font-weight' => $request->font_boldbuildjs,
            //     'font-style' => $request->font_italicsbuildjs,
            //     'text-decoration' => $request->font_underlinebuildjs,
            //     'text-align' => $request->textalign,
            //     'background' => $request->colorpicker,
            //     'color' => $request->color_text_picker,
            // ];

            // return $request->thedisplay;

            // gridgap: gridgap,
            // template_columns: template_columns,
            // alignitems: alignitems,
            // justifycontent: justifycontent,

            // return $stylearray;
            $json_style = json_encode($stylearray);

            $tabledb = "pagesui_component_style";

            $currenttime = Carbon::now();

            $where_array = [
                'component_id' => $request->component_id,
            ];

            $update_array = [
                'style_content' => $json_style,
                'updated_at' => $currenttime,
            ];
    
            CrudHelper::Update($tabledb, $where_array, $update_array);
        }
    }

    // database_upload_image
    public function database_upload_image(Request $request)
    {
        // return "shaba!";
        // return $request->component_id;
        // return $request->owner;
        // text_background_image
        // return "bangini!";
        $request->validate([
            'file' => 'required|mimes:jpeg,png,jpg,bmp,gif,pdf|max:4024',
        ]);
        
        $authorid = Auth::id();
        $ownerid = $request->ownerid;
        $currenttime = Carbon::now();

        // if ($ownerid == "settings") {
        //     $idforuse = $authorid;
        // } else {
        //     $idforuse = $ownerid;
        // }

        $timestamp = time();
        $randomString = Str::random(10);
        $file = $request->file('file');
        $extension = $file->getClientOriginalExtension();
        $fileName = $randomString . $timestamp . '.' . $extension;
        $filePath = $file->storeAs('uploads', $fileName, 'public');
        $file->move(public_path('storage/uploads/'), $fileName);

        if($request->owner == "text_background_image"){
            // pagesui
            $tabledb = "pagesui_component_style";

            $where_array = [
                'component_id' => $request->component_id,
            ];

            $update_array = [
                'background_image' => $fileName,
                'updated_at' => $currenttime,
            ];

            CrudHelper::Update($tabledb, $where_array, $update_array);

            // get the style 
            $tabledb = "pagesui_component_style";

            $where_array = [
                'component_id' => $request->component_id,
            ];
    
            $outcome = CrudHelper::Get($tabledb, $where_array);

            foreach($outcome as $outcome){
                $stylearray = json_decode($outcome->style_content, true);
                $allstyles = "";
                $allstyles .= $this->load_all_styles_content($stylearray, $outcome->background_image);

                $allstyles = "$allstyles background-position: center;background-repeat: no-repeat;background-size: cover;";

                return $allstyles;
            }
        }elseif($request->owner == "image_component"){
            // return "$request->component_id; bride!";
            $tabledb = "pagesui_component_style";

            $where_array = [
                'component_id' => $request->component_id,
            ];

            $update_array = [
                'content' => $fileName,
                'updated_at' => $currenttime,
            ];

            CrudHelper::Update($tabledb, $where_array, $update_array);

            return "done!";
        }else{
            // pagesui
            $tabledb = "pagesui";

            $where_array = [
                'page_name' => "jumbotron",
            ];

            $update_array = [
                'mediafile1' => $fileName,
                'updated_at' => $currenttime,
            ];

            CrudHelper::Update($tabledb, $where_array, $update_array);
        }
    }

    private function load_all_styles_content($stylearray, $background_image)
    {
        $allstyles = "";
        if(!empty($stylearray)){
            foreach($stylearray as $key => $value){
                if($key == "font_size"){
                    $key = "font-size";
                }elseif($key == "font-weight"){
                    $key = "font-weight";

                    if($value == "0"){
                        $value = "normal";
                    }elseif($value == "1"){
                        $value = "bold";
                    }
                }elseif($key == "font-style"){
                    $key = "font-style";

                    if($value == "0"){
                        $value = "normal";
                    }elseif($value == "1"){
                        $value = "italic";
                    }
                }elseif($key == "text-decoration"){
                    $key = "text-decoration";

                    if($value == "0"){
                        $value = "none";
                    }elseif($value == "1"){
                        $value = "underline";
                    }
                }elseif($key == "text-align"){

                }

                if($key == "font-weight" || $key == "font-style" || $key == "text-decoration" || $key == "text-align" || $key == "background" || $key == "color" || $key == "border-top" || $key == "border-bottom" || $key == "border-left" || $key == "border-right" || $key == "display" || $key == "align-items" || $key == "justify-content"){
                    if($key == "background"){
                        if(!empty($background_image)){
                            $allstyles .= "$key: url(\"/storage/uploads/$background_image\");";
                        }else{
                            $allstyles .= "$key: $value;";
                        }
                    }else{
                        $allstyles .= "$key: $value;";
                    }
                }elseif($key == "padding-left" || $key == "padding-right" || $key == "gap"){
                    $allstyles .= "$key: $value"."%;";
                }elseif($key == "grid-template-columns"){
                    // grid-template-columns: 50 50px;
                    $template_array = explode(" ", $value);

                    $nwstring = "";
                    foreach($template_array as $template){
                        $nwstring .= "$template% ";
                    }

                    $nwstring = trim($nwstring);
                    $allstyles .= "$key: $nwstring".";";
                }else{
                    $allstyles .= "$key: $value"."px;";
                }
            }
        }

        return $allstyles;
    }

    private function create_component_style($id)
    {
        $tabledb = "pagesui_component_style";

        $currenttime = Carbon::now();

        $create_array = [
            'component_id' => $id,
            'created_at' => $currenttime,
            'updated_at' => $currenttime,
        ];

        CrudHelper::Create($tabledb, $create_array);
    }

    private function get_pagesui_component($id)
    {
        $tabledb = "pagesui_component";

        $where_array = [
            'component_id' => $id,
        ];

        return CrudHelper::Get($tabledb, $where_array);
    }

    // get_pagesui_content
    private function get_pagesui_content($id)
    {
        $tabledb = "pagesui_component_style";

        $where_array = [
            'component_id' => $id,
        ];

        return CrudHelper::Get($tabledb, $where_array);
    }

    // get_content_text
    private function get_content_text($id, $content_type, $ownertype)
    {
        $content_styles = $this->get_pagesui_content($id);

        foreach($content_styles as $content_styles){
            if($content_type == "text"){
                if(empty($content_styles->content)){
                    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
                }else{
                    return $content_styles->content;
                }
            }elseif($content_type == "style"){
                // return $content_styles->style_content;
                $stylearray = json_decode($content_styles->style_content, true);

                $allstyles = "";

                $allstyles .= $this->load_all_styles_content($stylearray, $content_styles->background_image);

                if(empty($allstyles)){
                    $allstyles = "";
                    if($ownertype == "single-text" || $ownertype == "single-image" || $ownertype == "single-image-text" || $ownertype == "single-text-image"){
                        $allstyles .= "display: grid;grid-template-columns: 100%;align-items: center;justify-content: center;";
                    }elseif($ownertype == "double-text-image" || $ownertype == "double-image-text" || $ownertype == "double-image_up-text_down" || $ownertype == "double-text_up-image_down"){
                        $allstyles .= "display: grid;grid-template-columns: 50% 50%;gap: 0%;align-items: center;justify-content: center;";
                    }elseif($ownertype == "tripple-text" || $ownertype == "tripple-image" || $ownertype == "tripple-text_up-image_down" || $ownertype == "tripple-image_up-text_down"){
                        $allstyles .= "display: grid;grid-template-columns: 32% 32% 32%;gap: 2%;align-items: center;justify-content: center;";
                    }

                    $allstyles .= "border-top: ;border-bottom: ;border-left: ;border-right: ;border-top-left-radius: 0px;border-top-right-radius: 0px;";
                    $allstyles .= "border-bottom-left-radius: 0px;border-bottom-right-radius: 0px;margin-top: 0px;margin-right: 0px;margin-bottom: 0px;";
                    $allstyles .= "margin-left: 0px;padding-top: 30px;padding-right: 30px;padding-bottom: 30px;padding-left: 30px;font-size: 10px;font-weight: normal;";
                    $allstyles .= "font-style: normal;text-decoration: none;text-align: left;background: #000000;color: #ffffff;";

                    // "background-position: center;background-repeat: no-repeat;background-size: cover;";
                }

                $allstyles = "$allstyles background-position: center;background-repeat: no-repeat;background-size: cover;";

                return $allstyles;
            }elseif($content_type == "image"){
                return $content_styles->content;
            }

            // return $textbody;
        }
    }
}
