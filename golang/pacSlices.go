package main

import (
	"fmt"
	"slices"
)

type SliceStr []string
type SliceInt []int

func main() {
	slice := SliceStr{"farid", "iskandar", "farid", "iskandar", "farid"}
	sliceInt := SliceInt{1, 5, 3, 3, 6, 7, 3, 2}

	new := slices.Clone(slice)

	slices.Sort(sliceInt)
	slices.Insert(slice, 2, "faraaid")

	fmt.Println(slice)
	fmt.Println(sliceInt)
	new = slices.Insert(new, 2, "faraaid")

	fmt.Println(new)
}
