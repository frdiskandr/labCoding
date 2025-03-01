package main

import (
	"fmt"
	"os"
)

func main() {
	//anonimus func
	(func() {
		fmt.Println("hello world")
	})()

	adNum := func(num ...int) int {
		result := 0

		for _, v := range num {
			result += v
		}
		return result
	}

	data := []int{
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
	}

	addStr := func(str ...string) string {
		result := ""

		for _, c := range str {
			result += c
		}
		return result
	}

	fmt.Println(addStr("farid", "iskandar"))

	result := adNum(data...)
	fmt.Println(result)

	sequel := func(a int) func(int) int {
		return func(b int) int {
			return a * b
		}
	}
	sequel1 := sequel(10)
	fmt.Println(sequel1(10))

	fmt.Println(os.Hostname())
}
