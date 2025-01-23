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
                <div class="dashboard-header">build.io</div>
                <div class="dashboard-menu-content">
                    <div class="dashboard-menu-each">
                        <div class="dashboard-menu-iconwraps">
                            <!--  -->
                            <svg class="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.10322 0.956299H2.53135C1.5751 0.956299 0.787598 1.7438 0.787598 2.70005V6.27192C0.787598 7.22817 1.5751 8.01567 2.53135 8.01567H6.10322C7.05947 8.01567 7.84697 7.22817 7.84697 6.27192V2.72817C7.8751 1.7438 7.0876 0.956299 6.10322 0.956299ZM6.60947 6.30005C6.60947 6.5813 6.38447 6.8063 6.10322 6.8063H2.53135C2.2501 6.8063 2.0251 6.5813 2.0251 6.30005V2.72817C2.0251 2.44692 2.2501 2.22192 2.53135 2.22192H6.10322C6.38447 2.22192 6.60947 2.44692 6.60947 2.72817V6.30005Z" fill=""></path>
                                <path d="M15.4689 0.956299H11.8971C10.9408 0.956299 10.1533 1.7438 10.1533 2.70005V6.27192C10.1533 7.22817 10.9408 8.01567 11.8971 8.01567H15.4689C16.4252 8.01567 17.2127 7.22817 17.2127 6.27192V2.72817C17.2127 1.7438 16.4252 0.956299 15.4689 0.956299ZM15.9752 6.30005C15.9752 6.5813 15.7502 6.8063 15.4689 6.8063H11.8971C11.6158 6.8063 11.3908 6.5813 11.3908 6.30005V2.72817C11.3908 2.44692 11.6158 2.22192 11.8971 2.22192H15.4689C15.7502 2.22192 15.9752 2.44692 15.9752 2.72817V6.30005Z" fill=""></path>
                                <path d="M6.10322 9.92822H2.53135C1.5751 9.92822 0.787598 10.7157 0.787598 11.672V15.2438C0.787598 16.2001 1.5751 16.9876 2.53135 16.9876H6.10322C7.05947 16.9876 7.84697 16.2001 7.84697 15.2438V11.7001C7.8751 10.7157 7.0876 9.92822 6.10322 9.92822ZM6.60947 15.272C6.60947 15.5532 6.38447 15.7782 6.10322 15.7782H2.53135C2.2501 15.7782 2.0251 15.5532 2.0251 15.272V11.7001C2.0251 11.4188 2.2501 11.1938 2.53135 11.1938H6.10322C6.38447 11.1938 6.60947 11.4188 6.60947 11.7001V15.272Z" fill=""></path>
                                <path d="M15.4689 9.92822H11.8971C10.9408 9.92822 10.1533 10.7157 10.1533 11.672V15.2438C10.1533 16.2001 10.9408 16.9876 11.8971 16.9876H15.4689C16.4252 16.9876 17.2127 16.2001 17.2127 15.2438V11.7001C17.2127 10.7157 16.4252 9.92822 15.4689 9.92822ZM15.9752 15.272C15.9752 15.5532 15.7502 15.7782 15.4689 15.7782H11.8971C11.6158 15.7782 11.3908 15.5532 11.3908 15.272V11.7001C11.3908 11.4188 11.6158 11.1938 11.8971 11.1938H15.4689C15.7502 11.1938 15.9752 11.4188 15.9752 11.7001V15.272Z" fill=""></path>
                            </svg>
                        </div>
                        <div>Dashboard</div>
                    </div>
                    <a href="/pages/dashboard">
                        <div class="dashboard-menu-each">
                            <div class="dashboard-menu-iconwraps"><i class="fa-regular fa-file"></i></div>
                            <div>Pages</div>
                        </div>
                    </a>
                    <div class="dashboard-menu-each">
                        <div class="dashboard-menu-iconwraps">
                            <svg class="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.0002 7.79065C11.0814 7.79065 12.7689 6.1594 12.7689 4.1344C12.7689 2.1094 11.0814 0.478149 9.0002 0.478149C6.91895 0.478149 5.23145 2.1094 5.23145 4.1344C5.23145 6.1594 6.91895 7.79065 9.0002 7.79065ZM9.0002 1.7719C10.3783 1.7719 11.5033 2.84065 11.5033 4.16252C11.5033 5.4844 10.3783 6.55315 9.0002 6.55315C7.62207 6.55315 6.49707 5.4844 6.49707 4.16252C6.49707 2.84065 7.62207 1.7719 9.0002 1.7719Z" fill=""></path>
                                <path d="M10.8283 9.05627H7.17207C4.16269 9.05627 1.71582 11.5313 1.71582 14.5406V16.875C1.71582 17.2125 1.99707 17.5219 2.3627 17.5219C2.72832 17.5219 3.00957 17.2407 3.00957 16.875V14.5406C3.00957 12.2344 4.89394 10.3219 7.22832 10.3219H10.8564C13.1627 10.3219 15.0752 12.2063 15.0752 14.5406V16.875C15.0752 17.2125 15.3564 17.5219 15.7221 17.5219C16.0877 17.5219 16.3689 17.2407 16.3689 16.875V14.5406C16.2846 11.5313 13.8377 9.05627 10.8283 9.05627Z" fill=""></path>
                            </svg>
                        </div>
                        <div>Users</div>
                    </div>
                    <div class="dashboard-menu-each">
                        <div class="dashboard-menu-iconwraps">
                            <i class="fa-solid fa-arrow-right-from-bracket"></i>
                        </div>
                        <div>Logout</div>
                    </div>
                </div>
                <!--  -->
            </div>
        </div>
        <div class="dashboard-content">
            <div class="dashboard-header dashboard-header-bottom">
                <div class="dashboard-header-inner">
                    <div>
                        <div class="faux_link" id="toggle_pages_list">Pages</div>
                        <div class="hidden dashboard_dropdown" id="dashboard_pageslist_dropdown">
                            <a href='/pages/construct/homepage'>
                                <div class="dashboard-menu-each">
                                <div class="dashboard-menu-iconwraps"><i class="fa-solid fa-house-chimney"></i></div>
                                <div>Home Page</div>
                                </div>
                            </a>
                            <!-- <div class="dashboard-menu-each">
                                <div class="dashboard-menu-iconwraps"><i class="fa-brands fa-blogger-b"></i></div>
                                <div>Blog Page</div>
                            </div>
                            <div class="dashboard-menu-each">
                                <div class="dashboard-menu-iconwraps"><i class="fa-solid fa-user"></i></div>
                                <div>Who We Are</div>
                            </div>
                            <div class="dashboard-menu-each">
                                <div class="dashboard-menu-iconwraps"><i class="fa-solid fa-file"></i></div>
                                <div>Resources</div>
                            </div> -->
                            <div id='trigger_create_new_page' style="border-top: 1px solid lightgray;margin-top: 10px;padding-top: 10px;">Create Page</div>
                            <div id="website_pageslist_wraper"></div>
                        </div>
                    </div>
                    <div>|</div>
                    <div>
                        <div class="faux_link" id="toggle_all_pages_components">Components</div>
                        <div class="hidden dashboard_dropdown" id="dashboard_all_pages_components"><i class="fa-solid fa-circle-notch fa-spin"></i></div>
                    </div>
                    <div>|</div>
                    <div>
                        <div class="faux_link" id="toggle-page-componet-wraps">+ Component</div>
                        <div class="hidden" id="pages-components-wraps">
                            <x-backend-create-component />
                        </div>
                    </div>
                </div>
            </div>
            <div class="dashboard-content-body">
                @if($owner == "view_pagesroute_dashboard" || $owner == "view_homepage_subsection_jumbotron" || $owner == "view_homepage_subsection_themetext" || $owner == "view_construct_whyfoursquare" || $owner == "view_construct_pages")
                    <x-backend-pages-dashboard :owner="$owner" />
                @endif
            </div>
        </div>
    </div>
</x-app-layout>