package main

import "fmt"

func main() {
	ch := make(chan string, 2)
	ch <- "farid"
	ch <- "dudung"
	close(ch)

	for c := range ch {
		fmt.Println(c)
	}
}
