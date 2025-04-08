package main

import "fmt"

type PersonI interface {
	SayHelo() string
}

func print(p PersonI) {
	fmt.Print("hello dari sapa ", p.SayHelo())
}

type PersonT struct {
	name string
	age  int
}

type book struct {
	id   int
	name string
}

func (b book) SayHelo() string {
	fmt.Println("")
	return b.name
}

func (person PersonT) SayHelo() string {
	fmt.Println("struck")
	return person.name
}

func main() {

	person := PersonT{
		name: "farid",
		age:  18,
	}

	print(person)

	book := book{
		id:   1,
		name: "book",
	}

	print(book)
}
