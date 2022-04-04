<?php

/**
 * list users or get a single user
 * @param $id
 *
 * @return json string
 *
 */
$api_app->get('/users[/{id}]', function($request, $response, $args) {
    if (isset($args['id'])) {
        $id = get('id', $args);
        $user = \Models\User::instance(is_numeric($id) ? 'id' : 'username', get('id', $args));

        if ($user) return $response->withJson($user->get(), null, JSON_PRETTY_PRINT);
        else return $this->get('notFoundHandler')($request, $response);

    } else {
        $params = $request->getParams();

        $page = get('page', $params) ?: 1;
        $per_page = min(get('per_page', $params) ?: 30, 100);

        list_filters($params, $filters, $binds, $sort_field, $sort_direction);

        $total_items = \App\App::get_users($filters, $binds, true);
        $pagination = new \Common\Pagination($total_items, $page, $per_page);
        $offset = $pagination->offset();

        $users = \App\App::get_users($filters, $binds, false, 'ORDER BY '.$sort_field.' '.$sort_direction.' LIMIT '.$per_page.' OFFSET '.$offset);

        $result = [];
        foreach ($users as $user) {
            $result[] = $user->get();
        }

        return $response
            ->withHeader('Link', $pagination->get_link_header(API_URL.'/users'))
            ->withJson($result, null, JSON_PRETTY_PRINT);
    }
});