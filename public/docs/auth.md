# Authentication

SmartAdmin for PHP comes with a built-in **Authentication** routine that you can use out of the box. The workflow follows standard security guidelines for authenticating secured pages.
To play around with this feature, head over to the [Login](php_auth_login.php) page.

## Login methods

There are three ways you can authenticate the user. Via **Username** & **Password**, **Access Token** and **Social Login**.

### With password

```php
// username and password usually from $_POST
$auth = ['username' => $username, 'password' => $password];

$authenticated = \App\App::web_auth($auth);
if ($authenticated) {
	// redirect to the secured page
	redirect(APP_URL.'/dashboard.php');
} else {
	throw Exception('Invalid username or password');
}
```

If `web_auth` is successful, you most probably want to `redirect` the user to a secured page. From there, you can verify the user if already authenticated.

### With Access Token

If you want to authenticate the user by `access_token`, used in the [REST API](php_api_docs.php#authentication) for example, you need to use the `\App\App::token_auth` method instead.
```php
$user = \App\App::token_auth([
    'username' => USERNAME,
    'access_token' => ACCESS_TOKEN
]);
```

### Social Login (Google & Facebook)

This feature uses [Hybridauth](https://hybridauth.github.io/) package to handle social media authentication -- ready to use out of the box. This package supports multiple [providers](https://hybridauth.github.io/providers.html) as well.
Once you've secured your provider credentials, modify and set the `.env` file.

```conf
OAUTH_FACEBOOK_ID=YOUR_FACEBOOK_ID
OAUTH_FACEBOOK_SECRET=YOUR_FACEBOOK_SECRET

OAUTH_GOOGLE_ID=YOUR_GOOGLE_ID
OAUTH_GOOGLE_SECRET=YOUR_GOOGLE_SECRET

# ...
```

#### Redirect URIs

OAuth providers requires you to specify your **redirect URIs**. The URIs used for each provider are the following:
```
https://smartadmin.lodev09.com/auth/google
https://smartadmin.lodev09.com/auth/facebook
```

## Secured pages

When someone opens a secure page, you'll have to check if the user is authenticated. Use can do this by requiring `init.auth.php` in the page. This will initiate `$_SESSION` and fill in the `$_user` global variable -- the current logged-in user.

Note that this requires `init.db.php` as well, see [Database Installation](php_db_intro.php#installation) guide.

```php
require_once 'init.php';

// require the db and auth
require_once 'init.db.php';
require_once 'init.auth.php';

// authenticate the page
$app->authenticate_page();
```

The `authenticate_page` method will check if the user is [authenticated](#login). If the page is opened via a browser, it will redirect automatically to the login page if not authenticated. If the request is via `ajax`, it will set the HTTP Status to `403 Forbidden`.