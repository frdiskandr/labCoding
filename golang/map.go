package main

import "fmt"

func main() {
	type objek map[string]string

	var objek2 objek = objek{
		"name": "farid",
		"last": "iskandar",
	}

	fmt.Println(objek2["name"])
	fmt.Println(objek2["last"])
}
