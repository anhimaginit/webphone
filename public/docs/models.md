# PHP Models

A library that allows you to easily create and define your models using PDO.

## Installation

To enable Database functionality, include the `init.db.php` file in your php script. You can also include this in the main `init.php` file to initiate your database globally.

Follow the [database installation](docs_general.php#database) guide if you need help configuring your database.

## Usage

### `Model`
The `\Models\Model` class is a parent class that can be inherited to a **Model** class. Inheriting this class allows you to automatically map the result "row" into your model class (table). This class basically uses the `PDO::FETC_INTO` style and made it easier for you. Here are the steps to link your table into a class:

Create your model class. For example, a `User.php` class.
```php
namespace Models;

class User extends Model {
    public function name() {
        return $this->firstname.' '.$this->lastname;
    }
}
```

Register your table to your custom `Model` class.
```php
// somewhere in your init.db.php
\Models\User::register('users');
```

Now, you can directly get the `User` instance from a query. Example:
```php
$user = \Models\User::query_row("SELECT id, name FROM users WHERE id = 1 AND active = 1");

// You can also do this
// 1 is the id (primary key)
$user = \Models\User::instance(1);

// you can call the get_name() method now
if ($user) {
    $name = $user->name();
    echo 'His name is '.$name;
}
```

### Queries

To query multiple rows of data, you can provide your own SQL to the `query` method of the `Model`. For example:
```php
$users = \Models\User::query("SELECT * FROM users WHERE active = 1");
foreach ($users as $user) {
	$name = $user->name();
	echo 'User #'.$user->id.' '.$name.'<br>';
}
```

<div class="alert alert-info">
	<strong>Pro tip!</strong><br>
	You can pass the <code>$data</code> to the <code>\Bootstrap\Components\Table</code> class to create a table. See <a href="php_tables.php">PHP Components / Table</a> page for more information.
</div>

## Credits

SmartAdmin uses [lodev09/php-models](https://github.com/lodev09/php-models) package to connect and **CRUD** your database. Created by [@lodev09](https://twitter.com/lodev09).