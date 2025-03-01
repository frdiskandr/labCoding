package main

import "fmt"

type person struct {
	name string
}

func (p *person) sayHello() {
	fmt.Println("hai ", p.name)
}

func main() {
	value := person{"farid"}

	fmt.Println(value.name)

	value.sayHello()
}
