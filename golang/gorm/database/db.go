package database

import (
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var Db *gorm.DB

func Init() {
	var err error
	dsn := "host=localhost user=root password=1234 dbname=postgres port=5432 sslmode=disable"
	Db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database", err)
	}

	// err = Db.AutoMigrate(&models.User{}, &models.Profile{}, &models.Course{}, &models.Lesson{}, &models.UserCourse{})
	// if err != nil {
	// 	log.Fatal("Failed to migrate database", err)
	// }

	log.Println("Database connected")
}
