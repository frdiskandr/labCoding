package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	name := "10"

	toInt, err := strconv.Atoi(name)
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	fmt.Println(toInt)
}
