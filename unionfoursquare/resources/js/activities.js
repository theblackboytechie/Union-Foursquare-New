// toggle_pages_list
// toggle-page-componet-wraps

// dashboard_pageslist_dropdown
// dashboard_all_pages_components
// pages-components-wraps

$(document).ready(function() {
    $('body').on('click', '#toggle-page-componet-wraps', function() {
        $("#dashboard_pageslist_dropdown").hide();
        $("#dashboard_all_pages_components").hide();
        $("#pages-components-wraps").toggle();
    });

    $('body').on('click', '#toggle_pages_list', function() {
        $("#pages-components-wraps").hide();
        $("#dashboard_all_pages_components").hide();
        $("#dashboard_pageslist_dropdown").toggle();
    });

    $('body').on('click', '#toggle_all_pages_components', function() {
        $("#pages-components-wraps").hide();
        $("#dashboard_pageslist_dropdown").hide();
        $("#dashboard_all_pages_components").toggle();
    });
});