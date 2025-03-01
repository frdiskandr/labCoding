package main

import (
	"fmt"
)

type err struct {
	message string
}

func (e err) Error() string {
	return e.message
}
func main() {
	fmt.Printf("%v", err{message: "err message"})
}
