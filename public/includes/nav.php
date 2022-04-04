<!-- BEGIN Left Aside -->
<aside class="page-sidebar">
    <div class="page-logo"><!--
        <a href="login.php" class="page-logo-link press-scale-down d-flex align-items-center position-relative">
            <img src="<?= ASSETS_URL ?>/img/logo.png" alt="Wellcome Webphone" aria-roledescription="logo">
            <span class="page-logo-text mr-1">Wellcome Webphone</span>
        </a>-->
    </div>
    <!-- BEGIN PRIMARY NAVIGATION -->
    <nav id="js-primary-nav" class="primary-nav" role="navigation">
        <div class="nav-filter">
            <div class="position-relative">
                <input type="text" id="nav_filter_input" placeholder="Tìm Kiếm" class="form-control" tabindex="0">
                <a href="#" onclick="return false;" class="btn-primary btn-search-close js-waves-off" data-action="toggle" data-class="list-filter-active" data-target=".page-sidebar">
                    <i class="fal fa-chevron-up"></i>
                </a>
            </div>
        </div>
        <div class="info-card">
            <img src="//s3.amazonaws.com/appforest_uf/f1584376106762x402033725538128100/avatar.png" class="profile-image rounded-circle" alt="Dr. Codex Lantern">
            <div class="info-card-text">
                <a href="dashboard.php" class="d-flex align-items-center text-white">
                    <span class="text-truncate text-truncate-sm d-inline-block" id="nav-name">
                        <?php
                        if(count($_SESSION)>0){
                            $_SESSION['u_fname']." ".$_SESSION['u_lname'];
                        }
                        ?>
                    </span>
                </a>

            </div>
            <img src="<?= ASSETS_URL ?>/img/card-backgrounds/cover-4-lg.png" class="cover" alt="cover">
            <a href="#" onclick="return false;" class="pull-trigger-btn" data-action="toggle" data-class="list-filter-active" data-target=".page-sidebar" data-focus="nav_filter_input">
                <i class="fal fa-angle-down"></i>
            </a>
        </div>
        <?php

                        $nav = $_ui->create_nav($_nav, isset($_active_nav) ? $_active_nav : null);
                        $nav->print_html();

        ?>
        <!-- <div class="filter-message js-filter-message bg-success-600"></div> -->
    </nav>
    <!-- END PRIMARY NAVIGATION -->
    <!-- NAV FOOTER -->
    <!--
    <div class="nav-footer shadow-top">
        <a href="#" onclick="return false;" data-action="toggle" data-class="nav-function-minify" class="hidden-md-down">
            <i class="ni ni-chevron-right"></i>
            <i class="ni ni-chevron-right"></i>
        </a>
        <ul class="list-table m-auto nav-footer-buttons">
            <li>
                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Chat logs">
                    <i class="fal fa-comments"></i>
                </a>
            </li>
            <li>
                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Support Chat">
                    <i class="fal fa-life-ring"></i>
                </a>
            </li>
            <li>
                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Make a call">
                    <i class="fal fa-phone"></i>
                </a>
            </li>
        </ul>
    </div> --> <!-- END NAV FOOTER -->
</aside>
<!-- END Left Aside -->
