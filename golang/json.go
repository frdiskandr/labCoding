package main

import (
	"encoding/json"
	"fmt"
)

var Dbyte []byte

func fromJson(data string, I interface{}) interface{} {
	pool := I
	err := json.Unmarshal([]byte(data), &pool)
	if err != nil {
		fmt.Println(err)
	}
	return pool
}

func ToJson(v interface{}) string {
	Dbyte, err := json.Marshal(v)
	if err != nil {
		fmt.Println(err)
	}
	return string(Dbyte)
}

func main() {
	type user struct {
		name   string
		age    int
		status bool
	}

	data, _ := json.Marshal(user{"farid", 18, true})
	fmt.Println(string(data))

	var u map[string]map[string]string

	


	json.Unmarshal([]byte(data), &u)

	fmt.Println(u)
}
