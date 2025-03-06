package app

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"log"
)

func Connection() *gorm.DB {
	defer func() {
		if r := recover(); r != nil {
			log.Println(r)
		}
		log.Println("closed")
	}()

	url := "root:1234@tcp(127.0.0.1:3306)/"

	Db, err := gorm.Open(mysql.Open(url), &gorm.Config{})
	if err != nil {
		panic(err)
	}

	log.Println("connected")
	return Db
}
