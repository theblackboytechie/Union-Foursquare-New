<x-app-layout>
    <div
        id="union4sqmaps"
        database_update="{{ route('database_update') }}"
        database_upload_image="{{ route('database_upload_image') }}"
    >
    </div>
    <div class="dashboard-grid">
        <div class="dashboard-menu">
            <div class="dashboard-menu-inner" style="position: fixed;background: bluex;">
                <!--  -->
                <!-- <div class="dashboard-header">io</div> -->
                <div class="dashboard-menu-content">
                    <div class="dashboard-menu-each">
                        <div class="dashboard-menu-iconwraps"><i class="fa-solid fa-cube"></i></div>
                        <!-- <div>Dashboard</div> -->
                    </div>
                    <a href="/pages/dashboard">
                        <div class="dashboard-menu-each">
                            <div class="dashboard-menu-iconwraps"><i class="fa-solid fa-file"></i></div>
                            <!-- <div>Pages</div> -->
                        </div>
                    </a>
                    <div class="dashboard-menu-each">
                        <div class="dashboard-menu-iconwraps"><i class="fa-solid fa-user"></i></div>
                        <!-- <div>Users</div> -->
                    </div>
                    <div class="dashboard-menu-each">
                        <div class="dashboard-menu-iconwraps">
                            <i class="fa-solid fa-arrow-right-from-bracket"></i>
                        </div>
                        <!-- <div>Logout</div> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="dashboard-content">
            <div class="dashboard-header dashboard-header-bottom">
                <div class="dashboard-header-inner">
                    <div>
                        <div class="faux_link" style="width: 15vw;padding: 2%;border-right: 1px solid lightgray;" id="toggle_pages_list">Pages</div>
                        <div class="hidden dashboard_dropdown" id="dashboard_pageslist_dropdown">
                            <div class="dashboard_dropdown_grid">
                                <div class="dashboard_dropdown_header">Site Pages and Menu</div>
                                <div class="dashboard_dropdown_header_qst_cls">
                                    <div class="dashboard_dropdown_header_qst_cls_ech faux_link"><i class="fa-solid fa-question"></i></div>
                                    <div id="close_pages_list" class="dashboard_dropdown_header_qst_cls_ech faux_link"><i class="fa-solid fa-xmark"></i></div>
                                </div>
                            </div>
                            <div class="customscroll" style="overflow-y: scroll;height: 80vh;padding: 10px;background: rxed;">
                                <!--  -->
                                <div class="dashboard_dropdown_grid" style="padding: 5px 0px;">
                                    <div class="">Pages</div>
                                    <div id='trigger_create_new_page' class='faux_link'>+ Create Page</div>
                                </div>
                                <div class="page_list_each">
                                    <div>Homepage</div>
                                    <div style="text-align: right;"><a href='/pages/construct/homepage'><i class='fa-solid fa-link'></i></a></div>
                                </div>
                                <div id="website_pageslist_wraper">
                                    <i class="fa-solid fa-circle-notch fa-spin"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="currentpage_name"><i class="fa-solid fa-circle-notch fa-spin"></i></div>
                    <div id="trigger-add-components"><i class="fa-solid fa-plus"></i></div>
                    <div class="xhidden dashboard_dropdown" id="dashboard_pageslist_dropdown" style="background: red;">
                        <div class="dashboard_dropdown_grid">
                            <div class="dashboard_dropdown_header">Site Pages and Menu</div>
                            <div class="dashboard_dropdown_header_qst_cls">
                                <div class="dashboard_dropdown_header_qst_cls_ech faux_link"><i class="fa-solid fa-question"></i></div>
                                <div id="close_pages_list" class="dashboard_dropdown_header_qst_cls_ech faux_link"><i class="fa-solid fa-xmark"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                @if($owner == "view_pagesroute_dashboard" || $owner == "view_homepage_subsection_jumbotron" || $owner == "view_homepage_subsection_themetext" || $owner == "view_construct_whyfoursquare" || $owner == "view_construct_pages")
                    <x-backend-pages-dashboard :owner="$owner" />
                @endif
            </div>
        </div>
    </div>
</x-app-layout>