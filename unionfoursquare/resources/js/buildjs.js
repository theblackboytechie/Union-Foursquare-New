$(document).ready(function() {
    // alert("on page load!");
    var urlPath = window.location.pathname;

    var path = urlPath.split("/");
    var secondToLast = path[path.length - 2];
    var thirdToLast = path[path.length - 3];
    var lastPara = path[path.length - 1];

    if(lastPara == "whyfoursquare"){
        var owner = "load_page_construct";

        var pageowner = "whyfoursquare";

        loadconstruct(owner, pageowner);

        // var formData = {
        //     owner: owner,
        //     pageowner: pageowner
        // };

        // var theurl = $("#union4sqmaps").attr("database_update");

        // updateDatabase(theurl, formData);
    }

    // toggle-page-componet-wraps
    $('body').on('click', '#toggle-page-componet-wraps', function() {
        $("#pages-components-wraps").toggle();
    });

    // font_boldbuildjs
    $('body').on('click', '#trigger_font_boldbuildjs', function() {
        var thevalue = $("#font_boldbuildjs").attr("value");
        if(thevalue == 0){
            $(".boldbuildjs_wraps").addClass("buildjs_selected_item");
            $("#font_boldbuildjs").attr("value", 1);
        }else{
            $(".boldbuildjs_wraps").removeClass("buildjs_selected_item");
            $("#font_boldbuildjs").attr("value", 0);
        }
    });

    // trigger_font_italicsbuildjs
    $('body').on('click', '#trigger_font_italicsbuildjs', function() {
        var thevalue = $("#font_italicsbuildjs").attr("value");
        
        if(thevalue == 0){
            $(".italicsbuildjs_wraps").addClass("buildjs_selected_item");
            $("#font_italicsbuildjs").attr("value", 1);
        }else{
            $(".italicsbuildjs_wraps").removeClass("buildjs_selected_item");
            $("#font_italicsbuildjs").attr("value", 0);
        }
    });

    // trigger_font_underlinebuildjs
    $('body').on('click', '#trigger_font_underlinebuildjs', function() {
        var thevalue = $("#font_underlinebuildjs").attr("value");
        
        if(thevalue == 0){
            $(".underlinebuildjs_wraps").addClass("buildjs_selected_item");
            $("#font_underlinebuildjs").attr("value", 1);
        }else{
            $(".underlinebuildjs_wraps").removeClass("buildjs_selected_item");
            $("#font_underlinebuildjs").attr("value", 0);
        }
    });

    // trigger_textalign_buildjs
    $('body').on('click', '#trigger_textalign_buildjs', function() {
        var theowner = $(this).attr("owner");

        if(theowner == "left"){
            var owner_value = "#font_left_alignbuildjs";
        }else if(theowner == "center"){
            var owner_value = "#font_center_alignbuildjs";
        }else if(theowner == "right"){
            var owner_value = "#font_right_alignbuildjs";
        }

        $("#font_left_alignbuildjs").attr("value", 0);
        $("#font_center_alignbuildjs").attr("value", 0);
        $("#font_right_alignbuildjs").attr("value", 0);

        $(".leftalignbuildjs_wraps").removeClass("buildjs_selected_item");
        $(".centeralignbuildjs_wraps").removeClass("buildjs_selected_item");
        $(".rightalignbuildjs_wraps").removeClass("buildjs_selected_item");

        var thevalue = $(owner_value).attr("value");
        
        if(thevalue == 0){            
            $(this).addClass("buildjs_selected_item");
            $(owner_value).attr("value", 1);
        }else{
            $(this).removeClass("buildjs_selected_item");
            $(owner_value).attr("value", 0);
        }
    });

    // 
    $('body').on('dblclick', "[component_type='image']", function() {
        alert("yo img!");
    });

    // 
    $('body').on('dblclick', "[component_type='text']", function() {
        $("#text_form_update").remove();
        $("#update_buildjs_style_button").remove();

        // get the style attribute from the tag
        var thestyle = $(this).attr("style");


        var component_id = $(this).attr("component_id");
        var text_Val = $(this).text();
        // alert("yo text!: "+component_id+"-----"+text_Val);
        var options = [];

        // Loop through numbers 1 to 99
        for (var i = 0; i <= 99; i++) {
            // Create a new option element and add it to the array
            options.push("<option value='" + i + "'>" + i + "</option>");
        }

        var textareaform = "<div id='text_form_update' style='height: 350px;overflow-y: scroll;'>";
            textareaform += "<b>Update Text</b>";
            textareaform += "<textarea class='input-form' id='textform_for_update' rows='5' component_id='"+component_id+"' style='width:95%;'>"+text_Val+"</textarea>";
            textareaform += "<button id='update_text_button' class='update_text_button'>Update</button>";

            textareaform += "<div style='margin-top: 10px;'><b>Text Style</b></div>";
                textareaform += "<div>Margin</div>";
                textareaform += "<div style='display: flex;gap: 10px;'>";
                    textareaform += "<div>Top<br><select class='input-form' id='margin_top' style='width: 100px;'>"+options+"</select></div>";
                    textareaform += "<div>Right<br><select class='input-form' id='margin_right' style='width: 100px;'>"+options+"</select></div>";
                textareaform += "</div>";
                textareaform += "<div style='display: flex;gap: 10px;'>";
                    textareaform += "<div>Bottom<br><select class='input-form' id='margin_bottom' style='width: 100px;'>"+options+"</select></div>";
                    textareaform += "<div>Left<br><select class='input-form' id='margin_left' style='width: 100px;'>"+options+"</select></div>";
                textareaform += "</div>";

                textareaform += "<div style='margin-top: 10px;'>Padding</div>";
                textareaform += "<div style='display: flex;gap: 10px;'>";
                    textareaform += "<div>Top<br><select class='input-form' id='padding_top' style='width: 100px;'>"+options+"</select></div>";
                    textareaform += "<div>Right<br><select class='input-form' id='padding_right' style='width: 100px;'>"+options+"</select></div>";
                textareaform += "</div>";
                textareaform += "<div style='display: flex;gap: 10px;'>";
                    textareaform += "<div>Bottom<br><select class='input-form' id='padding_bottom' style='width: 100px;'>"+options+"</select></div>";
                    textareaform += "<div>Left<br><select class='input-form' id='padding_left' style='width: 100px;'>"+options+"</select></div>";
                textareaform += "</div>";
                
                textareaform += "<div style='margin-top: 10px;'>Font Size</div>";
                textareaform += "<div style='display: flex;gap: 10px;'>";
                    textareaform += "<div><select class='input-form' id='font_sizebuildjs' style='width: 100px;'>"+options+"</select></div>";
                textareaform += "</div>";

                textareaform += "<div style='margin-top: 10px;'>Font Style</div>";
                textareaform += "<div style='display: flex;gap: 10px;'>";
                    textareaform += "<div class='text_alignment_buildjs boldbuildjs_wraps' id='trigger_font_boldbuildjs'><i class='fa-solid fa-bold' id='font_boldbuildjs' value='0'></i></div>";
                    textareaform += "<div class='text_alignment_buildjs italicsbuildjs_wraps' id='trigger_font_italicsbuildjs'><i class='fa-solid fa-italic' id='font_italicsbuildjs' value='0'></i></div>";
                    textareaform += "<div class='text_alignment_buildjs underlinebuildjs_wraps' id='trigger_font_underlinebuildjs'><i class='fa-solid fa-underline' id='font_underlinebuildjs' value='0'></i></div>";
                textareaform += "</div>";

                textareaform += "<div style='margin-top: 10px;'>Text Align</div>";
                textareaform += "<div style='display: flex;gap: 10px;'>";
                    textareaform += "<div class='text_alignment_buildjs leftalignbuildjs_wraps' id='trigger_textalign_buildjs' owner='left'><i class='fa-solid fa-align-left' id='font_left_alignbuildjs' value='0'></i></div>";
                    textareaform += "<div class='text_alignment_buildjs centeralignbuildjs_wraps' id='trigger_textalign_buildjs' owner='center'><i class='fa-solid fa-align-center' id='font_center_alignbuildjs' value='0'></i></div>";
                    textareaform += "<div class='text_alignment_buildjs rightalignbuildjs_wraps' id='trigger_textalign_buildjs' owner='right'><i class='fa-solid fa-align-right' id='font_right_alignbuildjs' value='0'></i></div>";
                textareaform += "</div>";
            textareaform += "</div>";
            textareaform += "<button id='update_buildjs_style_button' class='update_text_button' component_id='"+component_id+"'>Update Styles</button>";

        $(".pages-section-c-inner").prepend(textareaform);

        if (!thestyle) {
            // alert("empty!");
        }else{
            var cssArray = thestyle.split(";").reduce(function(acc, curr) {
                var parts = curr.trim().split(":");
                if (parts.length === 2) {
                    var [key, value] = parts;
                    acc[key.trim()] = value.trim();
                }
                return acc;
            }, {});
              
            // console.log(cssArray);

            // alert(cssArray);
            for (var key in cssArray) {
                if (
                    key === "margin-top" ||
                    key === "margin-bottom" ||
                    key === "margin-left" ||
                    key === "margin-right" ||
                    key === "padding-top" ||
                    key === "padding-right" ||
                    key === "padding-bottom" ||
                    key === "padding-left" ||
                    key === "font-size"
                ) {
                    var thevalue = parseInt(cssArray[key].replace("px", ""));
                    // alert(thevalue+": na margin-top be this!");
                    if(key === "margin-top"){
                        $("#margin_top").val(thevalue);
                    }else if(key === "margin-bottom"){
                        $("#margin_bottom").val(thevalue);
                    }else if(key === "margin-left"){
                        $("#margin_left").val(thevalue);
                    }else if(key === "margin-right"){
                        $("#margin_right").val(thevalue);
                    }else if(key === "padding-top"){
                        $("#padding_top").val(thevalue);
                    }else if(key === "padding-bottom"){
                        $("#padding_bottom").val(thevalue);
                    }else if(key === "padding-left"){
                        $("#padding_left").val(thevalue);
                    }else if(key === "padding-right"){
                        $("#padding_right").val(thevalue);
                    }else if(key === "font-size"){
                        $("#font_sizebuildjs").val(thevalue);
                    }
                }else if(key === "font-weight"){
                    if(cssArray[key] == "bold"){
                        $(".boldbuildjs_wraps").addClass("buildjs_selected_item");
                        $("#font_boldbuildjs").attr("value", 1);
                    }
                }else if(key === "font-style"){
                    if(cssArray[key] == "italic"){
                        $(".italicsbuildjs_wraps").addClass("buildjs_selected_item");
                        $("#font_italicsbuildjs").attr("value", 1);
                    }
                }else if(key === "text-decoration"){
                    if(cssArray[key] == "underline"){
                        $(".underlinebuildjs_wraps").addClass("buildjs_selected_item");
                        $("#font_underlinebuildjs").attr("value", 1);
                    }
                }else if(key === "text-align"){
                    if(cssArray[key] == "left"){
                        $("#font_boldbuildjs").attr("value", 1);
                        $(".leftalignbuildjs_wraps").addClass("buildjs_selected_item");
                    }else if(cssArray[key] == "center"){
                        $("#font_center_alignbuildjs").attr("value", 1);
                        $(".centeralignbuildjs_wraps").addClass("buildjs_selected_item");
                    }else if(cssArray[key] == "right"){
                        $("#font_boldbuildjs").attr("value", 1);
                        $(".rightalignbuildjs_wraps").addClass("buildjs_selected_item");
                    }
                }
            }
        }
    });

    // construct the components
    $('body').on('click', '.select-component', function() {
        $(".components_create_processing").show();

        var owner = $(this).attr("owner");
        var pageowner = "whyfoursquare";

        var formData = {
            owner: owner,
            pageowner: pageowner
        };

        var theurl = $("#union4sqmaps").attr("database_update");

        updateDatabase(theurl, formData);
    });

    function loadconstruct(owner, pageowner) {
        var formData = {
            owner: owner,
            pageowner: pageowner
        };

        var theurl = $("#union4sqmaps").attr("database_update");

        updateDatabase(theurl, formData);
    }

    function updateDatabase(theurl, formData) {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            type: 'POST',
            url: theurl,
            data: formData,
            success: function (response) {
                if(formData.owner == "load_page_construct"){
                    // alert(response);
                    $("#uploaded-pages-component-wraps").html(response);
                }else{
                    // var owner = "load_page_construct";

                    // var pageowner = "whyfoursquare";
            
                    // var formData = {
                    //     owner: owner,
                    //     pageowner: pageowner
                    // };
            
                    // var theurl = $("#union4sqmaps").attr("database_update");
            
                    // updateDatabase(theurl, formData);

                    // var constt = make_component(formData.owner);

                    // $("#uploaded-pages-component-wraps").prepend(constt);

                    var owner = "load_page_construct";

                    var pageowner = "whyfoursquare";
            
                    loadconstruct(owner, pageowner);
                    
                    $("#pages-components-wraps").hide();
            
                    $(".components_create_processing").hide();
                }
            },
            error: function(response) {
                // alert(response);
                // forms_id
                // owner applet_id
            }
        });
    }

    function make_component(owner) {
        if(owner == "single-text"){
            return "<div class='single_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>";
        }else if(owner == "single-image"){
            return "<div class='single_image'><img src='http://127.0.0.1:8000/storage/assets/images/placeholder.jpg' class='actual_image' /></div>";
        }else if(owner == "single-image-text"){
            var wraps = "<div>";
                    wraps += "<div class='single_image'><img src='http://127.0.0.1:8000/storage/assets/images/placeholder.jpg' class='actual_image' /></div>";
                    wraps += "<div class='single_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>";
                wraps += "</div>";
            return wraps;
        }else if(owner == "single-text-image"){
            var wraps = "<div>";
                    wraps += "<div class='single_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>";
                    wraps += "<div class='single_image'><img src='http://127.0.0.1:8000/storage/assets/images/placeholder.jpg' class='actual_image' /></div>";
                wraps += "</div>";
            return wraps;
        }else if(owner == "double-text-image"){
            var wraps = "<div class='double_grid'>";
                    wraps += "<div class='single_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>";
                    wraps += "<div class='single_image'><img src='http://127.0.0.1:8000/storage/assets/images/placeholder.jpg' class='actual_image' /></div>";
                wraps += "</div>";
            return wraps;
        }else if(owner == "double-image-text"){
            var wraps = "<div class='double_grid'>";
                    wraps += "<div class='single_image'><img src='http://127.0.0.1:8000/storage/assets/images/placeholder.jpg' class='actual_image' /></div>";
                    wraps += "<div class='single_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>";
                wraps += "</div>";
            return wraps;
        }else if(owner == "double-image_up-text_down"){
            var wraps = "<div class='double_grid'>";
                wraps += "<div>";
                    wraps += "<div class='single_image'><img src='http://127.0.0.1:8000/storage/assets/images/placeholder.jpg' class='actual_image' /></div>";
                    wraps += "<div class='single_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>";
                wraps += "</div>";
                wraps += "<div>";
                    wraps += "<div class='single_image'><img src='http://127.0.0.1:8000/storage/assets/images/placeholder.jpg' class='actual_image' /></div>";
                    wraps += "<div class='single_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>";
                wraps += "</div>";
            return wraps;
        }else if(owner == "double-text_up-image_down"){
            var wraps = "<div class='double_grid'>";
                wraps += "<div>";
                    wraps += "<div class='single_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>";
                    wraps += "<div class='single_image'><img src='http://127.0.0.1:8000/storage/assets/images/placeholder.jpg' class='actual_image' /></div>";
                wraps += "</div>";
                wraps += "<div>";
                    wraps += "<div class='single_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>";
                    wraps += "<div class='single_image'><img src='http://127.0.0.1:8000/storage/assets/images/placeholder.jpg' class='actual_image' /></div>";
                wraps += "</div>";
            return wraps;
        }else if(owner == "tripple-text"){
            var wraps = "<div class='tripple_grid'>";
                    wraps += "<div class='single_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>";
                    wraps += "<div class='single_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>";
                    wraps += "<div class='single_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>";
                wraps += "</div>";
            return wraps;
        }else if(owner == "tripple-image"){
            var wraps = "<div class='tripple_grid'>";
                    wraps += "<div class='single_image'><img src='http://127.0.0.1:8000/storage/assets/images/placeholder.jpg' class='actual_image' /></div>";
                    wraps += "<div class='single_image'><img src='http://127.0.0.1:8000/storage/assets/images/placeholder.jpg' class='actual_image' /></div>";
                    wraps += "<div class='single_image'><img src='http://127.0.0.1:8000/storage/assets/images/placeholder.jpg' class='actual_image' /></div>";
                wraps += "</div>";
            return wraps;
        }else if(owner == "tripple-text_up-image_down"){
            var wraps = "<div class='tripple_grid'>";
                    wraps += "<div>";
                        wraps += "<div class='single_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>";
                        wraps += "<div class='single_image'><img src='http://127.0.0.1:8000/storage/assets/images/placeholder.jpg' class='actual_image' /></div>";
                    wraps += "</div>";
                    wraps += "<div>";
                        wraps += "<div class='single_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>";
                        wraps += "<div class='single_image'><img src='http://127.0.0.1:8000/storage/assets/images/placeholder.jpg' class='actual_image' /></div>";
                    wraps += "</div>";
                    wraps += "<div>";
                        wraps += "<div class='single_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>";
                        wraps += "<div class='single_image'><img src='http://127.0.0.1:8000/storage/assets/images/placeholder.jpg' class='actual_image' /></div>";
                    wraps += "</div>";
                wraps += "</div>";
            return wraps;
        }else if(owner == "tripple-image_up-text_down"){
            var wraps = "<div class='tripple_grid'>";
                    wraps += "<div>";
                        wraps += "<div class='single_image'><img src='http://127.0.0.1:8000/storage/assets/images/placeholder.jpg' class='actual_image' /></div>";
                        wraps += "<div class='single_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>";
                    wraps += "</div>";
                    wraps += "<div>";
                        wraps += "<div class='single_image'><img src='http://127.0.0.1:8000/storage/assets/images/placeholder.jpg' class='actual_image' /></div>";
                        wraps += "<div class='single_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>";
                    wraps += "</div>";
                    wraps += "<div>";
                        wraps += "<div class='single_image'><img src='http://127.0.0.1:8000/storage/assets/images/placeholder.jpg' class='actual_image' /></div>";
                        wraps += "<div class='single_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>";
                    wraps += "</div>";
                wraps += "</div>";
            return wraps;
        }else{
            return "";
        }
    }
});