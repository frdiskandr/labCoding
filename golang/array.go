package main

import "fmt"

func main() {
	var arr = []string{"Farid", "Iskandar", "Farid", "Iskandar", "Farid"}

	arr[1] = "dudung"

	fmt.Println(arr)
	fmt.Println(len(arr))
}
