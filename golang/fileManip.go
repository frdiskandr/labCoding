package main

import (
	"bufio"
	"fmt"
	"io"
	"os"
)

func writeFile(file, value string) any {

	result, err := os.OpenFile(file, os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)
	if err != nil {
		return err
	}

	defer result.Close()

	_, err = result.WriteString(value + " \n")
	if err != nil {
		return err
	}

	return nil
}

func readFile(file string) any {
	result, err := os.OpenFile(file, os.O_RDONLY, 0666)
	defer (func() {
		result.Close()
		err := recover()
		if err != nil {
			fmt.Println("message: ", err)
		}
	})()

	if err != nil {
		panic(err)
	}

	data := bufio.NewReader(result)

	for {
		line, _, err := data.ReadLine()
		if err == io.EOF {
			break
		}
		fmt.Println(string(line))
	}

	return nil
}

func main() {
	readFile("filea.txt")
}
