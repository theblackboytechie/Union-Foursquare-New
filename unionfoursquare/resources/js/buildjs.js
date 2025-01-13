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

    // 
    $('body').on('dblclick', "[component_type='image']", function() {
        alert("yo img!");
    });

    // 
    $('body').on('dblclick', "[component_type='text']", function() {
        var component_id = $(this).attr("component_id");
        var text_Val = $(this).text();
        // alert("yo text!: "+component_id+"-----"+text_Val);

        var textareaform = "<b>Update Text</b>";
            textareaform += "<textarea class='input-form' rows='5' component_id='"+component_id+"' style='width:95%;'>"+text_Val+"</textarea>";
            textareaform += "<button class='update_text_button'>Update</button>";

        $(".pages-section-c-inner").prepend(textareaform);
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