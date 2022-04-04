<?php

function list_filters($params, &$filters, &$binds, &$sort_field, &$sort_direction) {
	$filters = [];
	$binds = [];

	$result = get('result', $params);
	if (!is_null($result)) {
		$filters['result'] = $result ? 1 : 0;
	}

	// sort param
	$sort = get('sort', $params);
	switch ($sort) {
		case 'updated':
			$sort_field = 'updated_at';
			break;
		default:
			$sort_field = 'created_at';
			break;
	}

	// since
	$since = get('since', $params);
	if ($since) {
		if ($since_date = dt($since)) {
			$filters[] = 'created_at >= :since';
			$binds['since'] = $since_date;
		}
	}

	// direction param
	$direction = get('direction', $params, 'desc');
	$sort_direction = strtolower($direction) == 'asc' || strtolower($direction) == 'desc' ? strtoupper($direction) : 'DESC';
}