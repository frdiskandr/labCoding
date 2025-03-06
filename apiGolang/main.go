package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"goApi/controller"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"log"
	"net/http"
)

type Person struct {
	gorm.Model
	Name string
	Age  int
}

func Connection() *gorm.DB {
	defer func() {
		if r := recover(); r != nil {
			fmt.Println(r)
		}
		fmt.Println("closed")
	}()

	link := "root:1234@tcp(127.0.0.1:3306)/labPrisma"
	Db, err := gorm.Open(mysql.Open(link), &gorm.Config{})
	if err != nil {
		panic(err)
	}
	log.Println("connected")
	return Db
}

func CreateUser(person Person) {
	Db := Connection()

	if err := Db.Create(&person).Error; err != nil {
		fmt.Println("error")
	}
	fmt.Println("created")
}

func GetAllData(table string) []map[string]interface{} {
	var data []map[string]interface{}
	Db := Connection()

	Db.Model(table).Find(&data)

	return data
}

func main() {
	Connection()

	app := gin.Default()

	app.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "hello world",
		})
	})

	app.POST("/", controller.GetReq)

	app.Run(":5000")
}
