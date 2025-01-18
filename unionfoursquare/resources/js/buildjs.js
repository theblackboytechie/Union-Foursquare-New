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

    // change textform_for_update to update the DOM
    $('body').on('keyup', "#textform_for_update", function() {
        var component_id = $(this).attr("component_id");
        console.log(component_id+": yo img!");
        var thevalue = $(this).val();
        $("#"+component_id).text(thevalue);
    });

    // margin_top
    $('body').on('change', ".change_style_attr", function() {
        // the id attribute to know if this is margin-top or padding-top
        var idattr = $(this).attr("id");

        if(idattr == "margin_top"){
            var cssowner = "margin-top";
        }else if(idattr == "margin_bottom"){
            var cssowner = "margin-bottom";
        }else if(idattr == "margin_left"){
            var cssowner = "margin-left";
        }else if(idattr == "margin_right"){
            var cssowner = "margin-right";
        }else if(idattr == "padding_top"){
            var cssowner = "padding-top";
        }else if(idattr == "padding_bottom"){
            var cssowner = "padding-bottom";
        }else if(idattr == "padding_left"){
            var cssowner = "padding-left";
        }else if(idattr == "padding_right"){
            var cssowner = "padding-right";
        }else if(idattr == "font_sizebuildjs"){
            var cssowner = "font-size";
        }

        var component_id = $("#textform_for_update").attr("component_id");
        var margin_top_value = $(this).val();

        var thestylestring = $("#"+component_id).attr("style");

        // this is to get the style array from the component
        var cssArray = convertstyle_to_array(thestylestring);

        var newstylestring = "";
        for (var key in cssArray) {
            if(key === cssowner){
                newstylestring += cssowner+": "+margin_top_value+"px; ";
                // alert(newstylestring+"   Xfont-size!");
            }else{
                newstylestring += key+": "+cssArray[key]+"; ";
            }
        }

        $("#"+component_id).attr("style", newstylestring);
    });

    // color_pickerbuildjs
    $('body').on('change', ".color_pickerbuildjs", function() {
        var theowner = $(this).attr("owner");
        // console.log(theowner+": color clicked!");
        // alert($(this).val()+"color clicked!");//return;
        var component_id = $("#textform_for_update").attr("component_id");
        
        var cssowner = theowner;
        var style_value = $(this).val();

        var thestylestring = $("#"+component_id).attr("style");
        // console.log(thestylestring+"; broooooooo!");return;
        // alert(component_id+"; booooom!");
        // this is to get the style array from the component
        var cssArray = convertstyle_to_array(thestylestring);
        console.log(cssArray+"; checker!");
        // alert(cssowner+": cssowner");return;
        var newstylestring = "";
        for (var key in cssArray) {
            if(key === cssowner){
                newstylestring += cssowner+": "+style_value+";";
            }else{
                newstylestring += key+": "+cssArray[key]+"; ";
            }
        }

        $("#"+component_id).attr("style", newstylestring);
    });

    // click to change
    $('body').on('click', ".change_style_attr", function() {
        var idattr = $(this).attr("id");//alert(idattr);return;
        // trigger_font_italicsbuildjs, trigger_font_underlinebuildjs
        var component_id = $("#textform_for_update").attr("component_id");

        // trigger_font_boldbuildjs
        if(idattr == "trigger_font_boldbuildjs"){
            var cssowner = "font-weight";
            var updated_value = $("#font_boldbuildjs").attr("value");
        
            if(updated_value == "0"){
                var style_value = "normal";
            }else if(updated_value == "1"){
                var style_value = "bold";
            }
        }else if(idattr == "trigger_font_italicsbuildjs"){
            var cssowner = "font-style";
            var updated_value = $("#font_italicsbuildjs").attr("value");
        
            if(updated_value == "0"){
                var style_value = "normal";
            }else if(updated_value == "1"){
                var style_value = "italic";
            }
        }else if(idattr == "trigger_font_underlinebuildjs"){
            var cssowner = "text-decoration";
            var updated_value = $("#font_underlinebuildjs").attr("value");
        
            if(updated_value == "0"){
                var style_value = "normal";
            }else if(updated_value == "1"){
                var style_value = "underline";
            }
        }else if(idattr == "trigger_textalign_buildjs"){
            var theowner = $(this).attr("owner");//alert(theowner+": theowner");return;
            var cssowner = "text-align";

            if(theowner == "left"){
                var updated_value = $("#font_left_alignbuildjs").attr("value");
                // alert(updated_value+": updated_value");return;
                if(updated_value == 1){
                    var style_value = "left";
                }
            }else if(theowner == "center"){
                var updated_value = $("#font_center_alignbuildjs").attr("value");
                // alert(updated_value+": updated_value");return;
                if(updated_value == 1){
                    var style_value = "center";
                }
            }else if(theowner == "right"){
                var updated_value = $("#font_right_alignbuildjs").attr("value");

                if(updated_value == 1){
                    var style_value = "right";
                }
            }
            // font_left_alignbuildjs
        }
        // trigger_textalign_buildjs, left, center, right

        var thestylestring = $("#"+component_id).attr("style");

        // this is to get the style array from the component
        var cssArray = convertstyle_to_array(thestylestring);

        var newstylestring = "";
        for (var key in cssArray) {
            if(key === cssowner){
                newstylestring += cssowner+": "+style_value+";";
            }else{
                newstylestring += key+": "+cssArray[key]+"; ";
            }
        }

        $("#"+component_id).attr("style", newstylestring);
    });

    // background_image_buildjs
    $('body').on('change', "#background_image_buildjs", function() {
        readURL(this);

        var idattr = $(this).attr("id");
        // trigger_font_italicsbuildjs, trigger_font_underlinebuildjs
        var component_id = $("#textform_for_update").attr("component_id");
        
        var file = event.target.files[0];

        var formData = new FormData();
        formData.append('file', file);
        formData.append('component_id', component_id);
        // console.log(formData);return;
    
        var url = window.location.href;
        var ownerid = url.substring(url.lastIndexOf('/') + 1);
        formData.append('ownerid', ownerid);

        var owner = "text_background_image";
        formData.append('owner', owner);
    
        var theurl = $("#union4sqmaps").attr("database_upload_image");

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        
        $.ajax({
            type: 'POST',
            url: theurl,
            data: formData,
            contentType: false,
            processData: false,
            success: function(response) {
                // $("#jumbotron_background_upload_processing").hide();
                // alert(response);
                console.log(response);
                $("#"+component_id).attr("style", response);
            },
            error: function(xhr, status, error) {
                // alert("major error!: "+xhr.responseText);
                $("#document-uploading-processing").hide();
                // console.log(xhr.responseText);
                $('#' + 'credentials_error_wraps').text(xhr.responseText);
                var errorResponse = JSON.parse(xhr.responseText);
                var errorMessage = errorResponse.message;
                var errors = errorResponse.errors;
            
                var errorHtml = '';
            
                // Display general error message
                errorHtml += '<p>' + errorMessage + '</p>';
            
                // Display field-specific errors
                $.each(errors, function(field, error) {
                    errorHtml += '<p>' + field + ': ' + error[0] + '</p>';
                });
            
                $('.' + 'credentials_error_wraps2').html(errorHtml);
    
                $("#profileimage-uploading-processing-loading").hide();
            }
        });
    });


    function readURL(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();
      
          reader.onload = function(e) {
            $('#background_image_thumbnail').attr('src', e.target.result);
          };
      
          reader.readAsDataURL(input.files[0]);
        }
    }

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
            textareaform += "<div class='update_text_button_wraps'><div><button id='update_text_button' class='update_text_button'>Update</button></div>";
            textareaform += "<div class='hidden toggle_processing_update_text'><i class='fa-solid fa-circle-notch fa-spin'></i></div></div>";

            textareaform += "<div style='margin-top: 10px;'><b>Text Style</b></div>";
                textareaform += "<div>Margin</div>";
                textareaform += "<div style='display: flex;gap: 10px;'>";
                    textareaform += "<div>Top<br><select class='input-form change_style_attr' id='margin_top' style='width: 100px;'>"+options+"</select></div>";
                    textareaform += "<div>Right<br><select class='input-form change_style_attr' id='margin_right' style='width: 100px;'>"+options+"</select></div>";
                textareaform += "</div>";
                textareaform += "<div style='display: flex;gap: 10px;'>";
                    textareaform += "<div>Bottom<br><select class='input-form change_style_attr' id='margin_bottom' style='width: 100px;'>"+options+"</select></div>";
                    textareaform += "<div>Left<br><select class='input-form change_style_attr' id='margin_left' style='width: 100px;'>"+options+"</select></div>";
                textareaform += "</div>";

                textareaform += "<div style='margin-top: 10px;'>Padding</div>";
                textareaform += "<div style='display: flex;gap: 10px;'>";
                    textareaform += "<div>Top<br><select class='input-form change_style_attr' id='padding_top' style='width: 100px;'>"+options+"</select></div>";
                    textareaform += "<div>Right<br><select class='input-form change_style_attr' id='padding_right' style='width: 100px;'>"+options+"</select></div>";
                textareaform += "</div>";
                textareaform += "<div style='display: flex;gap: 10px;'>";
                    textareaform += "<div>Bottom<br><select class='input-form change_style_attr' id='padding_bottom' style='width: 100px;'>"+options+"</select></div>";
                    textareaform += "<div>Left<br><select class='input-form change_style_attr' id='padding_left' style='width: 100px;'>"+options+"</select></div>";
                textareaform += "</div>";
                
                textareaform += "<div style='margin-top: 10px;'>Font Size</div>";
                textareaform += "<div style='display: flex;gap: 10px;'>";
                    textareaform += "<div><select class='input-form change_style_attr' id='font_sizebuildjs' style='width: 100px;'>"+options+"</select></div>";
                textareaform += "</div>";

                textareaform += "<div style='margin-top: 10px;'>Font Style</div>";
                textareaform += "<div style='display: flex;gap: 10px;'>";
                    textareaform += "<div class='text_alignment_buildjs boldbuildjs_wraps change_style_attr' id='trigger_font_boldbuildjs'><i class='fa-solid fa-bold' id='font_boldbuildjs' value='0'></i></div>";
                    textareaform += "<div class='text_alignment_buildjs italicsbuildjs_wraps change_style_attr' id='trigger_font_italicsbuildjs'><i class='fa-solid fa-italic' id='font_italicsbuildjs' value='0'></i></div>";
                    textareaform += "<div class='text_alignment_buildjs underlinebuildjs_wraps change_style_attr' id='trigger_font_underlinebuildjs'><i class='fa-solid fa-underline' id='font_underlinebuildjs' value='0'></i></div>";
                textareaform += "</div>";

                textareaform += "<div style='margin-top: 10px;'>Text Align</div>";
                textareaform += "<div style='display: flex;gap: 10px;'>";
                    textareaform += "<div class='text_alignment_buildjs leftalignbuildjs_wraps change_style_attr' id='trigger_textalign_buildjs' owner='left'><i class='fa-solid fa-align-left' id='font_left_alignbuildjs' value='0'></i></div>";
                    textareaform += "<div class='text_alignment_buildjs centeralignbuildjs_wraps change_style_attr' id='trigger_textalign_buildjs' owner='center'><i class='fa-solid fa-align-center' id='font_center_alignbuildjs' value='0'></i></div>";
                    textareaform += "<div class='text_alignment_buildjs rightalignbuildjs_wraps change_style_attr' id='trigger_textalign_buildjs' owner='right'><i class='fa-solid fa-align-right' id='font_right_alignbuildjs' value='0'></i></div>";
                textareaform += "</div>";

                textareaform += "<div style='margin-top: 10px;'>Background Color</div>";
                textareaform += "<div><input type='color' class='input-form color_pickerbuildjs' id='color_pickerbuildjs' owner='background' style='width: 95%;' /></div>";

                textareaform += "<div style='margin-top: 10px;'>Text Color</div>";
                textareaform += "<div><input type='color' class='input-form color_pickerbuildjs' id='color_text_pickerbuildjs' owner='color' style='width: 95%;' /></div>";

                textareaform += "<div style='margin-top: 10px;'>Background Image</div>";
                textareaform += "<div><input type='file' class='input-form' id='background_image_buildjs' style='width: 95%;' accept='.jpg, .jpeg, .png' /></div>";
                textareaform += "<div style='margin-top: 20px;width: 60%;'><img src='' id='background_image_thumbnail' /></div>";
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
                        $("#font_left_alignbuildjs").attr("value", 1);
                        $(".leftalignbuildjs_wraps").addClass("buildjs_selected_item");
                    }else if(cssArray[key] == "center"){
                        $("#font_center_alignbuildjs").attr("value", 1);
                        $(".centeralignbuildjs_wraps").addClass("buildjs_selected_item");
                    }else if(cssArray[key] == "right"){
                        $("#font_right_alignbuildjs").attr("value", 1);
                        $(".rightalignbuildjs_wraps").addClass("buildjs_selected_item");
                    }
                }else if(key === "background"){
                    if(cssArray[key].indexOf("/storage/uploads") !== -1){
                        // alert("background image!");
                    }else{
                        // alert("background color!");
                        $("#color_pickerbuildjs").val(cssArray[key]).trigger("change");
                    }
                }else if(key === "color"){
                    $("#color_text_pickerbuildjs").val(cssArray[key]).trigger("change");
                    // alert(cssArray[key]+"; yo!!!!!!!!!");
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

    function convertstyle_to_array(thestylestring) {
        var cssArray = thestylestring.split(";").reduce(function(acc, curr) {
            var parts = curr.trim().split(":");
            if (parts.length === 2) {
                var [key, value] = parts;
                acc[key.trim()] = value.trim();
            }
            return acc;
        }, {});

        return cssArray;
    }

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