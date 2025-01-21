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

        // load_all_page_components
        var owner = "load_all_page_components";

        loadconstruct(owner, pageowner);
    }

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

    // component_wraps_each
    // $('body').on('dblclick', ".component_wraps_each", function() {
    //     var owner = $(this).attr("owner");
    //     alert(owner);
    // });

    // 
    $('body').on('dblclick', "[component_type='image']", function() {
        $("#text_form_update").remove();
        $("#update_buildjs_style_button").remove();
        // alert("jambite!");
        // return;
        // get the style attribute from the tag
        var thestyle = $(this).attr("style");

        var component_id = $(this).attr("component_id");//alert(thestyle);

        var options = [];

        // Loop through numbers 1 to 99
        for (var i = 0; i <= 99; i++) {
            // Create a new option element and add it to the array
            options.push("<option value='" + i + "'>" + i + "</option>");
        }
        
        var textareaform = "<div id='text_form_update' style='height: 350px;overflow-y: scroll;'>";
                textareaform += "<b id='textform_for_update' component_id='"+component_id+"'>Update Image</b>";
                textareaform += "<input type='file' class='input-form' id='imageform_for_update' component_id='"+component_id+"' style='width:95%;' accept='.jpg, .jpeg, .png' />";
                textareaform += "<div class='hidden toggle_processing_update_text'><i class='fa-solid fa-circle-notch fa-spin'></i></div>";

                textareaform += "<div style='margin-top: 10px;'><b>Padding Style</b></div>";
                textareaform += "<div>Padding</div>";
                textareaform += "<div style='display: flex;gap: 10px;'>";
                    textareaform += "<div>Top<br><select class='input-form change_style_attr' id='padding_top' style='width: 100px;'>"+options+"</select></div>";
                    textareaform += "<div>Right<br><select class='input-form change_style_attr' id='padding_right' style='width: 100px;'>"+options+"</select></div>";
                textareaform += "</div>";
                textareaform += "<div style='display: flex;gap: 10px;'>";
                    textareaform += "<div>Bottom<br><select class='input-form change_style_attr' id='padding_bottom' style='width: 100px;'>"+options+"</select></div>";
                    textareaform += "<div>Left<br><select class='input-form change_style_attr' id='padding_left' style='width: 100px;'>"+options+"</select></div>";
                textareaform += "</div>";

                textareaform += "<div style='margin-top: 10px;'><b>Border Radius</b></div>";
                textareaform += "<div style='display: flex;gap: 10px;'><div>Top Left<br><select class='input-form change_style_attr' id='border_radius_top_left' style='width: 100px;'>"+options+"</select></div>";
                textareaform += "<div>Top Right<br><select class='input-form change_style_attr' id='border_radius_top_right' style='width: 100px;'>"+options+"</select></div></div>";

                textareaform += "<div style='display: flex;gap: 10px;'><div>Bottom Left<br><select class='input-form change_style_attr' id='border_radius_bottom_left' style='width: 100px;'>"+options+"</select></div>";
                textareaform += "<div>Bottom Right<br><select class='input-form change_style_attr' id='border_radius_bottom_right' style='width: 100px;'>"+options+"</select></div></div>";
            textareaform += "</div>";
            textareaform += "<button id='update_buildjs_style_button' owner='image' class='update_text_button' component_id='"+component_id+"'>Update Styles</button> <span class='hidden toggle_processing_update_style'><i class='fa-solid fa-circle-notch fa-spin'></i></span>";

        // $(".pages-section-c-inner").html(textareaform);
        $(".dashboard-menu-content").html(textareaform);

        if (!thestyle) {
            // alert("empty!");
        }else{
            // 
            var cssArray = thestyle.split(";").reduce(function(acc, curr) {
                var parts = curr.trim().split(":");
                if (parts.length === 2) {
                    var [key, value] = parts;
                    acc[key.trim()] = value.trim();
                }
                return acc;
            }, {});
            
            for (var key in cssArray) {
                if (
                    key === "border-top-left-radius" ||
                    key === "border-top-right-radius" ||
                    key === "border-bottom-left-radius" ||
                    key === "border-bottom-right-radius" ||
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
                    if(key === "border-top-left-radius"){
                        // alert(thevalue+" border-top-left-radius");, , border_radius_bottom_right
                        $("#border_radius_top_left").val(thevalue);
                    }else if(key === "border-top-right-radius"){
                        $("#border_radius_top_right").val(thevalue);
                    }else if(key === "border-bottom-left-radius"){
                        $("#border_radius_bottom_left").val(thevalue);
                    }else if(key === "border-bottom-right-radius"){
                        $("#border_radius_bottom_right").val(thevalue);
                    }else if(key === "margin-top"){
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
                }else if(key === "border-top"){
                    var mrgn_tp_array = cssArray[key].split(" ");

                    $.each(mrgn_tp_array, function(index, value){
                        if(index === 0){
                            var thevalue = parseInt(value.replace("px", ""));
                            $("#border_top_width").val(thevalue);
                            // alert(value+"---"+thevalue+"; the last index");border_top_type
                        }else if(index === 1){
                            $("#border_top_type").val(value);
                        }else if(index === 2){
                            $("#border_top_color_pickerbuildjs").val(value);
                        }
                    });
                }else if(key === "border-bottom"){
                    var mrgn_tp_array = cssArray[key].split(" ");

                    $.each(mrgn_tp_array, function(index, value){
                        if(index === 0){
                            var thevalue = parseInt(value.replace("px", ""));
                            $("#border_bottom_width").val(thevalue);
                            // alert(value+"---"+thevalue+"; the last index");border_bottom_type
                        }else if(index === 1){
                            $("#border_bottom_type").val(value);
                        }else if(index === 2){
                            $("#border_bottom_color_pickerbuildjs").val(value);
                        }
                    });
                }else if(key === "border-left"){
                    var mrgn_tp_array = cssArray[key].split(" ");

                    $.each(mrgn_tp_array, function(index, value){
                        if(index === 0){
                            var thevalue = parseInt(value.replace("px", ""));
                            $("#border_left_width").val(thevalue);
                            // alert(value+"---"+thevalue+"; the last index");border_left_type
                        }else if(index === 1){
                            $("#border_left_type").val(value);
                        }else if(index === 2){
                            $("#border_left_color_pickerbuildjs").val(value);
                        }
                    });
                }else if(key === "border-right"){
                    var mrgn_tp_array = cssArray[key].split(" ");

                    $.each(mrgn_tp_array, function(index, value){
                        if(index === 0){
                            var thevalue = parseInt(value.replace("px", ""));
                            $("#border_right_width").val(thevalue);
                            // alert(value+"---"+thevalue+"; the last index");border_right_type
                        }else if(index === 1){
                            $("#border_right_type").val(value);
                        }else if(index === 2){
                            $("#border_right_color_pickerbuildjs").val(value);
                        }
                    });
                }
            }
        }
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
        var idattr = $(this).attr("id");//alert(idattr+"; oooooooo");
        // return;

        var tpwdth = $("#border_top_width").val();
        var tptype = $("#border_top_type").val();
        var tpcolr = $("#border_top_color_pickerbuildjs").val();

        var brdtp = tpwdth+"px "+tptype+" "+tpcolr;

        var btmwdth = $("#border_bottom_width").val();
        var btmtype = $("#border_bottom_type").val();
        var btmcolr = $("#border_bottom_color_pickerbuildjs").val();

        var brdbtm = btmwdth+"px "+btmtype+" "+btmcolr;

        var blftwdth = $("#border_left_width").val();
        var blfttype = $("#border_left_type").val();
        var blftcolr = $("#border_left_color_pickerbuildjs").val();

        var brdblft = blftwdth+"px "+blfttype+" "+blftcolr;

        var rightwdth = $("#border_right_width").val();
        var righttype = $("#border_right_type").val();
        var rightcolr = $("#border_right_color_pickerbuildjs").val();//alert(rightcolr+"; right color!");

        var brdright = rightwdth+"px "+righttype+" "+rightcolr;

        if(idattr == "border_radius_top_left"){
            var cssowner = "border-top-left-radius";
        }else if(idattr == "border_radius_top_right"){
            var cssowner = "border-top-right-radius";
        }else if(idattr == "border_radius_bottom_left"){
            var cssowner = "border-bottom-left-radius";
        }else if(idattr == "border_radius_bottom_right"){
            var cssowner = "border-bottom-right-radius";
        }else if(idattr == "margin_top"){
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
        
        // alert(idattr+"---"+cssowner+"; cssowner!");

        var component_id = $("#textform_for_update").attr("component_id");
        
        // for component wraps the component_id will be undefined. 
        // if undefined source the component id from somewher else
        if(component_id == undefined){
            // alert("this is undefined!"); id='text_form_update' check_for_component_id='"+component_id+"'
            var component_id = $("#text_form_update").attr("check_for_component_id");
        }
        // alert(component_id);
        var margin_top_value = $(this).val();

        var thestylestring = $("#"+component_id).attr("style");
        // alert(component_id+"___component_id");
        // alert(thestylestring+"; style attribute");//return;

        // this is to get the style array from the component
        var cssArray = convertstyle_to_array(thestylestring);

        var newstylestring = "";
        for (var key in cssArray) {
            if(key === cssowner){
                // alert(key+"___"+cssowner);
                newstylestring += cssowner+": "+margin_top_value+"px; ";
                // newstylestring += "border-top: "+cssArray[key]+"; ";
            }else if(key === "border-top"){
                newstylestring += key+": "+brdtp+"; ";
            }else if(key === "border-bottom"){
                newstylestring += key+": "+brdbtm+"; ";
            }else if(key === "border-left"){
                newstylestring += key+": "+brdblft+"; ";
            }else if(key === "border-right"){
                newstylestring += key+": "+brdright+"; ";
            }else{
                newstylestring += key+": "+cssArray[key]+"; ";
            }
        }
        // alert(component_id+"; final destination!; "+newstylestring);
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
    $('body').on('change', "#background_image_buildjs, #imageform_for_update", function() {
        // alert("do the calms!");
        
        // return;

        var idattr = $(this).attr("id");//alert(idattr+"; idattr");

        var formData = new FormData();

        // alert(idattr+"; idattr");
        // return;
        if(idattr == "imageform_for_update"){
            var owner = "image_component";
            formData.append('owner', owner);

            var component_id = $(this).attr("component_id");
            // alert(component_id);return;
            readURL2(this, component_id);
        }else{
            readURL(this);
            var owner = "text_background_image";
            formData.append('owner', owner);

            var component_id = $("#textform_for_update").attr("component_id");

            if(component_id == undefined){
                // alert("this is undefined!"); id='text_form_update' check_for_component_id='"+component_id+"'
                var component_id = $("#text_form_update").attr("check_for_component_id");
            }

            // alert(component_id+ "; ororo!");
            // return;
        }
        // trigger_font_italicsbuildjs, trigger_font_underlinebuildjs
        
        var file = event.target.files[0];

        formData.append('file', file);
        formData.append('component_id', component_id);
    
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
                if(owner == "image_component"){
                    console.log(response+"; ooooomooooooooooooo!");
                    // $("#"+component_id).attr("style", response);
                }else{
                    console.log(response+"; eeeeeeeeeee");
                    $("#"+component_id).attr("style", response);
                }
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

    // readURL(this);
    function readURL2(input, component_id) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();
      
          reader.onload = function(e) {
            $('#'+component_id).attr('src', e.target.result);
          };
      
          reader.readAsDataURL(input.files[0]);
        }
    }

    // 
    $('body').on('dblclick', "[component_type='text'], .component_wraps_each", function() {
        $("#text_form_update").remove();
        $("#update_buildjs_style_button").remove();

        // dblclick_type='component_wraps'
        var dblclick_type = $(this).attr("dblclick_type");
        // alert(dblclick_type+"; dblclick_type");
        // return;

        var component_id = $(this).attr("component_id");//alert(component_id);

        // get the style attribute from the tag
        var thestyle = $(this).attr("style");

        if(thestyle == undefined){
            var thestyle = $("#"+component_id).attr("style");
        }
        // alert(thestyle+"; thestyle");return;

        var text_Val = $(this).text();
        // alert("yo text!: "+component_id+"-----"+text_Val);
        var options = [];

        // Loop through numbers 1 to 99
        for (var i = 0; i <= 99; i++) {
            // Create a new option element and add it to the array
            options.push("<option value='" + i + "'>" + i + "</option>");
        }

        // alert(component_id+"; jambite!");
        // return;
        var bordertypes = [
            "<option value='solid'>solid</option>", 
            "<option value='dotted'>dotted</option>", 
            "<option value='dashed'>dashed</option>", 
            "<option value='double'>double</option>"
        ];

        var textareaform = "<div id='text_form_update' check_for_component_id='"+component_id+"' style='height: 350px;overflow-y: scroll;'>";
            if(dblclick_type == undefined){
                textareaform += "<b>Update Text</b>";
                textareaform += "<textarea class='input-form' id='textform_for_update' rows='5' component_id='"+component_id+"' style='width:95%;'>"+text_Val+"</textarea>";
                textareaform += "<div class='update_text_button_wraps'><div><button id='update_text_button' class='update_text_button'>Update</button></div>";
                textareaform += "<div class='hidden toggle_processing_update_text'><i class='fa-solid fa-circle-notch fa-spin'></i></div></div>";
            }else if(dblclick_type == "component_wraps"){
                var typeof_wraps = $("#"+component_id).attr("component_wraps_type");

                textareaform += "<b>Grid Style</b>";
                // textareaform += "";
                if(typeof_wraps == "single_type"){
                    textareaform += "<div>Single Type</div>";
                    textareaform += "<div></div>";
                }else if(typeof_wraps == "double_type"){
                    textareaform += "<div style='display: flex;gap: 10px;'>";
                        textareaform += "<div>Grid Width<br><select class='input-form change_style_attr' id='first_grid_width' style='width: 100px;'>"+options+"</select></div>";
                        textareaform += "<div>Grid Width<br><select class='input-form change_style_attr' id='second_grid_width' style='width: 100px;'>"+options+"</select></div>";
                    textareaform += "</div>";
                    textareaform += "<div style='display: flex;gap: 10px;'>";
                        textareaform += "<div>Gap<br><select class='input-form change_style_attr' id='first_grid_width' style='width: 100px;'>"+options+"</select></div>";
                    textareaform += "</div>";
                }else if(typeof_wraps == "tripple_type"){
                    // 
                    textareaform += "<div style='display: flex;gap: 10px;'>";
                        textareaform += "<div>Grid Width<br><select class='input-form change_style_attr' id='first_grid_width' style='width: 100px;'>"+options+"</select></div>";
                        textareaform += "<div>Grid Width<br><select class='input-form change_style_attr' id='second_grid_width' style='width: 100px;'>"+options+"</select></div>";
                    textareaform += "</div>";
                    textareaform += "<div style='display: flex;gap: 10px;'>";
                        textareaform += "<div>Grid Width<br><select class='input-form change_style_attr' id='third_grid_width' style='width: 100px;'>"+options+"</select></div>";
                    textareaform += "</div>";
                    textareaform += "<div style='display: flex;gap: 10px;'>";
                        textareaform += "<div>Gap<br><select class='input-form change_style_attr' id='first_grid_width' style='width: 100px;'>"+options+"</select></div>";
                    textareaform += "</div>";
                }

                textareaform += "<div style='display: flex;gap: 10px;'>";
                    textareaform += "<div style='width: 95%;'>Align Items<br><select class='input-form change_style_attr' id='first_grid_width' style='width: 100%;'>"+options+"</select></div>";
                textareaform += "</div>";
                textareaform += "<div style='display: flex;gap: 10px;'>";
                    textareaform += "<div style='width: 95%;'>Justify Content<br><select class='input-form change_style_attr' id='second_grid_width' style='width: 100%;'>"+options+"</select></div>";
                textareaform += "</div>";
                textareaform += "<div class='update_text_button_wraps'><div><button id='update_text_button' class='update_text_button'>Update Grid Style</button></div></div>";
            }

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

                textareaform += "<div style='margin-top: 10px;'><b>Border Top</b></div>";
                textareaform += "<div style='display: flex;gap: 10px;'>";
                    textareaform += "<div>Width<br><select class='input-form change_style_attr' id='border_top_width' style='width: 100px;'>"+options+"</select></div>";
                    textareaform += "<div>Type<br><select class='input-form change_style_attr' id='border_top_type' style='width: 100px;'>"+bordertypes+"</select></div>";
                textareaform += "</div>";
                textareaform += "<div style='display: flex;gap: 10px;'>";
                    textareaform += "<div>Color<br><input type='color' class='input-form change_style_attr' id='border_top_color_pickerbuildjs' owner='color' style='width: 105%;background: blue;' /></div>";
                textareaform += "</div>";

                textareaform += "<div style='margin-top: 10px;'><b>Border Bottom</b></div>";
                textareaform += "<div style='display: flex;gap: 10px;'>";
                    textareaform += "<div>Width<br><select class='input-form change_style_attr' id='border_bottom_width' style='width: 100px;'>"+options+"</select></div>";
                    textareaform += "<div>Type<br><select class='input-form change_style_attr' id='border_bottom_type' style='width: 100px;'>"+bordertypes+"</select></div>";
                textareaform += "</div>";
                textareaform += "<div style='display: flex;gap: 10px;'>";
                    textareaform += "<div>Color<br><input type='color' class='input-form change_style_attr' id='border_bottom_color_pickerbuildjs' owner='color' style='width: 105%;background: blue;' /></div>";
                textareaform += "</div>";

                textareaform += "<div style='margin-top: 10px;'><b>Border Left</b></div>";
                textareaform += "<div style='display: flex;gap: 10px;'>";
                    textareaform += "<div>Width<br><select class='input-form change_style_attr' id='border_left_width' style='width: 100px;'>"+options+"</select></div>";
                    textareaform += "<div>Type<br><select class='input-form change_style_attr' id='border_left_type' style='width: 100px;'>"+bordertypes+"</select></div>";
                textareaform += "</div>";
                textareaform += "<div style='display: flex;gap: 10px;'>";
                    textareaform += "<div>Color<br><input type='color' class='input-form change_style_attr' id='border_left_color_pickerbuildjs' owner='color' style='width: 105%;background: blue;' /></div>";
                textareaform += "</div>";

                textareaform += "<div style='margin-top: 10px;'><b>Border Right</b></div>";
                textareaform += "<div style='display: flex;gap: 10px;'>";
                    textareaform += "<div>Width<br><select class='input-form change_style_attr' id='border_right_width' style='width: 100px;'>"+options+"</select></div>";
                    textareaform += "<div>Type<br><select class='input-form change_style_attr' id='border_right_type' style='width: 100px;'>"+bordertypes+"</select></div>";
                textareaform += "</div>";
                textareaform += "<div style='display: flex;gap: 10px;'>";
                    textareaform += "<div>Color<br><input type='color' class='input-form change_style_attr' id='border_right_color_pickerbuildjs' owner='color' style='width: 105%;background: blue;' /></div>";
                textareaform += "</div>";

                textareaform += "<div style='margin-top: 10px;'><b>Border Radius</b></div>";
                textareaform += "<div style='display: flex;gap: 10px;'><div>Top Left<br><select class='input-form change_style_attr' id='border_radius_top_left' style='width: 100px;'>"+options+"</select></div>";
                textareaform += "<div>Top Right<br><select class='input-form change_style_attr' id='border_radius_top_right' style='width: 100px;'>"+options+"</select></div></div>";

                textareaform += "<div style='display: flex;gap: 10px;'><div>Bottom Left<br><select class='input-form change_style_attr' id='border_radius_bottom_left' style='width: 100px;'>"+options+"</select></div>";
                textareaform += "<div>Bottom Right<br><select class='input-form change_style_attr' id='border_radius_bottom_right' style='width: 100px;'>"+options+"</select></div></div>";

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
            textareaform += "<button id='update_buildjs_style_button' owner='text' class='update_text_button' component_id='"+component_id+"'>Update Styles</button> <span class='hidden toggle_processing_update_style'><i class='fa-solid fa-circle-notch fa-spin'></i></span>";

        // $(".pages-section-c-inner").prepend(textareaform);
        $(".dashboard-menu-content").html(textareaform);
        // alert("prepended!; "+thestyle);

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
            console.log(thestyle);
            alert(thestyle);

            // alert(cssArray);
            // return;
            for (var key in cssArray) {
                console.log(key+": ooo");
                if(key === "background"){
                    alert("color detected!");
                }
                if (
                    key === "border-top-left-radius" ||
                    key === "border-top-right-radius" ||
                    key === "border-bottom-left-radius" ||
                    key === "border-bottom-right-radius" ||
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
                    if(key === "border-top-left-radius"){
                        // alert(thevalue+" border-top-left-radius");, , border_radius_bottom_right
                        $("#border_radius_top_left").val(thevalue);
                    }else if(key === "border-top-right-radius"){
                        $("#border_radius_top_right").val(thevalue);
                    }else if(key === "border-bottom-left-radius"){
                        $("#border_radius_bottom_left").val(thevalue);
                    }else if(key === "border-bottom-right-radius"){
                        $("#border_radius_bottom_right").val(thevalue);
                    }else if(key === "margin-top"){
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
                }else if(key === "border-top"){
                    var mrgn_tp_array = cssArray[key].split(" ");

                    $.each(mrgn_tp_array, function(index, value){
                        if(index === 0){
                            var thevalue = parseInt(value.replace("px", ""));
                            $("#border_top_width").val(thevalue);
                            // alert(value+"---"+thevalue+"; the last index");border_top_type
                        }else if(index === 1){
                            $("#border_top_type").val(value);
                        }else if(index === 2){
                            $("#border_top_color_pickerbuildjs").val(value);
                        }
                    });
                }else if(key === "border-bottom"){
                    var mrgn_tp_array = cssArray[key].split(" ");

                    $.each(mrgn_tp_array, function(index, value){
                        if(index === 0){
                            var thevalue = parseInt(value.replace("px", ""));
                            $("#border_bottom_width").val(thevalue);
                            // alert(value+"---"+thevalue+"; the last index");border_bottom_type
                        }else if(index === 1){
                            $("#border_bottom_type").val(value);
                        }else if(index === 2){
                            $("#border_bottom_color_pickerbuildjs").val(value);
                        }
                    });
                }else if(key === "border-left"){
                    var mrgn_tp_array = cssArray[key].split(" ");

                    $.each(mrgn_tp_array, function(index, value){
                        if(index === 0){
                            var thevalue = parseInt(value.replace("px", ""));
                            $("#border_left_width").val(thevalue);
                            // alert(value+"---"+thevalue+"; the last index");border_left_type
                        }else if(index === 1){
                            $("#border_left_type").val(value);
                        }else if(index === 2){
                            $("#border_left_color_pickerbuildjs").val(value);
                        }
                    });
                }else if(key === "border-right"){
                    var mrgn_tp_array = cssArray[key].split(" ");

                    $.each(mrgn_tp_array, function(index, value){
                        if(index === 0){
                            var thevalue = parseInt(value.replace("px", ""));
                            $("#border_right_width").val(thevalue);
                            // alert(value+"---"+thevalue+"; the last index");border_right_type
                        }else if(index === 1){
                            $("#border_right_type").val(value);
                        }else if(index === 2){
                            $("#border_right_color_pickerbuildjs").val(value);
                        }
                    });
                }else if(key === "display"){
                    alert("grid detected!");
                    console.log("grid detected!");
                }

                // if(dblclick_type == "component_wraps"){
                //     // alert("load the stuffs for the grid!");

                // }
            }
        }
    });

    // border_top_width, border_top_type, border_top_color_pickerbuildjs
    // $('body').on('change', '#border_top_width, #border_top_type, #border_top_color_pickerbuildjs', function() {
    //     var the_brdr_tp_wdth = $("#border_top_width").val();
    //     var the_brdr_tp_typ = $("#border_top_type").val();
    //     var the_brdr_tp_clr = $("#border_top_color_pickerbuildjs").val();
    //     // alert(the_brdr_tp_wdth+"; top_width");
    //     // alert(the_brdr_tp_typ+"; top_type");
    //     // alert(the_brdr_tp_clr+"; top_color");

    //     var component_id = $("#textform_for_update").attr("component_id");

    //     var thestylestring = $("#"+component_id).attr("style");

    //     // alert(thestylestring);
    // });

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
                }else if(formData.owner == "load_all_page_components"){
                    // alert(response);
                    $("#dashboard_all_pages_components").html(response);
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