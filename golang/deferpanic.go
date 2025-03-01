package main

import (
	"fmt"
)

func GetData(err bool) {
	defer (func() {
		if err := recover(); err != nil {
			fmt.Println("error:", err)
		}
	})()

	if err {
		panic("gagal mengambil data")
	}
	fmt.Println("berhasil mengambil data")
}

func main() {
	GetData(true)

	fmt.Print("program selesai")
}
