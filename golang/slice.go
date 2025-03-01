package main

import "fmt"

func main() {

	slice := []string{
		"farid",
		"iskandar",
	}

	newSlice := slice[0:2]

	newSlice = append(newSlice, "farid")

	fmt.Println(slice)
	fmt.Println(newSlice)
}
