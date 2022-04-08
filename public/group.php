<?php
session_start();
require_once 'init.php';

$_title = 'Wellcome Webphone';
$_active_nav = 'Group';
$_head = '	<!-- Optional: page related CSS-->

	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-brands.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-solid.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css1/web_phone.css">
	<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/css/select2.min.css" rel="stylesheet" />

';
$_description = 'Group';
//if(count($_SESSION)==0) header("Location: login.php");
if(!isset($_SESSION['web_phone'])) header("Location: login.php");
if($_SESSION['role'] !=ROLE_SUPER_ADMIN) header("Location: dashboard.php");

/*if($_SESSION['u_type'] =='Patient'){
    header("Location: dashboard.php");
}*/
//print_r($_SESSION);
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
                    <?php include_once 'modal/modal_success.php'; ?>
                    <!-- BEGIN Page Content-->
                    <!-- the #js-page-content id is needed for some plugins to initialize -->
                    <main id="js-page-content" role="main" class="page-content">
                        <ol class="breadcrumb page-breadcrumb">
                            <li class="breadcrumb-item"><a href="dashboard.php">Webphone</a></li>
                            
                            <li class="breadcrumb-item active" ><span id="add-edit-breadcrumb">Group >Add </span></li>
                            <li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
                        </ol>
                        <div class="subheader row">
                            <h1 class="subheader-title col-8">
                                <i style="color: black" class='subheader-icon fas fa-calendar-check'></i><span id="add-edit-txt">Add Group</span>
                            </h1>
                        </div>
                        
                        <div class="container" style="padding-right: 0;padding-left: 0;">
                            <div id="add-group">
                                <input type="hidden" id="g_id">
                                <!----------------------->
                                <div class="row m_b10">
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label  for="role_id">Role</label>
                                            <select class="form-control view role_id"></select>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label  for="g_name">Group Name <span id="g_name-err" class="color-alert" style="display: none">This name can't use</span></label>
                                            <input class="form-control view"  type="text" id="g_name">
                                        </div>

                                    </div>
                                </div>

                                <div class="row m_b10">
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label  for="u-selected">User</label>
                                            <select class="form-control view" id="u-selected"></select>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>List Users</label>
                                            <div class="col-12 b-gray51" id="list-users" style="min-height: 35px; max-height: 200px; overflow-y:auto"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row m-t20">
                                    <div class="col-2">
                                        <button class="btn btn-danger form-control" id="btn-add-grp">Add Group</button>
                                    </div>
                                </div>
                            </div>

                            <!--end panel-->
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
        <script src="<?= APP_URL; ?>/js/select2.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/common_f.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/group/group.js" type="text/javascript"></script>

        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js"></script>
        <script src="<?= APP_URL; ?>/js/jquery.twbsPagination.js" type="text/javascript"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/js/select2.min.js"></script>

        <!--
        <script type="text/javascript">
            var comm_f = new common_f();
            $(function(){
                comm_f.init();
            })
        </script>
    -->

    </body>
</html>
