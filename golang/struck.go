package main

import "fmt"

type Person struct {
	name string
	age  int
}

func (person Person) SayHelo() {
	fmt.Println("hello", person.name)
}

func main() {
	var person Person = Person{
		name: "farid",
		age:  18,
	}

	fmt.Println(person)
	person.SayHelo()
}
