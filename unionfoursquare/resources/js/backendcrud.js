$(document).ready(function() {
    // trigger the uploading of the primary details of the jumbotron
    $('body').on('click', '#trigger-update-jumbotron', function() {
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

        var theurl = $("#cadanamaps").attr("database_update");

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
                // if(formData.owner == "update_account_type"){
                //     // refresh current page
                //     if(response == 1){
                //         location.reload();
                //     }else{
                //         // output error
                //     }
                // }
                alert(response);
            },
            error: function(response) {
                // alert(response);
                // forms_id
                // owner applet_id
            }
        });
    }
});