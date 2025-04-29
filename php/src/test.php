<?php
namespace Farid\Php;

use Farid\Php\Bar;
use Farid\Php\Foo;

$foo = new Foo();
$bar = new Bar($foo);

echo $bar->bar();