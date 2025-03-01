package main

import (
	"bufio"
	"io"
	"os"
)

func main() {
	input := bufio.NewReader(os.Stdin)

	for {
		line, _, err := input.ReadLine()

		if err == io.EOF {
			break
		}

		println("output: ", string(line))
	}

}
