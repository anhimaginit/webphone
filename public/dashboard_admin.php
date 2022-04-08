<?php
session_start();
require_once 'init.php';

$_title = 'Admin Report';
$_active_nav = 'dashboard_admin';
$_head = '	<!-- Optional: page related CSS-->

	<link id="appbundle" rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/app.bundle.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-brands.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-solid.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css1/web_phone.css">

';
$_description = 'Admin';

if(!isset($_SESSION['web_phone'])) header("Location: login.php");

if($_SESSION['u_type'] ==ROLE_USER){
    header("Location: dashboard.php");
}

//print_r($_SESSION["acl"]["permission"]);
?>
<!DOCTYPE html>
<!-- 
Template Name:: SmartAdmin PHP 7 Responsive WebApp - Template built with Bootstrap 4 and PHP 7
Version: 4.5.3
Author: Jovanni Lo
Website: https://smartadmin.lodev09.com
Purchase: https://wrapbootstrap.com/theme/smartadmin-php-7-responsive-webapp-WB05M9585
License: You must have a valid license purchased only from wrapbootstrap.com (link above) in order to legally use this theme for your project.
-->
<html lang="en">
    <?php include_once APP_PATH.'/includes/head.php'; ?>
    <body class="mod-bg-1 mod-nav-link ">
        <?php include_once APP_PATH.'/includes/theme.php'; ?>
        <!-- BEGIN Page Wrapper -->
        <div class="page-wrapper">
            <div class="page-inner">

                <?php include_once APP_PATH.'/includes/nav.php'; ?>

                <div class="page-content-wrapper">
                    <?php include_once APP_PATH.'/includes/header.php'; ?>
                    <!-- BEGIN Page Content -->
                    <?php //include_once 'modal/modal_success.php'; ?>
                    <!-- the #js-page-content id is needed for some plugins to initialize -->
                    <main id="js-page-content" role="main" class="page-content">
                        <ol class="breadcrumb page-breadcrumb">
                            <li class="breadcrumb-item"><a href="home.php">Web Phone</a></li>
                            
                            <li class="breadcrumb-item active">Admin</li>
                            <li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
                        </ol>
                        <div class="subheader row">
                            <h1 class="subheader-title col-8">
                                <i style="color: black" class='subheader-icon fas fa-calendar-check'></i> Admin
                            </h1>
                        </div>
                        
                        <div class="container" style="padding-right: 0;padding-left: 0;">
                            <!--Company-->
                            <div class="m_b10">
                                <div class="row f-bold col-12 under-line f-size16">Company List</div>
                                <div class="row m-t5" id="c-admin-list">
                                    <div class="col-2">
                                        <!--<label for="cname">&nbsp</label>-->
                                        <input class="form-control" id="c-name" type="text" placeholder="Company Name">
                                    </div>
                                    <div class="col-2">
                                        <!--<label  for="c-search">&nbsp</label>-->
                                        <button class="btn btn-success form-control" id="c-search">Tìm kiếm</button>
                                    </div>
                                    <div class="col-2">
                                        <!--<label  for="c-reset">&nbsp</label>-->
                                        <button class="btn btn-success form-control" id="c-reset">Reset</button>
                                    </div>
                                </div>

                                <div class="row m-t5">
                                    <div class="table-responsive-lg col-12">
                                        <table class="table table-bordered m-0 t-normal" id="c-list">
                                            <thead>
                                            <tr>
                                                <th></th>
                                                <th>Name</th>
                                                <th>Phone number</th>
                                                <th>Website</th>
                                                <th>Note</th>
                                                <th>Brand</th>
                                                <th>Active</th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            </tbody>
                                        </table>
                                        <div class="col-12 bg-light-gray">Total: <span class="f-bold" id="c-record"></span> Companies</div>
                                    </div>

                                    <div class="col-12 m-t20">
                                        <ul id="c-list-pagination" class="pagination-sm"></ul>
                                    </div>
                                </div>
                            </div>
                            <!--Branch-->
                            <div id="branch-body" style="display: none" class="m_b10">
                                <div class="row f-bold col-12 under-line f-size16">Branch List</div>
                                <div class="row m-t5" id="b-admin-list">
                                    <div class="col-2">
                                        <!--<label for="b-name">&nbsp</label>-->
                                        <input class="form-control" id="b-name" type="text" placeholder="Branch Name">
                                    </div>
                                    <div class="col-2">
                                        <!--<label  for="b-search">&nbsp</label>-->
                                        <button class="btn btn-success form-control" id="b-search">Tìm ki?m</button>
                                    </div>
                                    <div class="col-2">
                                        <!--<label  for="b-reset">&nbsp</label>-->
                                        <button class="btn btn-success form-control" id="b-reset">Reset</button>
                                    </div>
                                </div>

                                <div class="row m_b10 m-t5">
                                    <div class="table-responsive-lg col-12">
                                        <table class="table table-bordered m-0 t-normal" id="b-list">
                                            <thead>
                                            <tr>
                                                <th></th>
                                                <th>Name</th>
                                                <th>Phone number</th>
                                                <th>Extension</th>
                                                <th>Street</th>
                                                <th>City</th>
                                                <th>Zip code</th>
                                                <th>Email</th>
                                                <th>Contact user</th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            </tbody>
                                        </table>
                                        <div class="col-12 bg-light-gray">Total: <span class="f-bold" id="b-record"></span> Companies</div>
                                    </div>

                                </div>
                            </div>
                            <!--user report-->
                            <div class="m_b10">
                                <div class="row f-bold col-12 under-line f-size16">User List</div>
                                <div class="row m-t5" id="admin-users-list">
                                    <div class="col-2">
                                        <label for="user-search-type">Name</label>
                                        <input class="form-control" id="user-name" placeholder="User Name">
                                    </div>
                                    <div class="col-2 p_r">
                                        <label for="user-date-from"> From date(Created)</label>
                                        <input type="date" id="user-date-from" class="form-control" data-date-format="DD MMMM YYYY" value="">
                                    </div>
                                    <div class="col-2 p_r">
                                        <label  for="user-date-to"> To date</label>
                                        <input type="date" id="user-date-to" class="form-control" data-date-format="DD MMMM YYYY" value="">
                                    </div>
                                    <div class="col-2">
                                        <label  for="user-search">&nbsp</label>
                                        <button class="btn btn-success form-control" id="user-search">Tìm kiếm</button>
                                    </div>
                                    <div class="col-2">
                                        <label  for="user-reset">&nbsp</label>
                                        <button class="btn btn-success form-control" id="user-reset">Reset</button>
                                    </div>
                                </div>

                                <div class="row m-t5">
                                    <div class="table-responsive-lg col-12">
                                        <table class="table table-bordered m-0 t-normal" id="users-list">
                                            <thead>
                                            <tr>
                                                <th width="30px"></th>
                                                <th width="150px">Name</th>
                                                <th width="100px">Phone number</th>
                                                <th width="100px">Extension</th>
                                                <th width="80px">Email</th>
                                                <th width="80px">Note</th>
                                                <th width="150px">Date added</th>
                                                <th width="80px">View call log</th>
                                                <th width="80px">Active</th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            </tbody>
                                        </table>
                                        <div class="col-12 bg-light-gray">Total: <span class="f-bold" id="user-record"></span> users</div>
                                    </div>

                                    <div class="col-12 m-t20">
                                        <ul id="users-list-pagination" class="pagination-sm"></ul>
                                    </div>
                                </div>
                            </div>
                            <!--integration report-->
                            <div class="m_b10">
                                <div class="row f-bold col-12 under-line f-size16">Integration List</div>
                                <div class="row m-t5" id="admin-i-list">
                                    <div class="col-2">
                                        <!-- <label for="i-search-type">&nbsp</label>-->
                                        <input class="form-control" id="i-search-type" placeholder="Name">
                                    </div>
                                    <div class="col-2">
                                        <!-- <label  for="inv-search">&nbsp</label>-->
                                        <button class="btn btn-success form-control" id="inv-search">Tìm kiếm</button>
                                    </div>
                                    <div class="col-2">
                                        <!--<label  for="inv-reset">&nbsp</label> -->
                                        <button class="btn btn-success form-control" id="inv-reset">Reset</button>
                                    </div>
                                </div>

                                <div class="row m-t5">
                                    <div class="table-responsive-lg col-12">
                                        <table class="table table-bordered m-0 t-normal" id="i-list">
                                            <thead>
                                            <tr>
                                                <th></th>
                                                <th>Name</th>
                                                <th >Short name</th>
                                                <th >Company name</th>
                                                <th>Website</th>
                                                <th>Api</th>
                                                <th>Help phone</th>
                                                <th>Help Email</th>
                                                <th>Help Forum</th>
                                                <th>Help Notes</th>
                                                <th>Active</th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            </tbody>
                                        </table>
                                        <div class="col-12 bg-light-gray">Total: <span class="f-bold" id="i-record"></span> integrations</div>
                                    </div>
                                    <div class="col-12 m-t20">
                                        <ul id="i-list-pagination" class="pagination-sm"></ul>
                                    </div>
                                </div>
                            </div>
                            <!---Assigned integration report--->
                            <div class="m_b10">
                                <div class="row f-bold col-12 under-line f-size16">Assigned integration report</div>
                                <div class="row m-t5" id="admin-assign-i-list">
                                    <div class="col-2">
                                        <label for="payment-search-type">Name</label>
                                        <input type="text" class="form-control" id="=assign-i-search" placeholder="Assigned Name">
                                    </div>
                                    <div class="col-2 p_r">
                                        <label for="assgn-i-date-from">From date(Assigned)</label>
                                        <input type="date" id="assign-i-date-from" class="form-control" data-date-format="DD MMMM YYYY" value="">
                                    </div>
                                    <div class="col-2 p_r">
                                        <label  for="assgn-i-date-to"> To date </label>
                                        <input type="date" id="assgn-i-date-to"  class="form-control" data-date-format="DD MMMM YYYY" value="">
                                    </div>
                                    <div class="col-2">
                                        <label  for="payment-search">&nbsp</label>
                                        <button class="btn btn-success form-control" id="assgn-i-search">Tìm kiếm</button>
                                    </div>
                                    <div class="col-2">
                                        <label  for="payment-reset">&nbsp</label>
                                        <button class="btn btn-success form-control" id="assgn-i-reset">Reset</button>
                                    </div>
                                </div>
                                <div class="row m-t5">
                                    <div class="table-responsive-lg col-12">
                                        <table class="table table-bordered m-0 t-normal" id="assign-i-list">
                                            <thead>
                                            <tr>
                                                <th></th>
                                                <th>Assigned User name</th>
                                                <th>User name</th>
                                                <th>Integration name</th>
                                                <th>Assigned notes</th>
                                                <th>Assigned date</th>
                                                <th>Active</th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            </tbody>
                                        </table>
                                        <div class="col-12 bg-light-gray">Total: <span class="f-bold" id="assign-i-record"></span> Assigned</div>

                                    </div>
                                    <div class="col-12 margin-top20">
                                        <ul id="assgn-i-list-pagination" class="pagination-sm"></ul>
                                    </div>
                                </div>
                            </div>
                            <!--end-->
                        </div>

                    </main>
                    <!-- END Page Content -->
                    <?php include_once APP_PATH.'/includes/footer.php'; ?>
                </div>
            </div>
        </div>
        <!-- END Page Wrapper -->
        <?php include_once APP_PATH.'/includes/extra.php'; ?>
        <?php include_once APP_PATH.'/includes/js.php'; ?>
        <script type="text/javascript">
            var u_id_login='<?php echo $_SESSION['u_id'];?>';
            var role='<?php echo $_SESSION['role'];?>';

        </script>

        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js"></script>
        <script src="<?= APP_URL; ?>/js/jquery.twbsPagination.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/dashboard/dashboard_admin.js" type="text/javascript"></script>


    </body>
</html>
