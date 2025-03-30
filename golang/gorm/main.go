package main

import (
	"fmt"
	"log"

	"github.com/frdiskndr/gorm/database"
	"github.com/frdiskndr/gorm/handler"
)

func main() {
	database.Init()

	// loop
	for {

		log.Println("=================================")
		log.Println(" ++ Welcome to GORM REST API ++")
		log.Println("=================================")
		log.Println("select: ")
		log.Println("1. User")
		log.Println("2. Course")
		log.Println("3. UserCourse")
		log.Println("4. Profile")
		log.Println("5. Lesson")
		log.Println("6. Exit")

		var input string
		fmt.Print("Input: ") ; fmt.Scanln(&input)

		switch input {
		case "1":
			handler.UserMenu()
			continue

		case "6":
			log.Println("Goodbye")
			return

		default:
			log.Println("Invalid input")
			return 
		}
	}

}
