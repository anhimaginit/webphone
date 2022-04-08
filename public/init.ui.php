<?php
// configure Bootstrap components UI
\Bootstrap\Component::register('table', 'Bootstrap\Components\Table');
\Bootstrap\Component::register('button', 'Bootstrap\Components\Button');
\Bootstrap\Component::register('nav', 'Bootstrap\Components\Nav');
\Bootstrap\Component::register('pagination', 'Bootstrap\Components\Pagination');

$_ui = new \Bootstrap\Component;
$_nav =array();
if (session_id()){
    if(count($_SESSION)>0 && isset($_SESSION['web_phone'])){
        $dashboard = [
            'title' => 'Dashboard',
            'icon' => 'fa fa-lg fa-fw fa-home',
            'url' => APP_URL.'/dashboard.php'
        ];
        $_nav['dashboard'] =$dashboard;

        if($_SESSION['role']=="super_admin"){
            $admin_menu = [
                'title' => 'Admin',
                'icon' => 'fa fa-lg fa-fw fa-cubes',
                'items' => [
                    'Role' =>[
                        'title' => 'Role',
                        'icon' => 'fa fa-lg fa-fw fa-sliders',
                        'url' => APP_URL.'/acl.php'
                    ],
                    'Groups' => [
                        'title' => 'Groups',
                        'icon' => 'fa fa-lg fa-fw fa-users',
                        'items' => [
                            'List' =>[
                                'title' => 'List Group',
                                'url' => APP_URL.'/group_list.php'
                            ],
                            'AddGroup' => [
                                'title' => 'Add Group',
                                'url' => APP_URL.'/group.php'
                            ]
                        ]

                    ]
                ]

            ];
            $comp_menu = [
                'title' => 'Company',
                'icon' => 'fa fa-lg fa-fw fa-institution',
                'items' => [
                    'Company' =>[
                        'title' => 'List Company',
                        'url' => APP_URL.'/list_company.php'
                    ],
                    'Company_add' =>[
                        'title' => 'Add',
                        'url' => APP_URL.'/company.php'
                    ],
                ]

            ];
            $brand_menu = [
                'title' => 'Branch',
                'icon' => 'fa fa-lg fa-fw fa-institution',
                'items' => [
                    'Branches' =>[
                        'title' => 'List Branch',
                        'url' => APP_URL.'/list_branch.php'
                    ],
                    'Branch_add' =>[
                        'title' => 'Add',
                        'url' => APP_URL.'/branch.php'
                    ],
                ]

            ];
            $user_menu = [
                'title' => 'List User',
                'icon' => 'fa fa-lg fa-fw fa-user',
                'url' => APP_URL.'/list_user.php'
            ];

            $_nav['admin_menu'] =$admin_menu;
            $_nav['comp_menu'] =$comp_menu;
            $_nav['brand_menu'] =$brand_menu;
            $_nav['user_menu'] =$user_menu;
        }elseif($_SESSION['role']=="company_manager"){
            $comp_menu = [
                'title' => 'Company Info',
                'icon' => 'fa fa-lg fa-fw fa-institution',
                'url' => APP_URL.'/company.php'
            ];
            $brand_menu = [
                'title' => 'Branch',
                'icon' => 'fa fa-lg fa-fw fa-institution',
                'items' => [
                    'Branches' =>[
                        'title' => 'List Branch',
                        'url' => APP_URL.'/branch_list.php'
                    ],
                    'Branch_add' =>[
                        'title' => 'Add Branch',
                        'url' => APP_URL.'/branch.php'
                    ],
                ]

            ];
            $user_menu = [
                'title' => 'List User',
                'icon' => 'fa fa-lg fa-fw fa-user',
                'url' => APP_URL.'/list_user.php'
            ];
            $_nav['comp_menu'] =$comp_menu;
            $_nav['brand_menu'] =$brand_menu;
            $_nav['user_menu'] =$user_menu;
        }elseif($_SESSION['role']=="branch_manager"){
            $comp_menu = [
                'title' => 'Company',
                'icon' => 'fa fa-lg fa-fw fa-institution',
                'url' => APP_URL.'/company.php'
            ];
            $brand_menu = [
                'title' => 'Branch',
                'icon' => 'fa fa-lg fa-fw fa-institution',
                'url' => APP_URL.'/branch.php'
            ];
            $user_menu = [
                'title' => 'User',
                'icon' => 'fa fa-lg fa-fw fa-user',
                'url' => APP_URL.'/list_user.php'
            ];
            $_nav['comp_menu'] =$comp_menu;
            $_nav['brand_menu'] =$brand_menu;
            $_nav['user_menu'] =$user_menu;
        }else{
            $comp_menu = [
                'title' => 'Company',
                'icon' => 'fa fa-lg fa-fw fa-institution',
                'url' => APP_URL.'/company.php'
            ];
            $brand_menu = [
                'title' => 'Branch',
                'icon' => 'fa fa-lg fa-fw fa-institution',
                'url' => APP_URL.'/branch.php'
            ];
            $_nav['comp_menu'] =$comp_menu;
            $_nav['brand_menu'] =$brand_menu;
        }

    }
}

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