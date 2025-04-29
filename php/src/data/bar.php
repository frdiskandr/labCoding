<?php 
namespace Farid\Php;

class Bar 
{
    private Foo $foo;

    public function __construct(Foo $foo){
        $this->foo = $foo;
    }
    
    public function bar(){
        return $this->foo->foo();
    }

}