package main

import "fmt"

type PersonI interface {
	SayHelo() string
}

func sapa(p PersonI) {
	fmt.Print("hello", p.SayHelo())
}

type PersonT struct {
	name string
	age  int
}

func (person PersonT) SayHelo() string {
	return person.name
}

func main() {

	person := PersonT{
		name: "farid",
		age:  18,
	}

	fmt.Println(person)

	sapa(person)
}
