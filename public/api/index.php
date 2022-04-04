<?php

chdir(__DIR__);
require_once '../../const.php';
require_once '../../root.php';
require_once '../../db.php';

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

// containers

$api_app = new \Slim\App();
$container = $api_app->getContainer();

$settings = $container->get('settings');
$settings->replace([
    'displayErrorDetails' => __DEV__,
    'debug' => __DEV__
]);

$container['logger'] = function($c) {
    $logger = new \Monolog\Logger('my_logger');
    $file_handler = new \Monolog\Handler\StreamHandler(APP_LOGS_PATH.'/api.log');
    $logger->pushHandler($file_handler);
    return $logger;
};

// https://akrabat.com/overriding-slim-3s-error-handling/
$container['errorHandler'] = function ($c) {
    return function ($request, $response, $e) use ($c) {
        $data = [
            'code' => $e->getCode(),
            'message' => $e->getMessage().(__DEV__ ? ' at '.basename($e->getFile()).':'.$e->getLine() : '')
        ];

        return $c['response']
            ->withStatus(400)
            ->withJson($data, null, JSON_PRETTY_PRINT);
    };
};

$container['phpErrorHandler'] = function ($c) {
    return function ($request, $response, $e) use ($c) {
        $data = [
            'code' => $e->getCode(),
            'message' => $e->getMessage().(__DEV__ ? ' at '.basename($e->getFile()).':'.$e->getLine() : '')
        ];

        return $c['response']
            ->withStatus(500)
            ->withJson($data, null, JSON_PRETTY_PRINT);
    };
};

$container['notFoundHandler'] = function ($c) {
    return function ($request, $response) use ($c) {
        $data = ['message' => 'Not Found'];

        return $c['response']
            ->withStatus(404)
            ->withJson($data, null, JSON_PRETTY_PRINT);
    };
};

$container['badRequestHandler'] = function ($c) {
    return function ($request, $response) use ($c) {
        $data = ['message' => 'Invalid Request'];

        return $c['response']
            ->withStatus(400)
            ->withJson($data, null, JSON_PRETTY_PRINT);
    };
};

$container['app'] = $app;
$container['user'] = null;
$container['access_token'] = null;

// instantiate slim app

// middlewares
$api_app->add(new \API\LoggerMiddleware($api_app));
$api_app->add(new \API\RateLimitMiddleware($api_app));
$api_app->add(new \API\AuthMiddleware($api_app));
$api_app->add(new \API\RequestMiddleware($api_app));

require_once 'functions.php';

// routes
require_once 'routes/users.php';

$api_app->run();

?>