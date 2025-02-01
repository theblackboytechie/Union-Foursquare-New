// toggle_pages_list
// toggle-page-componet-wraps

// dashboard_pageslist_dropdown
// dashboard_all_pages_components
// pages-components-wraps

$(document).ready(function() {
    $('body').on('click', '#toggle-page-componet-wraps', function() {
        $("#dashboard_pageslist_dropdown").hide();
        $("#dashboard_all_pages_components").hide();
        $("#dashboard_componentslist_dropdown").hide();
        $("#pages-components-wraps").toggle();
    });

    // to toggle pages list and to also close pages list
    $('body').on('click', '#toggle_pages_list, #close_pages_list', function() {
        $("#pages-components-wraps").hide();
        $("#dashboard_all_pages_components").hide();
        $("#dashboard_componentslist_dropdown").hide();
        $("#dashboard_pageslist_dropdown").toggle();
    });

    $('body').on('click', '#toggle_all_pages_components', function() {
        $("#pages-components-wraps").hide();
        $("#dashboard_pageslist_dropdown").hide();
        $("#dashboard_componentslist_dropdown").hide();
        $("#dashboard_all_pages_components").toggle();
    });

    // toggle_add_component_wraps
    $('body').on('click', '#toggle_add_component_wraps', function() {
        $("#pages-components-wraps").hide();
        $("#dashboard_pageslist_dropdown").hide();
        $("#dashboard_all_pages_components").hide();
        $("#dashboard_componentslist_dropdown").toggle();
    });
});
