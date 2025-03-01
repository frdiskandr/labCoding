package main

import (
	"fmt"
	Api "goroutin/api" 
	"time"
)

func GetData() string {
	return "ini data dari api"
}

func main() {
	for i := 0; i < 100; i++ {
		chain := make(chan string)
		defer func() {
			close(chain)
		}()

		Api.GetData()

		go func() {
			chain <- GetData()
		}()

		go func() {
			data := <-chain
			fmt.Println(data)
		}()

		fmt.Println("sucess")
		time.Sleep(100)
	}
}
