<?php

\Models\Model::connect(DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, DB_PORT);
\Models\Model::$db->on_error(function($msg) {
	plog($msg);
});

// configure models
\Models\User::register('users');
\Models\AccessToken::register('access_tokens');
\Models\Session::register('sessions');
\Models\APIRequest::register('api_requests');