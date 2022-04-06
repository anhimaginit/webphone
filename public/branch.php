<?php
session_start();
require_once 'init.php';

$_title = 'Wellcome Webphone';
$_active_nav = 'Branch';
$_head = '	<!-- Optional: page related CSS-->

	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-brands.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-solid.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css1/web_phone.css">
	<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/css/select2.min.css" rel="stylesheet" />

';
$_description = 'Branch';
//if(count($_SESSION)==0) header("Location: login.php");
if(!isset($_SESSION['web_phone'])) header("Location: login.php");

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

                    <!-- BEGIN Page Content-->
                    <!-- the #js-page-content id is needed for some plugins to initialize -->
                    <main id="js-page-content" role="main" class="page-content">
                        <ol class="breadcrumb page-breadcrumb">
                            <li class="breadcrumb-item"><a href="dashboard.php">Webphone</a></li>
                            
                            <li class="breadcrumb-item active" >Branch> <span id="appt-name"></span></li>
                            <li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
                        </ol>
                        <div class="subheader row">
                            <h1 class="subheader-title col-8">
                                <i style="color: black" class='subheader-icon fas fa-calendar-check'></i>branch><span id="b-name-text"></span>
                            </h1>
                        </div>
                        
                        <div class="container" style="padding-right: 0;padding-left: 0;">
                            <div id="branch-content">
                                <input type="hidden" id="b_id">
                                <input type="hidden" id="c_id">
                                <!----------------------->
                                <div class="row m_b10">
                                    <div class="col-12">
                                        <button class="btn btn-outline-primary btn-sm" id="view">View</button>
                                        <button class="btn btn-outline-danger btn-sm" id="edit">Edit</button>
                                    </div>
                                </div>
                                <div class="row m_b10">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label  for="b_name">Branch Name</label>
                                            <input class="form-control view" readonly="true" type="text" id="b_name">
                                        </div>
                                    </div>
                                </div>
                                <div class="row m_b10">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label  for="b_street">Street</label>
                                            <input class="form-control view" readonly="true" type="text" id="b_street">
                                        </div>
                                    </div>
                                </div>

                                <div class="row m_b10">
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label  for="b_city">City</label>
                                            <input class="form-control view" readonly="true" type="text" id="b_city">
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label  for="b_state">State</label>
                                            <input class="form-control view" readonly="true" type="text" id="b_state">
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label  for="b_state">Zip code</label>
                                            <input class="form-control view" readonly="true" type="text" id="b_zip">
                                        </div>
                                    </div>
                                </div>

                                <div class="row m_b10">
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label  for="b_phone">Phone</label>
                                            <input class="form-control view" readonly="true" type="text" id="b_phone">
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label  for="b_extension">Extension</label>
                                            <input class="form-control view" readonly="true" type="text" id="b_extension">
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label  for="b_email">Email</label>
                                            <input class="form-control view" readonly="true" type="text" id="b_email">
                                        </div>
                                    </div>
                                </div>
                                <div class="row m_b10">
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label  for="u_idContact">Contact Name</label>
                                            <input class="form-control view" readonly="true" type="text" id="u_idContact">
                                        </div>
                                    </div>
                                </div>
                                <div class="row m_b10">
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label  for="b_notes">Note</label>
                                            <textarea class="form-control view" readonly="true" type="text" id="b_notes" rows="3">

                                            </textarea>

                                        </div>
                                    </div>
                                </div>
                                <div class="row m_b10 col-4">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="b_active">
                                        <label class="custom-control-label" for="b_active">Active</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row" id="map" style="width:100%;height:400px; margin-top: 20px">

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
            var role_login='<?php echo $_SESSION['role'];?>';

        </script>

        <script src="<?= APP_URL; ?>/js/branch/branch.js" type="text/javascript"></script

        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js"></script>
        <script src="<?= APP_URL; ?>/js/jquery.twbsPagination.js" type="text/javascript"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/js/select2.min.js"></script>

        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDqqFUPT6qHW2hvTEfwLw6IaXs253qrlmU&callback=myMap"></script>

        <script>

            /* $(document).ready(function() {
             $("#myInput").on("keyup", function() {
             var value = $(this).val().toLowerCase();
             $("#myList li").filter(function() {
             $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
             });
             });
             });*/

            var map;
            function myMap() {
                map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 15,
                    panControl: true,
                    zoomControl: true,
                    mapTypeControl: true,
                    scaleControl: true,
                    streetViewControl: true,
                    overviewMapControl: true,
                    rotateControl: true,
                    // you might set a center here or wait untill you have got some markers fetched via ajax, you can then use the first/last or some other marker respecetive it's position(lat,long) to set as "starting point"
                    //center: {lat: 10.1078316, lng: 106.3404925 }
                    //mapTypeId: google.maps.MapTypeId.ROADMAP
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                });
            }
        </script>
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
