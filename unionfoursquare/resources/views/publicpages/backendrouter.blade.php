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
                    <!-- <div id="trigger-add-components"></div> -->
                    <div>
                        <!--  -->
                        <div class="faux_link" style="width: 15vw;padding: 2%;border-right: 1px solid lightgray;" id="toggle_add_component_wraps"><i class="fa-solid fa-plus"></i></div>
                        <!--  -->
                        <div class="hidden dashboard_dropdown" id="dashboard_componentslist_dropdown">
                            <div class="dashboard_dropdown_grid">
                                <div class="dashboard_dropdown_header">Sections & Components</div>
                                <div class="dashboard_dropdown_header_qst_cls">
                                    <div class="dashboard_dropdown_header_qst_cls_ech faux_link"><i class="fa-solid fa-question"></i></div>
                                    <div id="toggle_add_component_wraps" class="dashboard_dropdown_header_qst_cls_ech faux_link"><i class="fa-solid fa-xmark"></i></div>
                                </div>
                            </div>
                            <div class="customscroll" style="overflow-y: scroll;height: 80vh;padding: 10px;">
                                <div style="display: grid; grid-template-columns: 1fr 1fr;gap: 10px;">
                                    <div class="pages-component-single component-each-wraps cursor-pointer select-component" owner="single-text" style="height: 50px;">Text</div>
                                    <div class="pages-component-single component-each-wraps cursor-pointer select-component" style="height: 50px;" owner="single-image">Image</div>
                                    <div class="component-each-wraps pages-each-component cursor-pointer select-component" owner="single-text-image" style="height: 50px;">
                                        <div class="pages-component-single" style="border-bottom: 1px solid white;">Text</div>
                                        <div class="pages-component-single">Image</div>
                                    </div>
                                    <div class="component-each-wraps cursor-pointer select-component" owner="single-image-text" style="height: 50px;">
                                        <div class="pages-component-single" style="border-bottom: 1px solid white;">Image</div>
                                        <div class="pages-component-single">Text</div>
                                    </div>
                                    <div class="pages-component-double component-each-wraps cursor-pointer select-component" owner="double-image-text" style="height: 50px;">
                                        <div class="pages-component-single" style="border-right: 1px solid white;">Image</div>
                                        <div class="pages-component-single">Text</div>
                                    </div>
                                    <div class="pages-component-double component-each-wraps cursor-pointer select-component" owner="double-text-image" style="height: 50px;">
                                        <div class="pages-component-single" style="border-right: 1px solid white;">Text</div>
                                        <div class="pages-component-single">Image</div>
                                    </div>
                                    <div class="pages-component-double component-each-wraps cursor-pointer select-component" owner="double-text_up-image_down" style="height: 50px;">
                                        <div style="border-right: 1px solid white;">
                                            <div class="pages-component-single" style="border-bottom: 1px solid white;">Text</div>
                                            <div class="pages-component-single">Image</div>
                                        </div>
                                        <div>
                                            <div class="pages-component-single" style="border-bottom: 1px solid white;">Text</div>
                                            <div class="pages-component-single">Image</div>
                                        </div>
                                    </div>
                                    <div class="pages-component-double component-each-wraps cursor-pointer select-component" owner="double-image_up-text_down" style="height: 50px;">
                                        <div style="border-right: 1px solid white;">
                                            <div class="pages-component-single" style="border-bottom: 1px solid white;">Image</div>
                                            <div class="pages-component-single">Text</div>
                                        </div>
                                        <div>
                                            <div class="pages-component-single" style="border-bottom: 1px solid white;">Image</div>
                                            <div class="pages-component-single">Text</div>
                                        </div>
                                    </div>
                                    <div class="pages-component-tripple component-each-wraps cursor-pointer select-component" owner="tripple-text" style="height: 50px;">
                                        <div class="pages-component-single" style="border-right: 1px solid white;">Text</div>
                                        <div class="pages-component-single" style="border-right: 1px solid white;">Text</div>
                                        <div class="pages-component-single">Text</div>
                                    </div>
                                    <div class="pages-component-tripple component-each-wraps cursor-pointer select-component" owner="tripple-image" style="height: 50px;">
                                        <div class="pages-component-single" style="border-right: 1px solid white;">Image</div>
                                        <div class="pages-component-single" style="border-right: 1px solid white;">Image</div>
                                        <div class="pages-component-single">Image</div>
                                    </div>
                                    <div class="pages-component-tripple component-each-wraps cursor-pointer select-component" owner="tripple-text_up-image_down" style="height: 50px;">
                                        <div style="border-right: 1px solid white;">
                                            <div class="pages-component-single" style="border-bottom: 1px solid white;">Text</div>
                                            <div class="pages-component-single">Image</div>
                                        </div>
                                        <div style="border-right: 1px solid white;">
                                            <div class="pages-component-single" style="border-bottom: 1px solid white;">Text</div>
                                            <div class="pages-component-single">Image</div>
                                        </div>
                                        <div>
                                            <div class="pages-component-single" style="border-bottom: 1px solid white;">Text</div>
                                            <div class="pages-component-single">Image</div>
                                        </div>
                                    </div>
                                    <div class="pages-component-tripple component-each-wraps cursor-pointer select-component" owner="tripple-image_up-text_down" style="height: 50px;">
                                        <div style="border-right: 1px solid white;">
                                            <div class="pages-component-single" style="border-bottom: 1px solid white;">Image</div>
                                            <div class="pages-component-single">Text</div>
                                        </div>
                                        <div style="border-right: 1px solid white;">
                                            <div class="pages-component-single" style="border-bottom: 1px solid white;">Image</div>
                                            <div class="pages-component-single">Text</div>
                                        </div>
                                        <div>
                                            <div class="pages-component-single" style="border-bottom: 1px solid white;">Image</div>
                                            <div class="pages-component-single">Text</div>
                                        </div>
                                    </div>

                                    <!-- empty strings -->
                                    <div class="pages-component-single component-each-wraps cursor-pointer select-component" owner="single-empty" style="height: 50px;">Empty</div>
                                    <div class="component-each-wraps cursor-pointer select-component" owner="double-empty" style="height: 50px;">
                                        <div class="pages-component-single" style="border-bottom: 1px solid white;">Empty</div>
                                        <div class="pages-component-single">Empty</div>
                                    </div>
                                    <div class="pages-component-tripple component-each-wraps cursor-pointer select-component" owner="tripple-empty" style="height: 50px;">
                                        <div class="pages-component-single" style="border-right: 1px solid white;">Empty</div>
                                        <div class="pages-component-single" style="border-right: 1px solid white;">Empty</div>
                                        <div class="pages-component-single">Empty</div>
                                    </div>

                                    <!-- <div class="component-each-wraps" style="height: 50px;">
                                        <div class="pages-component-single" style="border-bottom: 1px solid white;">Image</div>
                                        <div class="pages-component-single">Text</div>
                                    </div> -->
                                    <!-- <div style="height: 30px;width: 100%;border-radius: 5px;background: rgba(0,0,0,0.1);"></div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <!-- <div style="position: absolute;height: 98vh;width: 500px;margin-top: 5.5vh;background: white;">br br ororo!</div> -->
                @if($owner == "view_pagesroute_dashboard" || $owner == "view_homepage_subsection_jumbotron" || $owner == "view_homepage_subsection_themetext" || $owner == "view_construct_whyfoursquare" || $owner == "view_construct_pages")
                    <x-backend-pages-dashboard :owner="$owner" />
                @endif
            </div>
        </div>
    </div>
</x-app-layout>