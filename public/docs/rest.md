# RESTful API

> **Representational State Transfer (REST)** is a software architectural style that defines a set of constraints to be used for creating Web services. Web services that conform to the REST architectural style, called RESTful Web services (RWS), provide interoperability between computer systems on the Internet.

from [wikipedia](https://en.wikipedia.org/wiki/Representational_state_transfer)

SmartAdmin for PHP has built-in REST API server that you can already use out of the box. Provided that you enabled `mod_rewrite` in the [installation](docs_general.php#url-rewriting), you can configure your REST API server in minutes!

To play around with this feature, head over to the [API Tester](php_api_playground.php) page.

## Routes

The API routes are basically the endpoints of your API. These routes are configured/defined under `public/api` folder. To learn more on how to design your API better, follow this [tutorial](https://www.restapitutorial.com/lessons/restfulresourcenaming.html) about REST apis.

Example route request:
```
GET https://smartadmin.lodev09.com/api/users/:username
```

Response:
```json
HTTP/1.1 200 OK
{
	"id": 1,
	"username": "lodev09",
	"name": "Jovanni",
	"email": "lodev09@gmail.com",
	"created_at": "2019-07-02T19:34:22Z"
}
```

## Middlewares

SmartAdmin PHP includes various _middlewares_ to handle each request. For example, the `\API\AuthMiddleware` where it validates the user credentials passed through the `Authentication` header -- basically checking if the request is authenticated or not.

Here are the included middlewares:

| Class | Description |
| ----- | ----------- |
| `\API\AuthMiddleware` | Authenticates requests |
| `\API\LoggerMiddleware` | Logs requests |
| `\API\RateLimitMiddleware` | Calculates rate limits |
| `\API\RequestMiddleware` | Converts all requests to `JSON` |

## Authentication

The built-in REST API server comes with the Authentication routine which is handled by the `\API\AuthMiddleware` middleware. Check out the [Authentication](php_auth_docs.php) documentation to learn more.

## Credits

SmartAdmin PHP uses [slimphp/Slim](https://github.com/slimphp/Slim) package to host the API server. Refer to their documentation on how to create your own routes and customize your REST API server.