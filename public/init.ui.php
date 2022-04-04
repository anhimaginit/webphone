<?php
// configure Bootstrap components UI
\Bootstrap\Component::register('table', 'Bootstrap\Components\Table');
\Bootstrap\Component::register('button', 'Bootstrap\Components\Button');
\Bootstrap\Component::register('nav', 'Bootstrap\Components\Nav');
\Bootstrap\Component::register('pagination', 'Bootstrap\Components\Pagination');

$_ui = new \Bootstrap\Component;

$_nav =array();
if (session_id()){
    if(count($_SESSION)>0){


    }
}
/*
$_nav['Danh_sach_bac_si']=[
    'title' => 'Bác Sĩ',
    'icon' => 'fal fa-th-list',
    'url' => APP_URL.'/physician_list.php'
];*/

if (session_id()){
    if(count($_SESSION)>0){
        $_nav['Logout']=[
            'title' => 'Đăng Xuất',
            'icon' => 'fal fa-sign-out-alt',
            'url' => APP_URL.'/php/clearSession.php'
        ];
    }
}


?>
<script src="<?= ASSETS_URL ?>/js/vendors.bundle.js"></script>

<script src="<?= APP_URL ?>/js/your_script.js"></script>