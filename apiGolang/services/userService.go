package services

import (
	"fmt"
	"goApi/app"

	"gorm.io/gorm"
)
type Person struct {
	gorm.Model
	Name string
	Age  int
}

func CreateUser(person Person) {
	Db := app.Connection()

	if err := Db.Create(&person).Error; err != nil {
		fmt.Println("error")
	}
	fmt.Println("created")
}

func GetAllData(table string) []map[string]interface{} {
	var data []map[string]interface{}
	Db := app.Connection()

	Db.Model(table).Find(&data)

	return data
}