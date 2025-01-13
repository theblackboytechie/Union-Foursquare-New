$(document).ready(function() {
    // on page load for jumbotron
    var urlPath = window.location.pathname;

    var path = urlPath.split("/");
    var secondToLast = path[path.length - 2];
    var thirdToLast = path[path.length - 3];
    var lastPara = path[path.length - 1];

    if(lastPara == "jumbotron"){
        let owner = "jumbotron-get";

        var formData = {
            owner: owner
        };

        var theurl = $("#union4sqmaps").attr("database_update");

        updateDatabase(theurl, formData);

        // get image
        $("#jumbotron_background_upload_processing").show();
        owner = "jumbotron-get-bg";

        var formData = {
            owner: owner
        };

        updateDatabase(theurl, formData);
    }

    // set interval to fix the left navigation and the subsection of the page builder
    setInterval(function() {
        // Code to run every interval
        var a_outerwidth = $(".dashboard-menu").width();
        $(".dashboard-menu-inner").width(a_outerwidth);

        // 
        var c_outerwidth = $(".pages-section-c").width();
        $(".pages-section-c-inner").width(c_outerwidth);
    }, 1000);

    // trigger the uploading of the primary details of the jumbotron
    $('body').on('click', '#trigger-update-jumbotron', function() {
        // show spin
        $(".spin-processing").show();
        let owner = "jumbotron-update";
        // jumbotron-headline
        let headline = $("#jumbotron-headline").val();
        // jumbotron-subtext
        let subtext = $("#jumbotron-subtext").val();
        // jumbotron-text1
        let text1 = $("#jumbotron-text1").val();
        // jumbotron-link1
        let link1 = $("#jumbotron-link1").val();
        // jumbotron-text2
        let text2 = $("#jumbotron-text2").val();
        // jumbotron-link2
        let link2 = $("#jumbotron-link2").val();

        var formData = {
            owner: owner,
            headline: headline,
            subtext: subtext,
            text1: text1,
            link1: link1,
            text2: text2,
            link2: link2
        };

        var theurl = $("#union4sqmaps").attr("database_update");

        updateDatabase(theurl, formData);
    });

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
                if(formData.owner == "jumbotron-update"){
                    $(".spin-processing").hide();
                }else if(formData.owner == "jumbotron-get"){
                    for (var key in response) {
                        if (response.hasOwnProperty(key)) {
                            console.log(key + ": " + response[key]);
                            if(key == "headline"){
                                $("#jumbotron-headline").val(response[key]);
                            }else if(key == "subtext"){
                                $("#jumbotron-subtext").val(response[key]);
                            }else if(key == "text1"){
                                $("#jumbotron-text1").val(response[key]);
                            }else if(key == "link1"){
                                $("#jumbotron-link1").val(response[key]);
                            }else if(key == "text2"){
                                $("#jumbotron-text2").val(response[key]);
                            }else if(key == "link2"){
                                $("#jumbotron-link2").val(response[key]);
                            }
                        }
                    }
                }else if(formData.owner == "jumbotron-get-bg"){
                    $("#jumbotron_background_upload_processing").hide();
                    $("#profile_picture_thumbnail").attr("src", "http://127.0.0.1:8000/storage/uploads/"+response);
                }
            },
            error: function(response) {
                // alert(response);
                // forms_id
                // owner applet_id
            }
        });
    }

    $('#jumbotron-background').change(function() {
        // to paste preview of the file
        readURL(this);
        // upload the image to the database
        $("#jumbotron_background_upload_processing").show();
        $('.' + 'credentials_error_wraps2').html("");
        var file = event.target.files[0];

        var formData = new FormData();
        formData.append('file', file);
    
        var url = window.location.href;
        var ownerid = url.substring(url.lastIndexOf('/') + 1);
        formData.append('ownerid', ownerid);
        // alert("ownerid: "+ownerid);
        // return;
        var owner = "jumbotron_background";
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
              $("#jumbotron_background_upload_processing").hide();
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
            $('#profile_picture_thumbnail').attr('src', e.target.result);
          };
      
          reader.readAsDataURL(input.files[0]);
        }
    }
});